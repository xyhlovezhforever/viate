/**
 * 简单代码编辑器
 * 当 Monaco Editor 无法加载时作为后备方案
 */

import { useEffect, useRef } from 'react'

interface SimpleCodeEditorProps {
  value: string
  onChange: (value: string) => void
  height?: string
  className?: string
}

const SimpleCodeEditor = ({ value, onChange, height = '100%', className = '' }: SimpleCodeEditorProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      // 自动调整高度
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px'
    }
  }, [value])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Tab 键插入缩进
    if (e.key === 'Tab') {
      e.preventDefault()
      const start = e.currentTarget.selectionStart
      const end = e.currentTarget.selectionEnd
      const newValue = value.substring(0, start) + '  ' + value.substring(end)
      onChange(newValue)
      
      // 设置光标位置
      setTimeout(() => {
        if (textareaRef.current) {
          textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 2
        }
      }, 0)
    }
  }

  return (
    <div className={`relative w-full ${className}`} style={{ height }}>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full h-full p-4 font-mono text-sm bg-gray-900 text-gray-100 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        spellCheck={false}
        style={{
          minHeight: '100%',
          lineHeight: '1.5',
          tabSize: 2,
        }}
      />
      <div className="absolute top-2 right-2 text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
        简单编辑器模式
      </div>
    </div>
  )
}

export default SimpleCodeEditor
