import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, FileText, Layout, Settings, Moon, Sun, Blocks } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useSettingsStore } from '@/store/useSettingsStore'
import Button from './ui/Button'

const Navigation = () => {
  const location = useLocation()
  const { isDarkMode, toggleDarkMode } = useSettingsStore()

  const navItems = [
    { path: '/', label: '首页', icon: Home },
    { path: '/templates', label: '模板', icon: Layout },
    { path: '/builder', label: '拖拽构建', icon: Blocks },
    { path: '/settings', label: '设置', icon: Settings },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center"
            >
              <FileText className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Viate
            </span>
          </Link>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              
              return (
                <Link key={item.path} to={item.path}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      'flex items-center space-x-2 px-4 py-2 rounded-lg transition-all',
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-lg'
                        : 'hover:bg-accent text-foreground'
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </motion.div>
                </Link>
              )
            })}
          </div>

          {/* Dark Mode Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="rounded-full"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isDarkMode ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.div>
          </Button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navigation
