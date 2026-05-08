/**
 * 拖拽式简历编辑器类型定义
 */

export type ComponentType = 
  | 'header' // 个人信息头部
  | 'summary' // 个人简介
  | 'education' // 教育经历
  | 'experience' // 工作经历
  | 'project' // 项目经历
  | 'skills' // 技能
  | 'certifications' // 证书
  | 'awards' // 奖项
  | 'languages' // 语言能力
  | 'interests' // 兴趣爱好
  | 'custom' // 自定义内容

export interface ComponentStyle {
  backgroundColor?: string
  textColor?: string
  borderColor?: string
  borderWidth?: number
  borderRadius?: number
  padding?: number
  fontSize?: number
  fontWeight?: string
  textAlign?: 'left' | 'center' | 'right'
  shadow?: boolean
  gradient?: boolean
  gradientFrom?: string
  gradientTo?: string
  animation?: 'none' | 'fade' | 'slide' | 'bounce' | 'glow'
  // 形状装饰
  shape?: 'none' | 'badge' | 'ribbon' | 'card' | 'hexagon' | 'circle-badge' | 'tag'
  shapeColor?: string
  shapePosition?: 'left' | 'top' | 'corner'
  icon?: string
  iconBadge?: boolean
  iconBadgeColor?: string
  decorativeBorder?: 'none' | 'dashed' | 'double' | 'dotted' | 'gradient'
  cornerDecoration?: boolean
}

export interface ResumeComponent {
  id: string
  type: ComponentType
  title: string
  content: Record<string, any>
  order: number
  style?: ComponentStyle
}

export interface ComponentTemplate {
  type: ComponentType
  title: string
  icon: string
  description: string
  defaultContent: Record<string, any>
}

// 组件模板库
export const componentTemplates: ComponentTemplate[] = [
  {
    type: 'header',
    title: '个人信息',
    icon: '👤',
    description: '姓名、联系方式、头像等基本信息',
    defaultContent: {
      name: '您的姓名',
      title: '职位名称',
      email: 'your.email@example.com',
      phone: '+86 138-0000-0000',
      location: '城市，国家',
      website: 'https://yourwebsite.com',
      github: 'https://github.com/yourusername',
      linkedin: 'https://linkedin.com/in/yourusername'
    }
  },
  {
    type: 'summary',
    title: '个人简介',
    icon: '📝',
    description: '用 2-3 句话介绍你的专业背景和职业目标',
    defaultContent: {
      text: '具有 X 年经验的专业人士，擅长...'
    }
  },
  {
    type: 'education',
    title: '教育经历',
    icon: '🎓',
    description: '学历、学校、专业信息',
    defaultContent: {
      items: [
        {
          school: '大学名称',
          degree: '学士/硕士/博士',
          major: '专业名称',
          startDate: '2018-09',
          endDate: '2022-06',
          gpa: '3.8/4.0',
          achievements: [
            '优秀毕业生',
            '一等奖学金'
          ]
        }
      ]
    }
  },
  {
    type: 'experience',
    title: '工作经历',
    icon: '💼',
    description: '公司、职位、工作内容和成就',
    defaultContent: {
      items: [
        {
          company: '公司名称',
          position: '职位名称',
          startDate: '2022-07',
          endDate: '至今',
          location: '城市',
          responsibilities: [
            '负责 XX 项目的开发和维护',
            '带领团队完成 XX 任务',
            '优化系统性能，提升 XX%'
          ]
        }
      ]
    }
  },
  {
    type: 'project',
    title: '项目经历',
    icon: '🚀',
    description: '个人或团队项目展示',
    defaultContent: {
      items: [
        {
          name: '项目名称',
          role: '担任角色',
          startDate: '2023-01',
          endDate: '2023-06',
          description: '项目简介',
          technologies: ['React', 'TypeScript', 'Node.js'],
          achievements: [
            '实现了 XX 功能',
            '用户增长 XX%'
          ],
          link: 'https://project-demo.com'
        }
      ]
    }
  },
  {
    type: 'skills',
    title: '技能专长',
    icon: '⚡',
    description: '编程语言、框架、工具等技能',
    defaultContent: {
      categories: [
        {
          name: '编程语言',
          skills: ['JavaScript', 'TypeScript', 'Python', 'Java']
        },
        {
          name: '前端技术',
          skills: ['React', 'Vue', 'Next.js', 'TailwindCSS']
        },
        {
          name: '后端技术',
          skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL']
        },
        {
          name: '工具平台',
          skills: ['Git', 'Docker', 'AWS', 'CI/CD']
        }
      ]
    }
  },
  {
    type: 'certifications',
    title: '证书认证',
    icon: '🏆',
    description: '专业证书和认证',
    defaultContent: {
      items: [
        {
          name: '证书名称',
          issuer: '颁发机构',
          date: '2023-05',
          credentialId: 'ABC123456',
          link: 'https://credential-link.com'
        }
      ]
    }
  },
  {
    type: 'awards',
    title: '荣誉奖项',
    icon: '🥇',
    description: '获得的奖项和荣誉',
    defaultContent: {
      items: [
        {
          title: '奖项名称',
          issuer: '颁发机构',
          date: '2023-03',
          description: '获奖理由或成就'
        }
      ]
    }
  },
  {
    type: 'languages',
    title: '语言能力',
    icon: '🌐',
    description: '掌握的语言及熟练程度',
    defaultContent: {
      items: [
        {
          language: '中文',
          proficiency: '母语'
        },
        {
          language: '英语',
          proficiency: '流利 (CET-6)'
        }
      ]
    }
  },
  {
    type: 'interests',
    title: '兴趣爱好',
    icon: '🎨',
    description: '个人兴趣和爱好',
    defaultContent: {
      items: ['阅读', '运动', '摄影', '旅行']
    }
  }
]
