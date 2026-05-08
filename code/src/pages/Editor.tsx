import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Editor from '@monaco-editor/react'
import { Save, Download, Eye, Code, Github, ArrowLeft, Sparkles, Layout } from 'lucide-react'
import { useResumeStore } from '@/store/useResumeStore'
import { useSettingsStore } from '@/store/useSettingsStore'
import { exportToPDF } from '@/lib/pdfExporter'
import { publishToGitHub } from '@/lib/githubPublisher'
import Button from '@/components/ui/Button'
import { useToast } from '@/hooks/useToast'
import Toast from '@/components/ui/Toast'
import ResizablePanels from '@/components/ResizablePanels'
import LightweightEditablePreview from '@/components/LightweightEditablePreview'
import { monacoOptions } from '@/lib/monacoConfig'

const EditorPage = () => {
  const navigate = useNavigate()
  const { toast, showToast, hideToast } = useToast()
  
  const { currentResumeId, currentHtml, setCurrentHtml, updateResume, getResumeById } = useResumeStore()
  const { githubConfig, autoSave } = useSettingsStore()
  
  const [activeTab, setActiveTab] = useState<'code' | 'preview' | 'split'>('split')
  const [isSaving, setIsSaving] = useState(false)
  const [isPublishing, setIsPublishing] = useState(false)
  const [isExporting, setIsExporting] = useState(false)

  useEffect(() => {
    if (!currentResumeId) {
      navigate('/templates')
    }
  }, [currentResumeId, navigate])

  useEffect(() => {
    if (autoSave && currentResumeId && currentHtml) {
      const timer = setTimeout(() => {
        updateResume(currentResumeId, currentHtml)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [currentHtml, autoSave, currentResumeId, updateResume])

  const handleSave = () => {
    if (currentResumeId) {
      setIsSaving(true)
      updateResume(currentResumeId, currentHtml)
      setTimeout(() => {
        setIsSaving(false)
        showToast('简历已保存！', 'success')
      }, 500)
    }
  }

  const handleExportPDF = async () => {
    setIsExporting(true)
    showToast('正在生成 PDF...', 'info')
    
    try {
      // 创建临时iframe来渲染HTML
      const tempIframe = document.createElement('iframe')
      tempIframe.style.position = 'fixed'
      tempIframe.style.left = '-9999px'
      tempIframe.style.width = '210mm'
      tempIframe.style.height = '297mm'
      document.body.appendChild(tempIframe)

      // 写入HTML内容
      const iframeDoc = tempIframe.contentDocument || tempIframe.contentWindow?.document
      if (!iframeDoc) {
        throw new Error('无法创建预览')
      }

      iframeDoc.open()
      iframeDoc.write(currentHtml)
      iframeDoc.close()

      // 等待内容加载和样式渲染
      await new Promise(resolve => setTimeout(resolve, 1000))

      const resume = currentResumeId ? getResumeById(currentResumeId) : null
      const filename = resume?.name || '简历'
      
      // 导出PDF
      await exportToPDF(iframeDoc.body, filename)
      
      // 清理临时iframe
      document.body.removeChild(tempIframe)
      
      setIsExporting(false)
      showToast('PDF 导出成功！', 'success')
    } catch (error) {
      console.error('导出PDF失败:', error)
      setIsExporting(false)
      showToast('导出失败，请重试', 'error')
    }
  }

  const handlePublishToGitHub = async () => {
    if (!githubConfig) {
      showToast('请先在设置页面配置 GitHub 信息', 'warning')
      setTimeout(() => navigate('/settings'), 1500)
      return
    }

    setIsPublishing(true)
    const result = await publishToGitHub(currentHtml, githubConfig)
    setIsPublishing(false)

    if (result.success) {
      showToast(`发布成功！访问：${result.url}`, 'success')
    } else {
      showToast(result.error || '发布失败', 'error')
    }
  }

  if (!currentResumeId) {
    return null
  }

  return (
    <div className="h-screen pt-16 flex flex-col">
      {/* Toolbar */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/templates')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              返回
            </Button>

            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2" />

            <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
              <Sparkles className="w-5 h-5 text-yellow-500" />
            </motion.div>
            <span className="font-medium dark:text-white">实时编辑</span>

            <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
              <Button
                variant={activeTab === 'code' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab('code')}
                className={activeTab === 'code' ? 'shadow-sm' : ''}
              >
                <Code className="w-4 h-4 mr-2" />
                代码
              </Button>
              <Button
                variant={activeTab === 'preview' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab('preview')}
                className={activeTab === 'preview' ? 'shadow-sm' : ''}
              >
                <Eye className="w-4 h-4 mr-2" />
                预览
              </Button>
              <Button
                variant={activeTab === 'split' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setActiveTab('split')}
                className={activeTab === 'split' ? 'shadow-sm' : ''}
              >
                <Layout className="w-4 h-4 mr-2" />
                分屏
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={handleSave}
                isLoading={isSaving}
              >
                <Save className="w-4 h-4 mr-2" />
                保存
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleExportPDF}
                isLoading={isExporting}
                disabled={isExporting}
              >
                <Download className="w-4 h-4 mr-2" />
                {isExporting ? '导出中...' : '导出PDF'}
              </Button>
              <Button
                size="sm"
                onClick={handlePublishToGitHub}
                isLoading={isPublishing}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Github className="w-4 h-4 mr-2" />
                发布
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Editor/Preview */}
      <div className="flex-1 overflow-hidden">
        {/* 代码编辑模式 */}
        {activeTab === 'code' && (
          <motion.div
            key="code"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            <Editor
              height="100%"
              defaultLanguage="html"
              value={currentHtml}
              onChange={(value) => setCurrentHtml(value || '')}
              theme="vs-dark"
              options={monacoOptions}
              loading={
                <div className="flex items-center justify-center h-full bg-gray-900">
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
                    <p className="text-gray-400 text-lg">Monaco Editor 加载中...</p>
                    <p className="text-sm text-gray-500 mt-2">首次加载可能需要几秒钟，请耐心等待</p>
                  </div>
                </div>
              }
            />
          </motion.div>
        )}

        {/* 预览模式 */}
        {activeTab === 'preview' && (
          <motion.div
            key="preview"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            <LightweightEditablePreview
              html={currentHtml}
              onChange={(newHtml) => setCurrentHtml(newHtml)}
            />
          </motion.div>
        )}

        {/* 分屏模式 */}
        {activeTab === 'split' && (
          <motion.div
            key="split"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            <ResizablePanels
              leftPanel={
                <Editor
                  height="100%"
                  defaultLanguage="html"
                  value={currentHtml}
                  onChange={(value) => setCurrentHtml(value || '')}
                  theme="vs-dark"
                  options={monacoOptions}
                  loading={
                    <div className="flex items-center justify-center h-full bg-gray-900">
                      <div className="text-center">
                        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mb-2"></div>
                        <p className="text-sm text-gray-400">加载编辑器...</p>
                      </div>
                    </div>
                  }
                />
              }
              rightPanel={
                <LightweightEditablePreview
                  html={currentHtml}
                  onChange={(newHtml) => setCurrentHtml(newHtml)}
                />
              }
              defaultLeftWidth={50}
              minLeftWidth={20}
              maxLeftWidth={80}
            />
          </motion.div>
        )}
      </div>

      {/* Toast 通知 */}
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />
    </div>
  )
}

export default EditorPage
