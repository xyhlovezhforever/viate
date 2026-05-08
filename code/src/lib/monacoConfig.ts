/**
 * Monaco Editor 配置
 * 用于浏览器扩展环境，使用本地打包的文件
 */

import { loader } from '@monaco-editor/react'

// Type declaration for chrome API
declare const chrome: any

// 配置 Monaco Editor 使用本地文件
export function configureMonacoForExtension() {
  // 禁用 CDN，使用打包后的本地文件
  loader.config({ monaco: undefined })
}

// Monaco Editor 加载配置
export const monacoOptions = {
  minimap: { enabled: false },
  fontSize: 14,
  wordWrap: 'on' as const,
  automaticLayout: true,
  lineNumbers: 'on' as const,
  scrollBeyondLastLine: false,
  readOnly: false,
  formatOnPaste: true,
  formatOnType: true,
  tabSize: 2,
  insertSpaces: true,
}

// 简化的加载选项（如果 Monaco 加载失败）
export const fallbackEditorOptions = {
  useSimpleEditor: true,
  message: 'Monaco Editor 正在加载中...'
}
