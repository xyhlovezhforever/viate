/**
 * 拖拽式简历构建器
 * 通过拖拽组件快速构建简历
 */

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  DndContext, 
  DragEndEvent,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'
import { Download, Eye, Sparkles } from 'lucide-react'
import { ResumeComponent, ComponentTemplate } from '@/types/resumeBuilder'
import ComponentLibrary from '@/components/builder/ComponentLibrary'
import ResumeComponentRenderer from '@/components/builder/ResumeComponentRenderer'
import ComponentEditor from '@/components/builder/ComponentEditor'
import Button from '@/components/ui/Button'
import { useToast } from '@/hooks/useToast'
import Toast from '@/components/ui/Toast'

const ResumeBuilder = () => {
  const { toast, showToast, hideToast } = useToast()
  const [components, setComponents] = useState<ResumeComponent[]>([])
  const [editingComponent, setEditingComponent] = useState<ResumeComponent | null>(null)
  const [showPreview, setShowPreview] = useState(false)

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  )

  // 添加组件
  const handleAddComponent = (template: ComponentTemplate) => {
    const newComponent: ResumeComponent = {
      id: `${template.type}-${Date.now()}`,
      type: template.type,
      title: template.title,
      content: template.defaultContent,
      order: components.length
    }
    setComponents([...components, newComponent])
    showToast(`已添加 ${template.title}`, 'success')
  }

  // 删除组件
  const handleDeleteComponent = (id: string) => {
    if (confirm('确定要删除这个组件吗？')) {
      setComponents(components.filter(c => c.id !== id))
      showToast('组件已删除', 'success')
    }
  }

  // 编辑组件
  const handleEditComponent = (component: ResumeComponent) => {
    setEditingComponent(component)
  }

  // 保存编辑
  const handleSaveComponent = (updatedComponent: ResumeComponent) => {
    setComponents(components.map(c => 
      c.id === updatedComponent.id ? updatedComponent : c
    ))
    showToast('组件已更新', 'success')
  }

  // 拖拽结束
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (over && active.id !== over.id) {
      setComponents((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  // 保存为 HTML
  const handleSave = () => {
    const html = generateHTML()
    const blob = new Blob([html], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'my-resume.html'
    a.click()
    URL.revokeObjectURL(url)
    showToast('简历已保存', 'success')
  }

  // 生成 HTML
  const generateHTML = () => {
    return `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>我的简历</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.6; color: #333; background: #f5f5f5; padding: 20px; }
    .container { max-width: 800px; margin: 0 auto; background: white; padding: 40px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    h1 { font-size: 2em; margin-bottom: 10px; }
    h2 { font-size: 1.3em; margin: 20px 0 10px; padding-bottom: 5px; border-bottom: 2px solid #3b82f6; }
    h3 { font-size: 1.1em; margin-bottom: 5px; }
    p { margin: 5px 0; }
    ul { margin-left: 20px; }
    .section { margin-bottom: 30px; }
    .header { text-align: center; margin-bottom: 30px; }
    .contact-info { display: flex; justify-content: center; gap: 15px; flex-wrap: wrap; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="container">
    ${components.map(comp => renderComponentHTML(comp)).join('\n')}
  </div>
</body>
</html>
    `.trim()
  }

  // 渲染组件 HTML
  const renderComponentHTML = (component: ResumeComponent): string => {
    switch (component.type) {
      case 'header':
        return `
<div class="section header">
  <h1>${component.content.name}</h1>
  <p style="font-size: 1.1em; color: #666;">${component.content.title}</p>
  <div class="contact-info">
    ${component.content.email ? `<span>📧 ${component.content.email}</span>` : ''}
    ${component.content.phone ? `<span>📱 ${component.content.phone}</span>` : ''}
    ${component.content.location ? `<span>📍 ${component.content.location}</span>` : ''}
  </div>
</div>
        `.trim()

      case 'summary':
        return `
<div class="section">
  <h2>个人简介</h2>
  <p>${component.content.text}</p>
</div>
        `.trim()

      case 'education':
        return `
<div class="section">
  <h2>🎓 教育经历</h2>
  ${component.content.items?.map((item: any) => `
    <div style="margin-bottom: 15px;">
      <div style="display: flex; justify-between; align-items: start;">
        <div>
          <h3>${item.school}</h3>
          <p>${item.degree} - ${item.major}</p>
        </div>
        <span style="color: #666;">${item.startDate} - ${item.endDate}</span>
      </div>
      ${item.gpa ? `<p style="font-size: 0.9em; color: #666;">GPA: ${item.gpa}</p>` : ''}
    </div>
  `).join('')}
</div>
        `.trim()

      case 'experience':
        return `
<div class="section">
  <h2>💼 工作经历</h2>
  ${component.content.items?.map((item: any) => `
    <div style="margin-bottom: 15px;">
      <div style="display: flex; justify-between; align-items: start;">
        <div>
          <h3>${item.position}</h3>
          <p>${item.company} · ${item.location}</p>
        </div>
        <span style="color: #666;">${item.startDate} - ${item.endDate}</span>
      </div>
      ${item.responsibilities?.length > 0 ? `
        <ul>
          ${item.responsibilities.map((r: string) => `<li>${r}</li>`).join('')}
        </ul>
      ` : ''}
    </div>
  `).join('')}
</div>
        `.trim()

      case 'skills':
        return `
<div class="section">
  <h2>⚡ 技能专长</h2>
  ${component.content.categories?.map((cat: any) => `
    <div style="margin-bottom: 10px;">
      <h3>${cat.name}</h3>
      <p>${cat.skills.join(' · ')}</p>
    </div>
  `).join('')}
</div>
        `.trim()

      default:
        return `<div class="section"><h2>${component.title}</h2></div>`
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950">
      <div className="container mx-auto px-4 py-8">
        {/* 顶部栏 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-6"
        >
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
              <Sparkles className="w-8 h-8 text-blue-600" />
              拖拽式简历构建器
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              通过拖拽组件快速创建专业简历
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              {showPreview ? '编辑模式' : '预览模式'}
            </Button>
            <Button
              onClick={handleSave}
              className="flex items-center gap-2"
              disabled={components.length === 0}
            >
              <Download className="w-4 h-4" />
              导出 HTML
            </Button>
          </div>
        </motion.div>

        {/* 主内容区 */}
        <div className="grid grid-cols-12 gap-6">
          {/* 左侧：组件库 */}
          {!showPreview && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="col-span-3"
            >
              <div className="sticky top-4">
                <ComponentLibrary onAddComponent={handleAddComponent} />
              </div>
            </motion.div>
          )}

          {/* 右侧：画布区 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className={showPreview ? 'col-span-12' : 'col-span-9'}
          >
            <div className="bg-white rounded-lg shadow-lg p-8 min-h-[800px]">
              {components.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <div className="text-6xl mb-4">📄</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    开始构建你的简历
                  </h3>
                  <p className="text-gray-600 max-w-md">
                    从左侧组件库中选择需要的组件，点击添加到简历中。
                    你可以随时编辑内容和调整顺序。
                  </p>
                </div>
              ) : (
                <DndContext
                  sensors={sensors}
                  collisionDetection={closestCenter}
                  onDragEnd={handleDragEnd}
                >
                  <SortableContext
                    items={components.map(c => c.id)}
                    strategy={verticalListSortingStrategy}
                  >
                    {components.map((component) => (
                      <ResumeComponentRenderer
                        key={component.id}
                        component={component}
                        onEdit={handleEditComponent}
                        onDelete={handleDeleteComponent}
                      />
                    ))}
                  </SortableContext>
                </DndContext>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* 编辑对话框 */}
      <ComponentEditor
        component={editingComponent}
        onSave={handleSaveComponent}
        onClose={() => setEditingComponent(null)}
      />

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

export default ResumeBuilder
