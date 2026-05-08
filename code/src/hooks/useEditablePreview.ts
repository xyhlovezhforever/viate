import { useEffect, useRef, useState } from 'react'

interface UseEditablePreviewProps {
  html: string
  onChange: (newHtml: string) => void
  enabled?: boolean
}

export const useEditablePreview = ({ html, onChange, enabled = true }: UseEditablePreviewProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const [isEditing, setIsEditing] = useState(false)
  const observerRef = useRef<MutationObserver | null>(null)

  useEffect(() => {
    if (!enabled || !iframeRef.current) return

    const iframe = iframeRef.current
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document

    if (!iframeDoc) return

    // 等待 iframe 加载完成
    const setupEditable = () => {
      if (!iframeDoc.body) return

      // 使所有文本元素可编辑
      const textElements = iframeDoc.querySelectorAll(
        'p, h1, h2, h3, h4, h5, h6, span, div, li, td, th, a, label, button'
      )

      textElements.forEach((element) => {
        const htmlElement = element as HTMLElement
        
        // 设置可编辑
        htmlElement.contentEditable = 'true'
        htmlElement.style.cursor = 'text'
        
        // 添加编辑提示
        htmlElement.addEventListener('mouseenter', () => {
          if (!isEditing) {
            htmlElement.style.outline = '1px dashed rgba(102, 126, 234, 0.5)'
          }
        })
        
        htmlElement.addEventListener('mouseleave', () => {
          if (!isEditing) {
            htmlElement.style.outline = 'none'
          }
        })

        htmlElement.addEventListener('focus', () => {
          setIsEditing(true)
          htmlElement.style.outline = '2px solid rgba(102, 126, 234, 0.8)'
          htmlElement.style.backgroundColor = 'rgba(102, 126, 234, 0.05)'
        })

        htmlElement.addEventListener('blur', () => {
          setIsEditing(false)
          htmlElement.style.outline = 'none'
          htmlElement.style.backgroundColor = ''
        })
      })

      // 优化：使用 input 事件代替 MutationObserver，性能更好
      const handleInput = () => {
        clearTimeout((window as any).__editablePreviewTimeout)
        ;(window as any).__editablePreviewTimeout = setTimeout(() => {
          const newHtml = iframeDoc.documentElement.outerHTML
          onChange(newHtml)
        }, 1000) // 增加到 1 秒，减少更新频率
      }

      // 只在完成编辑时同步（失去焦点）
      const handleBlur = () => {
        clearTimeout((window as any).__editablePreviewTimeout)
        const newHtml = iframeDoc.documentElement.outerHTML
        onChange(newHtml)
      }

      textElements.forEach((element) => {
        element.addEventListener('input', handleInput)
        element.addEventListener('blur', handleBlur)
      })

      // 添加全局提示
      addEditingHint(iframeDoc)
    }

    // 监听 iframe 加载
    if (iframe.contentWindow) {
      iframe.addEventListener('load', setupEditable)
      setupEditable() // 如果已经加载，直接设置
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      iframe.removeEventListener('load', setupEditable)
    }
  }, [html, onChange, enabled, isEditing])

  return { iframeRef, isEditing }
}

// 添加编辑提示
function addEditingHint(doc: Document) {
  // 检查是否已添加
  if (doc.getElementById('editing-hint')) return

  const hint = doc.createElement('div')
  hint.id = 'editing-hint'
  hint.innerHTML = `
    <style>
      #editing-hint {
        position: fixed;
        top: 10px;
        right: 10px;
        background: linear-gradient(135deg, #667eea, #764ba2);
        color: white;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 12px;
        font-weight: 500;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        z-index: 9999;
        animation: fadeIn 0.3s ease-in-out;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      #editing-hint::before {
        content: '✏️';
        margin-right: 6px;
      }
    </style>
    点击任意文字即可编辑
  `
  doc.body.appendChild(hint)

  // 3秒后自动隐藏
  setTimeout(() => {
    if (hint.parentNode) {
      hint.style.animation = 'fadeOut 0.3s ease-in-out'
      hint.style.opacity = '0'
      setTimeout(() => hint.remove(), 300)
    }
  }, 3000)
}
