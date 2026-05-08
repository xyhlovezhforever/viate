import { useState, useRef, useEffect, ReactNode } from 'react'
import { motion } from 'framer-motion'
import { GripVertical } from 'lucide-react'

interface ResizablePanelsProps {
  leftPanel: ReactNode
  rightPanel: ReactNode
  defaultLeftWidth?: number
  minLeftWidth?: number
  maxLeftWidth?: number
}

const ResizablePanels = ({
  leftPanel,
  rightPanel,
  defaultLeftWidth = 50,
  minLeftWidth = 20,
  maxLeftWidth = 80,
}: ResizablePanelsProps) => {
  const [leftWidth, setLeftWidth] = useState(defaultLeftWidth)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return

      const container = containerRef.current
      const containerRect = container.getBoundingClientRect()
      const newLeftWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100

      // 限制在最小和最大宽度之间
      const clampedWidth = Math.min(Math.max(newLeftWidth, minLeftWidth), maxLeftWidth)
      setLeftWidth(clampedWidth)
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      document.body.style.cursor = 'default'
      document.body.style.userSelect = 'auto'
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      document.body.style.cursor = 'col-resize'
      document.body.style.userSelect = 'none'
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, minLeftWidth, maxLeftWidth])

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  return (
    <div ref={containerRef} className="flex h-full w-full overflow-hidden">
      {/* 左侧面板 */}
      <div style={{ width: `${leftWidth}%` }} className="overflow-hidden">
        {leftPanel}
      </div>

      {/* 拖拽分隔条 */}
      <div
        onMouseDown={handleMouseDown}
        className={`
          relative w-1 bg-gray-200 dark:bg-gray-700 
          hover:bg-blue-500 dark:hover:bg-blue-500
          cursor-col-resize group transition-colors
          ${isDragging ? 'bg-blue-500' : ''}
        `}
      >
        {/* 拖拽手柄 */}
        <div className="absolute inset-y-0 -left-1 -right-1 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.2 }}
            className={`
              h-12 w-3 rounded-full 
              bg-gray-300 dark:bg-gray-600
              group-hover:bg-blue-500 dark:group-hover:bg-blue-500
              flex items-center justify-center
              shadow-lg
              transition-colors
              ${isDragging ? 'bg-blue-500 scale-110' : ''}
            `}
          >
            <GripVertical className="w-3 h-3 text-white" />
          </motion.div>
        </div>

        {/* 拖拽时的视觉反馈线 */}
        {isDragging && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 w-0.5 bg-blue-500 shadow-lg shadow-blue-500/50"
          />
        )}
      </div>

      {/* 右侧面板 */}
      <div style={{ width: `${100 - leftWidth}%` }} className="overflow-hidden">
        {rightPanel}
      </div>
    </div>
  )
}

export default ResizablePanels
