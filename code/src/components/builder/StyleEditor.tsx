/**
 * 样式编辑器
 * 可视化编辑组件样式
 */

import { ComponentStyle } from '@/types/resumeBuilder'
import { Palette, Type, Layout, Sparkles, Shapes, Badge } from 'lucide-react'

interface Props {
  style: ComponentStyle
  onChange: (style: ComponentStyle) => void
}

const StyleEditor = ({ style, onChange }: Props) => {
  const updateStyle = (key: keyof ComponentStyle, value: any) => {
    onChange({ ...style, [key]: value })
  }

  const presetThemes = [
    {
      name: '经典蓝',
      style: {
        backgroundColor: '#EFF6FF',
        textColor: '#1E40AF',
        borderColor: '#3B82F6',
        borderWidth: 2,
        gradient: false,
        shape: 'badge' as const,
        shapeColor: '#3B82F6',
        shapePosition: 'left' as const,
        icon: '📘'
      }
    },
    {
      name: '渐变紫',
      style: {
        gradient: true,
        gradientFrom: '#9333EA',
        gradientTo: '#EC4899',
        textColor: '#FFFFFF',
        borderWidth: 0,
        shape: 'circle-badge' as const,
        shapeColor: '#EC4899',
        shapePosition: 'corner' as const,
        icon: '✨',
        shadow: true
      }
    },
    {
      name: '简约灰',
      style: {
        backgroundColor: '#F9FAFB',
        textColor: '#111827',
        borderColor: '#E5E7EB',
        borderWidth: 1,
        gradient: false,
        cornerDecoration: true
      }
    },
    {
      name: '活力橙',
      style: {
        gradient: true,
        gradientFrom: '#F59E0B',
        gradientTo: '#EF4444',
        textColor: '#FFFFFF',
        borderWidth: 0,
        shape: 'ribbon' as const,
        shapeColor: '#DC2626',
        shapePosition: 'top' as const,
        icon: '🔥',
        shadow: true
      }
    },
    {
      name: '清新绿',
      style: {
        backgroundColor: '#ECFDF5',
        textColor: '#047857',
        borderColor: '#10B981',
        borderWidth: 2,
        gradient: false,
        shape: 'hexagon' as const,
        shapeColor: '#10B981',
        shapePosition: 'left' as const,
        icon: '🌿',
        decorativeBorder: 'dashed' as const
      }
    },
    {
      name: '炫彩卡片',
      style: {
        backgroundColor: '#FFFFFF',
        textColor: '#1F2937',
        borderColor: '#8B5CF6',
        borderWidth: 3,
        borderRadius: 16,
        gradient: false,
        shape: 'card' as const,
        shapeColor: '#8B5CF6',
        shapePosition: 'corner' as const,
        icon: '🎨',
        shadow: true,
        iconBadge: true,
        iconBadgeColor: '#F59E0B'
      }
    }
  ]

  return (
    <div className="space-y-6">
      {/* 预设主题 */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <h3 className="font-semibold text-sm text-gray-900">预设主题</h3>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {presetThemes.map((theme) => (
            <button
              key={theme.name}
              onClick={() => onChange({ ...style, ...theme.style })}
              className="p-2 rounded-lg border-2 border-gray-200 hover:border-purple-500 transition-all text-center relative overflow-hidden"
              style={{
                background: theme.style.gradient
                  ? `linear-gradient(135deg, ${theme.style.gradientFrom}, ${theme.style.gradientTo})`
                  : theme.style.backgroundColor,
                color: theme.style.textColor
              }}
            >
              {theme.style.icon && (
                <span className="text-lg block mb-1">{theme.style.icon}</span>
              )}
              <span className="text-xs font-medium block">{theme.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 背景设置 */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Palette className="w-4 h-4 text-blue-600" />
          <h3 className="font-semibold text-sm text-gray-900">背景设置</h3>
        </div>
        
        <div className="space-y-3">
          {/* 渐变开关 */}
          <label className="flex items-center justify-between">
            <span className="text-sm text-gray-700">使用渐变背景</span>
            <input
              type="checkbox"
              checked={style.gradient || false}
              onChange={(e) => updateStyle('gradient', e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded"
            />
          </label>

          {style.gradient ? (
            <>
              <div>
                <label className="text-xs text-gray-600 mb-1 block">渐变起始色</label>
                <input
                  type="color"
                  value={style.gradientFrom || '#3B82F6'}
                  onChange={(e) => updateStyle('gradientFrom', e.target.value)}
                  className="w-full h-10 rounded cursor-pointer"
                />
              </div>
              <div>
                <label className="text-xs text-gray-600 mb-1 block">渐变结束色</label>
                <input
                  type="color"
                  value={style.gradientTo || '#8B5CF6'}
                  onChange={(e) => updateStyle('gradientTo', e.target.value)}
                  className="w-full h-10 rounded cursor-pointer"
                />
              </div>
            </>
          ) : (
            <div>
              <label className="text-xs text-gray-600 mb-1 block">背景颜色</label>
              <input
                type="color"
                value={style.backgroundColor || '#FFFFFF'}
                onChange={(e) => updateStyle('backgroundColor', e.target.value)}
                className="w-full h-10 rounded cursor-pointer"
              />
            </div>
          )}
        </div>
      </div>

      {/* 文字设置 */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Type className="w-4 h-4 text-green-600" />
          <h3 className="font-semibold text-sm text-gray-900">文字设置</h3>
        </div>
        
        <div className="space-y-3">
          <div>
            <label className="text-xs text-gray-600 mb-1 block">文字颜色</label>
            <input
              type="color"
              value={style.textColor || '#000000'}
              onChange={(e) => updateStyle('textColor', e.target.value)}
              className="w-full h-10 rounded cursor-pointer"
            />
          </div>

          <div>
            <label className="text-xs text-gray-600 mb-1 block">字体大小</label>
            <input
              type="range"
              min="12"
              max="24"
              value={style.fontSize || 16}
              onChange={(e) => updateStyle('fontSize', parseInt(e.target.value))}
              className="w-full"
            />
            <span className="text-xs text-gray-500">{style.fontSize || 16}px</span>
          </div>

          <div>
            <label className="text-xs text-gray-600 mb-1 block">字体粗细</label>
            <select
              value={style.fontWeight || 'normal'}
              onChange={(e) => updateStyle('fontWeight', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            >
              <option value="normal">正常</option>
              <option value="medium">中等</option>
              <option value="semibold">半粗</option>
              <option value="bold">粗体</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-gray-600 mb-1 block">文字对齐</label>
            <div className="grid grid-cols-3 gap-2">
              {(['left', 'center', 'right'] as const).map((align) => (
                <button
                  key={align}
                  onClick={() => updateStyle('textAlign', align)}
                  className={`py-2 px-3 rounded text-sm border transition-all ${
                    style.textAlign === align
                      ? 'bg-blue-500 text-white border-blue-500'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
                  }`}
                >
                  {align === 'left' && '左对齐'}
                  {align === 'center' && '居中'}
                  {align === 'right' && '右对齐'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 布局设置 */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Layout className="w-4 h-4 text-orange-600" />
          <h3 className="font-semibold text-sm text-gray-900">布局设置</h3>
        </div>
        
        <div className="space-y-3">
          <div>
            <label className="text-xs text-gray-600 mb-1 block">边框颜色</label>
            <input
              type="color"
              value={style.borderColor || '#E5E7EB'}
              onChange={(e) => updateStyle('borderColor', e.target.value)}
              className="w-full h-10 rounded cursor-pointer"
            />
          </div>

          <div>
            <label className="text-xs text-gray-600 mb-1 block">边框宽度</label>
            <input
              type="range"
              min="0"
              max="8"
              value={style.borderWidth || 0}
              onChange={(e) => updateStyle('borderWidth', parseInt(e.target.value))}
              className="w-full"
            />
            <span className="text-xs text-gray-500">{style.borderWidth || 0}px</span>
          </div>

          <div>
            <label className="text-xs text-gray-600 mb-1 block">圆角</label>
            <input
              type="range"
              min="0"
              max="24"
              value={style.borderRadius || 8}
              onChange={(e) => updateStyle('borderRadius', parseInt(e.target.value))}
              className="w-full"
            />
            <span className="text-xs text-gray-500">{style.borderRadius || 8}px</span>
          </div>

          <div>
            <label className="text-xs text-gray-600 mb-1 block">内边距</label>
            <input
              type="range"
              min="8"
              max="48"
              value={style.padding || 24}
              onChange={(e) => updateStyle('padding', parseInt(e.target.value))}
              className="w-full"
            />
            <span className="text-xs text-gray-500">{style.padding || 24}px</span>
          </div>

          <label className="flex items-center justify-between">
            <span className="text-sm text-gray-700">阴影效果</span>
            <input
              type="checkbox"
              checked={style.shadow || false}
              onChange={(e) => updateStyle('shadow', e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded"
            />
          </label>
        </div>
      </div>

      {/* 动画效果 */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-pink-600" />
          <h3 className="font-semibold text-sm text-gray-900">动画效果</h3>
        </div>
        
        <select
          value={style.animation || 'none'}
          onChange={(e) => updateStyle('animation', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
        >
          <option value="none">无动画</option>
          <option value="fade">淡入效果</option>
          <option value="slide">滑入效果</option>
          <option value="bounce">弹跳效果</option>
          <option value="glow">发光效果</option>
        </select>
      </div>

      {/* 形状装饰 */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <Shapes className="w-4 h-4 text-indigo-600" />
          <h3 className="font-semibold text-sm text-gray-900">形状装饰</h3>
        </div>
        
        <div className="space-y-3">
          <div>
            <label className="text-xs text-gray-600 mb-1 block">装饰形状</label>
            <select
              value={style.shape || 'none'}
              onChange={(e) => updateStyle('shape', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            >
              <option value="none">无装饰</option>
              <option value="badge">🏷️ 侧边标签</option>
              <option value="ribbon">🎀 丝带装饰</option>
              <option value="card">📇 卡片效果</option>
              <option value="hexagon">⬢ 六边形</option>
              <option value="circle-badge">⭕ 圆形徽章</option>
              <option value="tag">🔖 标签形状</option>
            </select>
          </div>

          {style.shape && style.shape !== 'none' && (
            <>
              <div>
                <label className="text-xs text-gray-600 mb-1 block">形状颜色</label>
                <input
                  type="color"
                  value={style.shapeColor || '#3B82F6'}
                  onChange={(e) => updateStyle('shapeColor', e.target.value)}
                  className="w-full h-10 rounded cursor-pointer"
                />
              </div>

              <div>
                <label className="text-xs text-gray-600 mb-1 block">位置</label>
                <div className="grid grid-cols-3 gap-2">
                  {(['left', 'top', 'corner'] as const).map((pos) => (
                    <button
                      key={pos}
                      onClick={() => updateStyle('shapePosition', pos)}
                      className={`py-2 px-3 rounded text-xs border transition-all ${
                        style.shapePosition === pos
                          ? 'bg-indigo-500 text-white border-indigo-500'
                          : 'bg-white text-gray-700 border-gray-300 hover:border-indigo-500'
                      }`}
                    >
                      {pos === 'left' && '左侧'}
                      {pos === 'top' && '顶部'}
                      {pos === 'corner' && '角落'}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-600 mb-1 block">形状图标 (Emoji)</label>
                <input
                  type="text"
                  value={style.icon || ''}
                  onChange={(e) => updateStyle('icon', e.target.value)}
                  placeholder="输入 emoji，如 🎓 💼 🚀"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  maxLength={2}
                />
              </div>
            </>
          )}

          <div>
            <label className="text-xs text-gray-600 mb-1 block">装饰边框</label>
            <select
              value={style.decorativeBorder || 'none'}
              onChange={(e) => updateStyle('decorativeBorder', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            >
              <option value="none">无特效</option>
              <option value="dashed">虚线边框</option>
              <option value="double">双线边框</option>
              <option value="dotted">点状边框</option>
              <option value="gradient">渐变边框</option>
            </select>
          </div>

          <label className="flex items-center justify-between">
            <span className="text-sm text-gray-700">图标徽章</span>
            <input
              type="checkbox"
              checked={style.iconBadge || false}
              onChange={(e) => updateStyle('iconBadge', e.target.checked)}
              className="w-4 h-4 text-indigo-600 rounded"
            />
          </label>

          {style.iconBadge && (
            <div>
              <label className="text-xs text-gray-600 mb-1 block">徽章颜色</label>
              <input
                type="color"
                value={style.iconBadgeColor || '#EF4444'}
                onChange={(e) => updateStyle('iconBadgeColor', e.target.value)}
                className="w-full h-10 rounded cursor-pointer"
              />
            </div>
          )}

          <label className="flex items-center justify-between">
            <span className="text-sm text-gray-700">角落装饰</span>
            <input
              type="checkbox"
              checked={style.cornerDecoration || false}
              onChange={(e) => updateStyle('cornerDecoration', e.target.checked)}
              className="w-4 h-4 text-indigo-600 rounded"
            />
          </label>
        </div>
      </div>
    </div>
  )
}

export default StyleEditor
