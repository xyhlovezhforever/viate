/**
 * 组件库面板
 * 显示可拖拽的简历组件模板
 */

import { componentTemplates, ComponentTemplate } from '@/types/resumeBuilder'
import { Plus } from 'lucide-react'

interface Props {
  onAddComponent: (template: ComponentTemplate) => void
}

const ComponentLibrary = ({ onAddComponent }: Props) => {
  return (
    <div className="h-full bg-gray-50 border-r border-gray-200 overflow-y-auto">
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-900 mb-2">组件库</h2>
        <p className="text-sm text-gray-600 mb-4">点击添加组件到简历中</p>

        <div className="space-y-2">
          {componentTemplates.map((template) => (
            <button
              key={template.type}
              onClick={() => onAddComponent(template)}
              className="w-full text-left p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-sm transition-all group"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0">{template.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {template.title}
                    </h3>
                    <Plus className="w-4 h-4 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {template.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* 提示信息 */}
      <div className="p-4 border-t border-gray-200 bg-blue-50 mt-4">
        <h3 className="font-semibold text-sm text-blue-900 mb-2">💡 使用提示</h3>
        <ul className="text-xs text-blue-800 space-y-1">
          <li>• 点击组件添加到简历</li>
          <li>• 拖拽组件调整顺序</li>
          <li>• 点击编辑按钮修改内容</li>
          <li>• 点击删除按钮移除组件</li>
        </ul>
      </div>
    </div>
  )
}

export default ComponentLibrary
