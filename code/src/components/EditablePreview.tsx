import { useEditablePreview } from '@/hooks/useEditablePreview'
import { Card } from './ui/Card'
import { motion } from 'framer-motion'
import { Edit3, Eye } from 'lucide-react'

interface EditablePreviewProps {
  html: string
  onChange: (newHtml: string) => void
  editable?: boolean
  className?: string
}

const EditablePreview = ({ html, onChange, editable = true, className = '' }: EditablePreviewProps) => {
  const { iframeRef, isEditing } = useEditablePreview({
    html,
    onChange,
    enabled: editable,
  })

  return (
    <div className={`relative h-full ${className}`}>
      {/* 编辑状态指示器 */}
      {editable && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-4 right-4 z-10"
        >
          <div className={`
            flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium
            transition-all duration-300
            ${isEditing 
              ? 'bg-green-500 text-white shadow-lg shadow-green-500/30' 
              : 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
            }
          `}>
            {isEditing ? (
              <>
                <Edit3 className="w-3.5 h-3.5 animate-pulse" />
                <span>编辑中...</span>
              </>
            ) : (
              <>
                <Eye className="w-3.5 h-3.5" />
                <span>点击文字可编辑</span>
              </>
            )}
          </div>
        </motion.div>
      )}

      {/* 预览区域 */}
      <div className="h-full bg-gray-50 dark:bg-gray-950 overflow-auto p-4">
        <Card className="max-w-4xl mx-auto h-full overflow-auto">
          <iframe
            ref={iframeRef}
            srcDoc={html}
            className="w-full h-full border-0"
            title="可编辑预览"
            sandbox="allow-same-origin allow-scripts"
          />
        </Card>
      </div>
    </div>
  )
}

export default EditablePreview
