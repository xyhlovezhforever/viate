/**
 * Monaco Editor 本地加载器
 * 完全禁用 CDN，只使用本地打包文件
 */

import * as monaco from 'monaco-editor'
import { loader } from '@monaco-editor/react'

// 配置使用本地 Monaco Editor
export function setupMonacoEditor() {
  // 直接设置 monaco 实例，跳过 loader
  loader.config({ monaco })
  
  // 确保已初始化
  return monaco
}

export default setupMonacoEditor
