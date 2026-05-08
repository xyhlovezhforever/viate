import { TemplateCustomization } from '@/components/TemplateCustomizer'

/**
 * 应用定制到HTML模板
 */
export function applyCustomization(html: string, customization: TemplateCustomization): string {
  // 创建一个临时DOM来解析和修改HTML
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  
  // 查找或创建style标签
  let styleTag = doc.querySelector('style')
  if (!styleTag) {
    styleTag = doc.createElement('style')
    doc.head.appendChild(styleTag)
  }
  
  // 生成自定义CSS
  const customCSS = generateCustomCSS(customization)
  
  // 将自定义CSS添加到style标签末尾
  styleTag.textContent = (styleTag.textContent || '') + '\n\n/* 用户定制样式 */\n' + customCSS
  
  return doc.documentElement.outerHTML
}

/**
 * 生成自定义CSS
 */
function generateCustomCSS(customization: TemplateCustomization): string {
  const { colors, fonts, layout } = customization
  
  const spacingMap = {
    compact: { section: '25px', item: '15px', padding: '30px' },
    normal: { section: '35px', item: '20px', padding: '40px' },
    relaxed: { section: '45px', item: '25px', padding: '50px' },
  }
  
  const spacing = spacingMap[layout.spacing]
  
  return `
:root {
  --primary-color: ${colors.primary};
  --secondary-color: ${colors.secondary};
  --accent-color: ${colors.accent};
  --text-color: ${colors.text};
  --background-color: ${colors.background};
}

body {
  font-family: ${fonts.body} !important;
  font-size: ${fonts.bodySize}px !important;
  line-height: ${fonts.lineHeight} !important;
  color: ${colors.text} !important;
  background: ${colors.background} !important;
}

h1, h2, h3, h4, h5, h6,
.name, .section-title, .timeline-title,
.experience-title, .company-name, .job-title {
  font-family: ${fonts.heading} !important;
  color: ${colors.primary} !important;
}

h1, .name {
  font-size: ${fonts.headingSize * 1.8}px !important;
}

h2, .section-title {
  font-size: ${fonts.headingSize}px !important;
}

h3, .timeline-title, .experience-title {
  font-size: ${fonts.headingSize * 0.8}px !important;
}

/* 颜色应用 */
.header, .hero {
  background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%) !important;
}

.section-title, .timeline-title {
  color: ${colors.primary} !important;
  border-bottom-color: ${colors.primary} !important;
}

.skill-tag, .tag, .interest-tag {
  border-color: ${colors.primary} !important;
  color: ${colors.primary} !important;
}

.skill-bar, .skill-progress {
  background: linear-gradient(90deg, ${colors.primary}, ${colors.accent}) !important;
}

.timeline::before,
.timeline-item::before,
.experience-item::before,
.project-item::before {
  background: ${colors.primary} !important;
}

a, .link, .contact-company, .experience-company {
  color: ${colors.primary} !important;
}

.btn-primary, button:not(.btn-secondary) {
  background: linear-gradient(135deg, ${colors.primary}, ${colors.secondary}) !important;
}

/* 间距调整 */
.section {
  margin-bottom: ${spacing.section} !important;
}

.experience-item, .timeline-item, .project-item {
  margin-bottom: ${spacing.item} !important;
}

.container, .content, .main {
  padding: ${spacing.padding} !important;
}

/* 布局调整 */
${layout.type === 'single' ? `
.main, .main-content {
  display: block !important;
  grid-template-columns: 1fr !important;
}

.sidebar, .left-column {
  width: 100% !important;
  border-right: none !important;
  border-bottom: 2px solid ${colors.primary} !important;
  margin-bottom: 30px !important;
}
` : ''}
`.trim()
}

/**
 * 预览定制效果（不修改原HTML）
 */
export function previewCustomization(html: string, customization: TemplateCustomization): string {
  return applyCustomization(html, customization)
}

/**
 * 获取默认定制
 */
export function getDefaultCustomization(): TemplateCustomization {
  return {
    colors: {
      primary: '#667eea',
      secondary: '#764ba2',
      accent: '#f093fb',
      text: '#333333',
      background: '#ffffff',
    },
    fonts: {
      heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      body: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      headingSize: 24,
      bodySize: 14,
      lineHeight: 1.6,
    },
    layout: {
      type: 'two-column',
      spacing: 'normal',
    },
  }
}
