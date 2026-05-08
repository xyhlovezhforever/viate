import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { default as monacoEditorPlugin } from 'vite-plugin-monaco-editor'

const { resolve } = path

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    (monacoEditorPlugin as any).default({
      languageWorkers: ['editorWorkerService', 'typescript', 'json', 'html']
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'editor': ['monaco-editor', '@monaco-editor/react'],
          'pdf': ['html2canvas', 'jspdf'],
        },
        // 不内联任何内容，避免 CSP 问题
        inlineDynamicImports: false,
      },
    },
    // Chrome extension requires specific CSP
    // Ensure no eval() is used in production build
    minify: 'esbuild',
    // 确保没有内联脚本
    cssCodeSplit: true,
    assetsInlineLimit: 0, // 不内联任何资源
  },
})
