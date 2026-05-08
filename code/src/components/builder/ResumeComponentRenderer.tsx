/**
 * 简历组件渲染器
 * 根据组件类型渲染不同的内容
 */

import { ResumeComponent } from '@/types/resumeBuilder'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { GripVertical, Trash2, Edit } from 'lucide-react'

interface Props {
  component: ResumeComponent
  onEdit: (component: ResumeComponent) => void
  onDelete: (id: string) => void
}

const ResumeComponentRenderer = ({ component, onEdit, onDelete }: Props) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: component.id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1
  }

  const renderContent = () => {
    switch (component.type) {
      case 'header':
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {component.content.name}
            </h1>
            <p className="text-lg text-gray-600 mb-3">{component.content.title}</p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-600">
              {component.content.email && <span>📧 {component.content.email}</span>}
              {component.content.phone && <span>📱 {component.content.phone}</span>}
              {component.content.location && <span>📍 {component.content.location}</span>}
            </div>
          </div>
        )

      case 'summary':
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-blue-500 pb-1">
              个人简介
            </h2>
            <p className="text-gray-700 leading-relaxed">{component.content.text}</p>
          </div>
        )

      case 'education':
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-blue-500 pb-1">
              🎓 教育经历
            </h2>
            {component.content.items?.map((item: any, idx: number) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.school}</h3>
                    <p className="text-gray-700">{item.degree} - {item.major}</p>
                  </div>
                  <span className="text-sm text-gray-600">{item.startDate} - {item.endDate}</span>
                </div>
                {item.gpa && <p className="text-sm text-gray-600">GPA: {item.gpa}</p>}
                {item.achievements && item.achievements.length > 0 && (
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
                    {item.achievements.map((achievement: string, i: number) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )

      case 'experience':
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-blue-500 pb-1">
              💼 工作经历
            </h2>
            {component.content.items?.map((item: any, idx: number) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.position}</h3>
                    <p className="text-gray-700">{item.company} · {item.location}</p>
                  </div>
                  <span className="text-sm text-gray-600">{item.startDate} - {item.endDate}</span>
                </div>
                {item.responsibilities && item.responsibilities.length > 0 && (
                  <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                    {item.responsibilities.map((resp: string, i: number) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )

      case 'project':
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-blue-500 pb-1">
              🚀 项目经历
            </h2>
            {component.content.items?.map((item: any, idx: number) => (
              <div key={idx} className="mb-4">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-gray-700">{item.role}</p>
                  </div>
                  <span className="text-sm text-gray-600">{item.startDate} - {item.endDate}</span>
                </div>
                <p className="text-sm text-gray-700 mb-1">{item.description}</p>
                {item.technologies && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {item.technologies.map((tech: string, i: number) => (
                      <span key={i} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {item.achievements && item.achievements.length > 0 && (
                  <ul className="list-disc list-inside text-sm text-gray-700">
                    {item.achievements.map((achievement: string, i: number) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )

      case 'skills':
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-blue-500 pb-1">
              ⚡ 技能专长
            </h2>
            {component.content.categories?.map((category: any, idx: number) => (
              <div key={idx} className="mb-3">
                <h3 className="font-semibold text-gray-800 mb-1">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill: string, i: number) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )

      case 'certifications':
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-blue-500 pb-1">
              🏆 证书认证
            </h2>
            {component.content.items?.map((item: any, idx: number) => (
              <div key={idx} className="mb-3">
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-700">{item.issuer} · {item.date}</p>
                {item.credentialId && (
                  <p className="text-xs text-gray-600">ID: {item.credentialId}</p>
                )}
              </div>
            ))}
          </div>
        )

      case 'awards':
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-blue-500 pb-1">
              🥇 荣誉奖项
            </h2>
            {component.content.items?.map((item: any, idx: number) => (
              <div key={idx} className="mb-3">
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.issuer} · {item.date}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        )

      case 'languages':
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-blue-500 pb-1">
              🌐 语言能力
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {component.content.items?.map((item: any, idx: number) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-gray-800">{item.language}</span>
                  <span className="text-sm text-gray-600">{item.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        )

      case 'interests':
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 border-b-2 border-blue-500 pb-1">
              🎨 兴趣爱好
            </h2>
            <div className="flex flex-wrap gap-2">
              {component.content.items?.map((item: string, idx: number) => (
                <span key={idx} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )

      default:
        return (
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-3">{component.title}</h2>
            <p className="text-gray-600">未知组件类型: {component.type}</p>
          </div>
        )
    }
  }

  // 构建样式对象
  const customStyle = component.style || {}
  const componentStyles: React.CSSProperties = {
    ...style,
    background: customStyle.gradient
      ? `linear-gradient(135deg, ${customStyle.gradientFrom || '#3B82F6'}, ${customStyle.gradientTo || '#8B5CF6'})`
      : customStyle.backgroundColor || '#FFFFFF',
    color: customStyle.textColor || '#000000',
    borderColor: customStyle.borderColor || '#E5E7EB',
    borderWidth: `${customStyle.borderWidth || 1}px`,
    borderRadius: `${customStyle.borderRadius || 8}px`,
    padding: `${customStyle.padding || 24}px`,
    fontSize: `${customStyle.fontSize || 16}px`,
    fontWeight: customStyle.fontWeight || 'normal',
    textAlign: customStyle.textAlign || 'left',
    boxShadow: customStyle.shadow 
      ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      : 'none'
  }

  // 动画类名
  const getAnimationClass = () => {
    switch (customStyle.animation) {
      case 'fade':
        return 'animate-fade-in'
      case 'slide':
        return 'animate-slide-in'
      case 'bounce':
        return 'animate-bounce-in'
      case 'glow':
        return 'animate-glow'
      default:
        return ''
    }
  }

  // 装饰边框样式
  const getBorderStyle = () => {
    switch (customStyle.decorativeBorder) {
      case 'dashed':
        return 'dashed'
      case 'double':
        return 'double'
      case 'dotted':
        return 'dotted'
      case 'gradient':
        return 'solid'
      default:
        return 'solid'
    }
  }

  // 渲染形状装饰
  const renderShapeDecoration = () => {
    if (!customStyle.shape || customStyle.shape === 'none') return null

    const shapeColor = customStyle.shapeColor || '#3B82F6'
    const position = customStyle.shapePosition || 'left'
    const icon = customStyle.icon || '✨'

    const shapeStyles: Record<string, React.CSSProperties> = {
      badge: {
        position: 'absolute',
        ...(position === 'left' && { left: '-8px', top: '50%', transform: 'translateY(-50%)' }),
        ...(position === 'top' && { top: '-8px', left: '50%', transform: 'translateX(-50%)' }),
        ...(position === 'corner' && { top: '-8px', right: '-8px' }),
        backgroundColor: shapeColor,
        color: 'white',
        padding: '8px 16px',
        borderRadius: '20px',
        fontSize: '14px',
        fontWeight: 'bold',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        zIndex: 5
      },
      ribbon: {
        position: 'absolute',
        ...(position === 'left' && { left: '0', top: '20px' }),
        ...(position === 'top' && { top: '0', left: '20px' }),
        ...(position === 'corner' && { top: '0', right: '0' }),
        backgroundColor: shapeColor,
        color: 'white',
        padding: '4px 20px',
        fontSize: '12px',
        fontWeight: 'bold',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        clipPath: 'polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%)',
        zIndex: 5
      },
      card: {
        position: 'absolute',
        ...(position === 'left' && { left: '-12px', top: '12px' }),
        ...(position === 'top' && { top: '-12px', left: '12px' }),
        ...(position === 'corner' && { top: '-12px', right: '-12px' }),
        backgroundColor: shapeColor,
        color: 'white',
        width: '48px',
        height: '48px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        transform: 'rotate(-5deg)',
        zIndex: 5
      },
      hexagon: {
        position: 'absolute',
        ...(position === 'left' && { left: '-16px', top: '16px' }),
        ...(position === 'top' && { top: '-16px', left: '16px' }),
        ...(position === 'corner' && { top: '-16px', right: '-16px' }),
        backgroundColor: shapeColor,
        color: 'white',
        width: '48px',
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: 5
      },
      'circle-badge': {
        position: 'absolute',
        ...(position === 'left' && { left: '-16px', top: '16px' }),
        ...(position === 'top' && { top: '-16px', left: '16px' }),
        ...(position === 'corner' && { top: '-16px', right: '-16px' }),
        backgroundColor: shapeColor,
        color: 'white',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        border: '3px solid white',
        zIndex: 5
      },
      tag: {
        position: 'absolute',
        ...(position === 'left' && { left: '0', top: '0' }),
        ...(position === 'top' && { top: '0', left: '0' }),
        ...(position === 'corner' && { top: '0', right: '0' }),
        backgroundColor: shapeColor,
        color: 'white',
        padding: '6px 16px',
        fontSize: '12px',
        fontWeight: 'bold',
        borderRadius: '0 0 8px 0',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        zIndex: 5
      }
    }

    return (
      <div style={shapeStyles[customStyle.shape]}>
        {icon}
      </div>
    )
  }

  // 渲染图标徽章
  const renderIconBadge = () => {
    if (!customStyle.iconBadge) return null

    const badgeColor = customStyle.iconBadgeColor || '#EF4444'
    const icon = customStyle.icon || '⭐'

    return (
      <div
        style={{
          position: 'absolute',
          top: '-8px',
          left: '16px',
          backgroundColor: badgeColor,
          color: 'white',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          border: '2px solid white',
          zIndex: 10
        }}
      >
        {icon}
      </div>
    )
  }

  // 渲染角落装饰
  const renderCornerDecoration = () => {
    if (!customStyle.cornerDecoration) return null

    const decorColor = customStyle.shapeColor || customStyle.borderColor || '#3B82F6'

    return (
      <>
        <div
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '20px',
            height: '20px',
            borderTop: `3px solid ${decorColor}`,
            borderLeft: `3px solid ${decorColor}`,
            borderRadius: '8px 0 0 0',
            zIndex: 5
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            width: '20px',
            height: '20px',
            borderBottom: `3px solid ${decorColor}`,
            borderRight: `3px solid ${decorColor}`,
            borderRadius: '0 0 8px 0',
            zIndex: 5
          }}
        />
      </>
    )
  }

  return (
    <div
      ref={setNodeRef}
      style={{
        ...componentStyles,
        borderStyle: getBorderStyle(),
        overflow: 'visible',
        position: 'relative',
        ...(customStyle.decorativeBorder === 'gradient' && {
          borderImage: `linear-gradient(135deg, ${customStyle.gradientFrom || '#3B82F6'}, ${customStyle.gradientTo || '#8B5CF6'}) 1`
        })
      }}
      className={`group relative rounded-lg mb-4 hover:shadow-lg transition-all border ${getAnimationClass()}`}
    >
      {/* 形状装饰 */}
      {renderShapeDecoration()}
      
      {/* 图标徽章 */}
      {renderIconBadge()}
      
      {/* 角落装饰 */}
      {renderCornerDecoration()}

      {/* 拖拽手柄和操作按钮 */}
      <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
        <button
          {...attributes}
          {...listeners}
          className="p-1.5 bg-gray-100 hover:bg-gray-200 rounded cursor-move transition-colors"
          title="拖拽调整顺序"
        >
          <GripVertical className="w-4 h-4 text-gray-600" />
        </button>
        <button
          onClick={() => onEdit(component)}
          className="p-1.5 bg-blue-100 hover:bg-blue-200 rounded transition-colors"
          title="编辑内容"
        >
          <Edit className="w-4 h-4 text-blue-600" />
        </button>
        <button
          onClick={() => onDelete(component.id)}
          className="p-1.5 bg-red-100 hover:bg-red-200 rounded transition-colors"
          title="删除组件"
        >
          <Trash2 className="w-4 h-4 text-red-600" />
        </button>
      </div>

      {/* 组件内容 */}
      {renderContent()}
    </div>
  )
}

export default ResumeComponentRenderer
