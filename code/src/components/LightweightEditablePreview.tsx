import { useRef, useState, useEffect } from 'react'
import { Card } from './ui/Card'
import { motion } from 'framer-motion'
import { Edit3, Eye, Zap } from 'lucide-react'
import Button from './ui/Button'

interface LightweightEditablePreviewProps {
  html: string
  onChange: (newHtml: string) => void
  className?: string
}

/**
 * 轻量级可编辑预览 - 性能优化版本
 * 
 * 优化策略：
 * 1. 手动同步模式 - 点击"同步"按钮才更新代码
 * 2. 减少 iframe 重渲染
 * 3. 本地编辑缓存
 */
const LightweightEditablePreview = ({ html, onChange, className = '' }: LightweightEditablePreviewProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [hasChanges, setHasChanges] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const cachedHtmlRef = useRef(html)

  // 初始化可编辑功能
  useEffect(() => {
    if (!editMode || !iframeRef.current) return

    const iframe = iframeRef.current
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document
    if (!iframeDoc) return

    const setupEditable = () => {
      if (!iframeDoc.body) return

      // 使所有文本元素可编辑
      const textElements = iframeDoc.querySelectorAll(
        'p, h1, h2, h3, h4, h5, h6, span, div, li, td, th, a, label'
      )

      textElements.forEach((element) => {
        const htmlElement = element as HTMLElement
        htmlElement.contentEditable = 'true'
        htmlElement.style.cursor = 'text'

        // 简化的悬停效果
        htmlElement.addEventListener('mouseenter', () => {
          if (!isEditing) {
            htmlElement.style.outline = '1px dashed #667eea'
          }
        })

        htmlElement.addEventListener('mouseleave', () => {
          if (!isEditing) {
            htmlElement.style.outline = 'none'
          }
        })

        htmlElement.addEventListener('focus', () => {
          setIsEditing(true)
          htmlElement.style.outline = '2px solid #667eea'
          htmlElement.style.backgroundColor = 'rgba(102, 126, 234, 0.05)'
        })

        htmlElement.addEventListener('blur', () => {
          setIsEditing(false)
          htmlElement.style.outline = 'none'
          htmlElement.style.backgroundColor = ''
        })

        // 监听输入
        htmlElement.addEventListener('input', () => {
          setHasChanges(true)
        })
      })

      // 添加编辑提示
      addEditingHint(iframeDoc)
    }

    iframe.addEventListener('load', setupEditable)
    setupEditable()

    return () => {
      iframe.removeEventListener('load', setupEditable)
    }
  }, [editMode, isEditing])

  // 手动同步到代码
  const handleSync = () => {
    if (!iframeRef.current) return

    const iframeDoc = iframeRef.current.contentDocument
    if (!iframeDoc) return

    const newHtml = iframeDoc.documentElement.outerHTML
    cachedHtmlRef.current = newHtml
    onChange(newHtml)
    setHasChanges(false)
  }

  // 切换编辑模式
  const toggleEditMode = () => {
    if (editMode && hasChanges) {
      // 退出编辑前同步
      handleSync()
    }
    setEditMode(!editMode)
  }

  return (
    <div className={`relative h-full ${className}`}>
      {/* 工具栏 */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
        {/* 编辑模式切换 */}
        <Button
          size="sm"
          variant={editMode ? 'default' : 'outline'}
          onClick={toggleEditMode}
          className={editMode ? 'bg-purple-600 hover:bg-purple-700' : ''}
        >
          {editMode ? (
            <>
              <Edit3 className="w-4 h-4 mr-2" />
              编辑模式
            </>
          ) : (
            <>
              <Eye className="w-4 h-4 mr-2" />
              预览模式
            </>
          )}
        </Button>

        {/* 同步按钮 */}
        {editMode && hasChanges && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <Button
              size="sm"
              onClick={handleSync}
              className="bg-green-600 hover:bg-green-700 animate-pulse"
            >
              <Zap className="w-4 h-4 mr-2" />
              同步到代码
            </Button>
          </motion.div>
        )}

        {/* 编辑状态 */}
        {editMode && !hasChanges && (
          <div className="px-3 py-1.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-600">
            {isEditing ? (
              <>
                <Edit3 className="w-3.5 h-3.5 inline mr-1" />
                编辑中
              </>
            ) : (
              '点击文字编辑'
            )}
          </div>
        )}
      </div>

      {/* 预览区域 */}
      <div className="h-full bg-gray-50 dark:bg-gray-950 overflow-auto p-4">
        <Card className="max-w-4xl mx-auto h-full overflow-auto">
          <iframe
            ref={iframeRef}
            srcDoc={html}
            className="w-full h-full border-0"
            title="预览"
            sandbox="allow-same-origin allow-scripts"
          />
        </Card>
      </div>
    </div>
  )
}

// 添加编辑提示
function addEditingHint(doc: Document) {
  if (doc.getElementById('editing-hint')) return

  const hint = doc.createElement('div')
  hint.id = 'editing-hint'
  hint.innerHTML = `
    <style>
      #editing-hint {
        position: fixed;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 500;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: slideDown 0.3s ease-out;
        font-family: -apple-system, sans-serif;
      }
      @keyframes slideDown {
        from { opacity: 0; transform: translateX(-50%) translateY(-20px); }
        to { opacity: 1; transform: translateX(-50%) translateY(0); }
      }
    </style>
    ✏️ 点击任意文字编辑，完成后点击"同步到代码"
  `
  doc.body.appendChild(hint)

  setTimeout(() => {
    if (hint.parentNode) {
      hint.style.transition = 'opacity 0.3s'
      hint.style.opacity = '0'
      setTimeout(() => hint.remove(), 300)
    }
  }, 4000)
}

export default LightweightEditablePreview
