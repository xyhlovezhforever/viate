import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { Upload, Eye, Edit, Wand2 } from 'lucide-react'
import { templates } from '@/templates'
import { useResumeStore } from '@/store/useResumeStore'
import Button from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card'
import Modal from '@/components/ui/Modal'
import TemplateCustomizer, { TemplateCustomization } from '@/components/TemplateCustomizer'
import { applyCustomization } from '@/lib/templateCustomizer'
import { useState } from 'react'

const Templates = () => {
  const navigate = useNavigate()
  const { createResume } = useResumeStore()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [previewTemplate, setPreviewTemplate] = useState<typeof templates[0] | null>(null)
  const [customizing, setCustomizing] = useState<typeof templates[0] | null>(null)

  const categories = [
    { id: 'all', name: '全部' },
    { id: 'modern', name: '现代' },
    { id: 'classic', name: '经典' },
    { id: 'creative', name: '创意' },
  ]

  const filteredTemplates = selectedCategory === 'all' 
    ? templates 
    : templates.filter(t => t.category === selectedCategory)

  const handleSelectTemplate = (template: typeof templates[0]) => {
    createResume(template)
    navigate('/editor')
  }

  const handlePreview = (template: typeof templates[0]) => {
    setPreviewTemplate(template)
  }

  const handleCustomize = (template: typeof templates[0]) => {
    setCustomizing(template)
  }

  const handleApplyCustomization = (customization: TemplateCustomization) => {
    if (!customizing) return
    
    // 应用定制到模板HTML
    const customizedHtml = applyCustomization(customizing.html, customization)
    
    // 创建定制后的简历
    const customizedTemplate = {
      ...customizing,
      html: customizedHtml,
      name: `${customizing.name}（已定制）`,
    }
    
    createResume(customizedTemplate)
    navigate('/editor')
  }

  const handleUploadTemplate = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.html'
    input.onchange = (e: Event) => {
      const file = (e.target as HTMLInputElement).files?.[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (event) => {
          const html = event.target?.result as string
          const customTemplate = {
            id: `custom-${Date.now()}`,
            name: file.name.replace('.html', ''),
            description: '自定义上传的模板',
            thumbnail: '',
            html,
            category: 'modern' as const,
          }
          createResume(customTemplate)
          navigate('/editor')
        }
        reader.readAsText(file)
      }
    }
    input.click()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold mb-4">选择简历模板</h1>
        <p className="text-lg text-muted-foreground">从多种专业模板中选择，或上传自己的HTML模板</p>
      </motion.div>

      {/* Category Filter */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredTemplates.map((template, index) => (
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card hover className="h-full flex flex-col overflow-hidden">
              <CardHeader className="pb-3">
                <div className="relative w-full h-48 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-lg mb-3 overflow-hidden border border-gray-200 dark:border-gray-700">
                  <iframe
                    srcDoc={template.html}
                    className="absolute top-0 left-0 pointer-events-none border-0"
                    style={{ 
                      width: '1000px',
                      height: '1414px',
                      transform: 'scale(0.2)',
                      transformOrigin: 'top left'
                    }}
                    sandbox="allow-same-origin"
                  />
                </div>
                <CardTitle className="text-lg">{template.name}</CardTitle>
                <CardDescription className="text-sm line-clamp-2">{template.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto gap-2 pt-0 pb-4">
                <Button
                  className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={() => handleSelectTemplate(template)}
                  size="sm"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  编辑
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleCustomize(template)}
                  className="hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-950 dark:hover:to-pink-950"
                >
                  <Wand2 className="w-4 h-4 mr-2" />
                  定制
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handlePreview(template)}
                  className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-950 dark:hover:to-purple-950"
                >
                  <Eye className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}

        {/* Upload Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: filteredTemplates.length * 0.1 }}
        >
          <Card 
            hover 
            className="h-full flex flex-col cursor-pointer border-2 border-dashed border-blue-300 dark:border-blue-700 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-950/50 transition-all"
            onClick={handleUploadTemplate}
          >
            <CardContent className="flex-1 flex flex-col items-center justify-center p-6 min-h-[340px]">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Upload className="w-12 h-12 text-blue-500 mb-4" />
              </motion.div>
              <CardTitle className="mb-2 text-lg">上传自定义模板</CardTitle>
              <CardDescription className="text-center text-sm">
                上传您自己的 HTML 文件作为简历模板
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* 模板预览模态框 */}
      <Modal
        isOpen={!!previewTemplate}
        onClose={() => setPreviewTemplate(null)}
        title={previewTemplate?.name}
        size="full"
      >
        <div className="h-[85vh] bg-gray-50 dark:bg-gray-900 p-8 overflow-auto">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
          >
            <iframe
              srcDoc={previewTemplate?.html}
              className="w-full h-[75vh] border-0"
              title="模板预览"
            />
          </motion.div>
        </div>
      </Modal>

      {/* 模板定制器 */}
      <TemplateCustomizer
        isOpen={!!customizing}
        onClose={() => setCustomizing(null)}
        onApply={handleApplyCustomization}
      />
    </div>
  )
}

export default Templates
