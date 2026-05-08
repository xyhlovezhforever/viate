import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Palette, Type, Layout, Wand2, X } from 'lucide-react'
import Button from './ui/Button'

interface TemplateCustomization {
  colors: {
    primary: string
    secondary: string
    accent: string
    text: string
    background: string
  }
  fonts: {
    heading: string
    body: string
    headingSize: number
    bodySize: number
    lineHeight: number
  }
  layout: {
    type: 'single' | 'two-column'
    spacing: 'compact' | 'normal' | 'relaxed'
  }
}

interface TemplateCustomizerProps {
  isOpen: boolean
  onClose: () => void
  onApply: (customization: TemplateCustomization) => void
  currentCustomization?: TemplateCustomization
}

const defaultCustomization: TemplateCustomization = {
  colors: {
    primary: '#667eea',
    secondary: '#764ba2',
    accent: '#f093fb',
    text: '#333333',
    background: '#ffffff',
  },
  fonts: {
    heading: 'Arial, sans-serif',
    body: 'Arial, sans-serif',
    headingSize: 24,
    bodySize: 14,
    lineHeight: 1.6,
  },
  layout: {
    type: 'two-column',
    spacing: 'normal',
  },
}

const colorPresets = [
  { name: '经典蓝', primary: '#667eea', secondary: '#764ba2', accent: '#f093fb' },
  { name: '商务灰', primary: '#2c3e50', secondary: '#34495e', accent: '#3498db' },
  { name: '活力橙', primary: '#ff6b6b', secondary: '#ee5a6f', accent: '#ffa502' },
  { name: '优雅紫', primary: '#8e44ad', secondary: '#9b59b6', accent: '#e84393' },
  { name: '清新绿', primary: '#27ae60', secondary: '#2ecc71', accent: '#55efc4' },
  { name: '专业黑', primary: '#1a1a1a', secondary: '#2d3436', accent: '#636e72' },
  { name: '温暖棕', primary: '#a0522d', secondary: '#8b4513', accent: '#d2691e' },
  { name: '科技蓝', primary: '#0984e3', secondary: '#74b9ff', accent: '#00cec9' },
]

