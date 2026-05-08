import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Home from './pages/Home'
import Templates from './pages/Templates'
import Editor from './pages/Editor'
import Settings from './pages/Settings'
import ResumeBuilder from './pages/ResumeBuilder'
import Navigation from './components/Navigation'
import { useSettingsStore } from './store/useSettingsStore'
import { useResumeStore } from './store/useResumeStore'
import setupMonacoEditor from './lib/monacoLoader'

function App() {
  const isDarkMode = useSettingsStore((state) => state.isDarkMode)
  const loadSettingsFromStorage = useSettingsStore((state) => state.loadFromStorage)
  const loadResumesFromStorage = useResumeStore((state) => state.loadFromStorage)

  // Configure Monaco Editor and load data on app start
  useEffect(() => {
    // 配置 Monaco Editor 使用本地打包文件
    setupMonacoEditor()
    
    // 加载存储数据
    loadSettingsFromStorage()
    loadResumesFromStorage()
  }, [loadSettingsFromStorage, loadResumesFromStorage])

  // Apply dark mode
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950 transition-colors duration-300">
        <Navigation />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pt-16"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/builder" element={<ResumeBuilder />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  )
}

export default App
