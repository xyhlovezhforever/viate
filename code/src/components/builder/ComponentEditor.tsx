/**
 * 组件编辑器
 * 编辑简历组件的内容和样式
 */

import { useState, useEffect } from 'react'
import { ResumeComponent, ComponentStyle } from '@/types/resumeBuilder'
import { X, Save, FileText, Palette } from 'lucide-react'
import Button from '@/components/ui/Button'
import StyleEditor from './StyleEditor'

interface Props {
  component: ResumeComponent | null
  onSave: (component: ResumeComponent) => void
  onClose: () => void
}

const ComponentEditor = ({ component, onSave, onClose }: Props) => {
  const [content, setContent] = useState<string>('')
  const [style, setStyle] = useState<ComponentStyle>({})
  const [activeTab, setActiveTab] = useState<'content' | 'style'>('content')

  useEffect(() => {
    if (component) {
      // 将内容转换为 JSON 字符串以便编辑
      setContent(JSON.stringify(component.content, null, 2))
      setStyle(component.style || {})
    }
  }, [component])

  if (!component) return null

  const handleSave = () => {
    if (activeTab === 'content') {
      try {
        const parsedContent = JSON.parse(content)
        onSave({
          ...component,
          content: parsedContent,
          style
        })
        onClose()
      } catch (error) {
        alert('JSON 格式错误，请检查后重试')
      }
    } else {
      onSave({
        ...component,
        style
      })
      onClose()
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col">
        {/* 头部 */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">编辑 {component.title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 选项卡 */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab('content')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 font-medium transition-colors ${
              activeTab === 'content'
                ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <FileText className="w-4 h-4" />
            内容编辑
          </button>
          <button
            onClick={() => setActiveTab('style')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 font-medium transition-colors ${
              activeTab === 'style'
                ? 'text-purple-600 border-b-2 border-purple-600 bg-purple-50'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            }`}
          >
            <Palette className="w-4 h-4" />
            样式设计
          </button>
        </div>

        {/* 内容区域 */}
        <div className="flex-1 overflow-auto p-4">
          {activeTab === 'content' ? (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  组件内容（JSON 格式）
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full h-96 p-3 font-mono text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="编辑组件内容..."
                />
                <p className="mt-2 text-xs text-gray-600">
                  💡 提示：内容格式为 JSON，请确保格式正确。可以添加、修改或删除字段。
                </p>
              </div>

              {/* 快速参考 */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h3 className="font-semibold text-sm text-blue-900 mb-2">📚 字段说明</h3>
                <div className="text-xs text-blue-800 space-y-1">
                  {component.type === 'header' && (
                    <>
                      <p>• name: 姓名</p>
                      <p>• title: 职位/标题</p>
                      <p>• email, phone, location: 联系方式</p>
                    </>
                  )}
                  {(component.type === 'education' || component.type === 'experience' || component.type === 'project') && (
                    <p>• items: 数组格式，包含多个条目</p>
                  )}
                  {component.type === 'skills' && (
                    <p>• categories: 技能分类，每个分类包含 name 和 skills 数组</p>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">🎨 自定义样式</h3>
                <p className="text-xs text-gray-600">
                  调整颜色、字体、布局等样式，让你的简历更加炫酷！
                </p>
              </div>
              <StyleEditor style={style} onChange={setStyle} />
            </div>
          )}
        </div>

        {/* 底部操作栏 */}
        <div className="flex items-center justify-end gap-3 p-4 border-t border-gray-200">
          <Button variant="outline" onClick={onClose}>
            取消
          </Button>
          <Button onClick={handleSave} className="flex items-center gap-2">
            <Save className="w-4 h-4" />
            保存
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ComponentEditor