const fontOptions = [
  { name: '系统默认', value: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' },
  { name: '优雅衬线', value: 'Georgia, "Times New Roman", serif' },
  { name: '现代无衬线', value: '"Helvetica Neue", Arial, sans-serif' },
  { name: '等宽代码', value: '"Courier New", Courier, monospace' },
  { name: '中文黑体', value: '"Microsoft YaHei", "SimHei", sans-serif' },
]

const TemplateCustomizer = ({ isOpen, onClose, onApply, currentCustomization }: TemplateCustomizerProps) => {
  const [customization, setCustomization] = useState<TemplateCustomization>(
    currentCustomization || defaultCustomization
  )
  const [activeTab, setActiveTab] = useState<'colors' | 'fonts' | 'layout'>('colors')

  const handleApply = () => {
    onApply(customization)
    onClose()
  }

  const handleReset = () => {
    setCustomization(defaultCustomization)
  }

  const applyPreset = (preset: typeof colorPresets[0]) => {
    setCustomization({
      ...customization,
      colors: {
        ...customization.colors,
        primary: preset.primary,
        secondary: preset.secondary,
        accent: preset.accent,
      },
    })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white dark:bg-gray-800 shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Wand2 className="w-6 h-6 text-purple-600" />
                  <h2 className="text-2xl font-bold dark:text-white">模板定制</h2>
                </div>
                <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Tabs */}
              <div className="flex gap-2">
                <Button
                  variant={activeTab === 'colors' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveTab('colors')}
                  className="flex-1"
                >
                  <Palette className="w-4 h-4 mr-2" />
                  颜色
                </Button>
                <Button
                  variant={activeTab === 'fonts' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveTab('fonts')}
                  className="flex-1"
                >
                  <Type className="w-4 h-4 mr-2" />
                  字体
                </Button>
                <Button
                  variant={activeTab === 'layout' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveTab('layout')}
                  className="flex-1"
                >
                  <Layout className="w-4 h-4 mr-2" />
                  布局
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {activeTab === 'colors' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-lg font-semibold mb-4 dark:text-white">预设配色</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {colorPresets.map((preset) => (
                        <motion.button
                          key={preset.name}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => applyPreset(preset)}
                          className="p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 transition-colors"
                        >
                          <div className="flex gap-2 mb-2">
                            <div className="w-8 h-8 rounded" style={{ background: preset.primary }} />
                            <div className="w-8 h-8 rounded" style={{ background: preset.secondary }} />
                            <div className="w-8 h-8 rounded" style={{ background: preset.accent }} />
                          </div>
                          <div className="text-sm font-medium dark:text-white">{preset.name}</div>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4 dark:text-white">自定义颜色</h3>
                    <div className="space-y-4">
                      {Object.entries(customization.colors).map(([key, value]) => (
                        <div key={key} className="flex items-center justify-between">
                          <label className="text-sm font-medium dark:text-white capitalize">
                            {key === 'primary' && '主色'}
                            {key === 'secondary' && '辅助色'}
                            {key === 'accent' && '强调色'}
                            {key === 'text' && '文字色'}
                            {key === 'background' && '背景色'}
                          </label>
                          <input
                            type="color"
                            value={value}
                            onChange={(e) =>
                              setCustomization({
                                ...customization,
                                colors: { ...customization.colors, [key]: e.target.value },
                              })
                            }
                            className="w-16 h-10 rounded border-2 border-gray-300 cursor-pointer"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'fonts' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-white">标题字体</label>
                    <select
                      value={customization.fonts.heading}
                      onChange={(e) =>
                        setCustomization({
                          ...customization,
                          fonts: { ...customization.fonts, heading: e.target.value },
                        })
                      }
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    >
                      {fontOptions.map((font) => (
                        <option key={font.name} value={font.value}>
                          {font.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-white">正文字体</label>
                    <select
                      value={customization.fonts.body}
                      onChange={(e) =>
                        setCustomization({
                          ...customization,
                          fonts: { ...customization.fonts, body: e.target.value },
                        })
                      }
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                    >
                      {fontOptions.map((font) => (
                        <option key={font.name} value={font.value}>
                          {font.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-white">
                      标题大小: {customization.fonts.headingSize}px
                    </label>
                    <input
                      type="range"
                      min="18"
                      max="36"
                      value={customization.fonts.headingSize}
                      onChange={(e) =>
                        setCustomization({
                          ...customization,
                          fonts: { ...customization.fonts, headingSize: parseInt(e.target.value) },
                        })
                      }
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-white">
                      正文大小: {customization.fonts.bodySize}px
                    </label>
                    <input
                      type="range"
                      min="12"
                      max="18"
                      value={customization.fonts.bodySize}
                      onChange={(e) =>
                        setCustomization({
                          ...customization,
                          fonts: { ...customization.fonts, bodySize: parseInt(e.target.value) },
                        })
                      }
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 dark:text-white">
                      行高: {customization.fonts.lineHeight}
                    </label>
                    <input
                      type="range"
                      min="1.2"
                      max="2"
                      step="0.1"
                      value={customization.fonts.lineHeight}
                      onChange={(e) =>
                        setCustomization({
                          ...customization,
                          fonts: { ...customization.fonts, lineHeight: parseFloat(e.target.value) },
                        })
                      }
                      className="w-full"
                    />
                  </div>
                </motion.div>
              )}

              {activeTab === 'layout' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <label className="block text-sm font-medium mb-3 dark:text-white">布局类型</label>
                    <div className="grid grid-cols-2 gap-3">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          setCustomization({
                            ...customization,
                            layout: { ...customization.layout, type: 'single' },
                          })
                        }
                        className={`p-4 rounded-lg border-2 transition-colors ${
                          customization.layout.type === 'single'
                            ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                            : 'border-gray-200 dark:border-gray-700'
                        }`}
                      >
                        <div className="text-sm font-medium dark:text-white">单栏布局</div>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          setCustomization({
                            ...customization,
                            layout: { ...customization.layout, type: 'two-column' },
                          })
                        }
                        className={`p-4 rounded-lg border-2 transition-colors ${
                          customization.layout.type === 'two-column'
                            ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                            : 'border-gray-200 dark:border-gray-700'
                        }`}
                      >
                        <div className="text-sm font-medium dark:text-white">双栏布局</div>
                      </motion.button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-3 dark:text-white">间距</label>
                    <div className="grid grid-cols-3 gap-3">
                      {['compact', 'normal', 'relaxed'].map((spacing) => (
                        <motion.button
                          key={spacing}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() =>
                            setCustomization({
                              ...customization,
                              layout: { ...customization.layout, spacing: spacing as any },
                            })
                          }
                          className={`p-3 rounded-lg border-2 transition-colors ${
                            customization.layout.spacing === spacing
                              ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                              : 'border-gray-200 dark:border-gray-700'
                          }`}
                        >
                          <div className="text-sm font-medium dark:text-white">
                            {spacing === 'compact' && '紧凑'}
                            {spacing === 'normal' && '正常'}
                            {spacing === 'relaxed' && '宽松'}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-6">
              <div className="flex gap-3">
                <Button variant="outline" onClick={handleReset} className="flex-1">
                  重置
                </Button>
                <Button onClick={handleApply} className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600">
                  应用
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default TemplateCustomizer
export type { TemplateCustomization }
