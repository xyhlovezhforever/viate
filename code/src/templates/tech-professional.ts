import { ResumeTemplate } from '@/types'

export const techProfessional: ResumeTemplate = {
  id: 'tech-professional',
  name: '技术专业版',
  description: '适合程序员、工程师等技术岗位，突出技能和项目经验',
  category: 'modern',
  thumbnail: '',
  html: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>技术简历 - 张伟</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Microsoft YaHei', sans-serif;
      line-height: 1.6;
      color: #333;
      background: #f5f5f5;
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
      box-shadow: 0 0 30px rgba(0,0,0,0.1);
    }
    
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 40px 50px;
      position: relative;
      overflow: hidden;
    }
    
    .header::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -10%;
      width: 300px;
      height: 300px;
      background: rgba(255,255,255,0.1);
      border-radius: 50%;
    }
    
    .header h1 {
      font-size: 42px;
      font-weight: 700;
      margin-bottom: 8px;
      position: relative;
      z-index: 1;
    }
    
    .header .title {
      font-size: 20px;
      opacity: 0.95;
      margin-bottom: 20px;
      position: relative;
      z-index: 1;
    }
    
    .contact {
      display: flex;
      flex-wrap: wrap;
      gap: 25px;
      font-size: 14px;
      position: relative;
      z-index: 1;
    }
    
    .contact-item {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .contact-item::before {
      content: '●';
      font-size: 8px;
    }
    
    .main {
      display: grid;
      grid-template-columns: 300px 1fr;
      gap: 0;
    }
    
    .sidebar {
      background: #f8f9fa;
      padding: 40px 30px;
      border-right: 3px solid #667eea;
    }
    
    .content {
      padding: 40px 50px;
    }
    
    .section {
      margin-bottom: 35px;
    }
    
    .section-title {
      font-size: 20px;
      font-weight: 700;
      color: #667eea;
      margin-bottom: 20px;
      padding-bottom: 8px;
      border-bottom: 2px solid #667eea;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    
    .section-title::before {
      content: '';
      width: 4px;
      height: 20px;
      background: #667eea;
      border-radius: 2px;
    }
    
    .skill-category {
      margin-bottom: 20px;
    }
    
    .skill-category h4 {
      font-size: 14px;
      color: #667eea;
      margin-bottom: 10px;
      font-weight: 600;
    }
    
    .skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    
    .skill-tag {
      background: white;
      border: 1px solid #667eea;
      color: #667eea;
      padding: 4px 12px;
      border-radius: 15px;
      font-size: 12px;
      font-weight: 500;
    }
    
    .experience-item, .project-item {
      margin-bottom: 30px;
      padding-left: 20px;
      border-left: 2px solid #e9ecef;
      position: relative;
    }
    
    .experience-item::before, .project-item::before {
      content: '';
      position: absolute;
      left: -6px;
      top: 6px;
      width: 10px;
      height: 10px;
      background: #667eea;
      border-radius: 50%;
      border: 2px solid white;
    }
    
    .experience-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 8px;
    }
    
    .experience-title {
      font-size: 18px;
      font-weight: 600;
      color: #2d3748;
    }
    
    .experience-company {
      font-size: 15px;
      color: #667eea;
      font-weight: 500;
      margin-bottom: 4px;
    }
    
    .experience-period {
      font-size: 13px;
      color: #718096;
      white-space: nowrap;
    }
    
    .experience-desc {
      color: #4a5568;
      font-size: 14px;
      line-height: 1.7;
      margin-top: 10px;
    }
    
    .experience-desc ul {
      margin-top: 8px;
      padding-left: 20px;
    }
    
    .experience-desc li {
      margin-bottom: 6px;
    }
    
    .project-name {
      font-size: 16px;
      font-weight: 600;
      color: #2d3748;
      margin-bottom: 6px;
    }
    
    .project-tech {
      font-size: 12px;
      color: #667eea;
      margin-bottom: 8px;
    }
    
    .education-item {
      margin-bottom: 20px;
    }
    
    .education-school {
      font-size: 15px;
      font-weight: 600;
      color: #2d3748;
      margin-bottom: 4px;
    }
    
    .education-major {
      font-size: 14px;
      color: #4a5568;
      margin-bottom: 2px;
    }
    
    .education-period {
      font-size: 13px;
      color: #718096;
    }
    
    .info-item {
      margin-bottom: 15px;
      font-size: 14px;
    }
    
    .info-label {
      font-weight: 600;
      color: #2d3748;
      margin-bottom: 4px;
    }
    
    .info-value {
      color: #4a5568;
    }
    
    @media print {
      body {
        background: white;
      }
      .container {
        box-shadow: none;
        max-width: 100%;
      }
    }
    
    @media (max-width: 768px) {
      .main {
        grid-template-columns: 1fr;
      }
      .header {
        padding: 30px 20px;
      }
      .sidebar, .content {
        padding: 30px 20px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>张伟</h1>
      <div class="title">高级前端工程师 / 全栈开发</div>
      <div class="contact">
        <div class="contact-item">15812345678</div>
        <div class="contact-item">zhangwei@example.com</div>
        <div class="contact-item">github.com/zhangwei</div>
        <div class="contact-item">北京市海淀区</div>
      </div>
    </div>
    
    <div class="main">
      <div class="sidebar">
        <div class="section">
          <div class="section-title">技能专长</div>
          
          <div class="skill-category">
            <h4>前端技术</h4>
            <div class="skill-tags">
              <span class="skill-tag">React</span>
              <span class="skill-tag">Vue</span>
              <span class="skill-tag">TypeScript</span>
              <span class="skill-tag">Next.js</span>
              <span class="skill-tag">Tailwind</span>
            </div>
          </div>
          
          <div class="skill-category">
            <h4>后端技术</h4>
            <div class="skill-tags">
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">Express</span>
              <span class="skill-tag">MongoDB</span>
              <span class="skill-tag">PostgreSQL</span>
            </div>
          </div>
          
          <div class="skill-category">
            <h4>工具链</h4>
            <div class="skill-tags">
              <span class="skill-tag">Git</span>
              <span class="skill-tag">Docker</span>
              <span class="skill-tag">CI/CD</span>
              <span class="skill-tag">Webpack</span>
            </div>
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">教育背景</div>
          <div class="education-item">
            <div class="education-school">清华大学</div>
            <div class="education-major">计算机科学与技术 · 本科</div>
            <div class="education-period">2015.09 - 2019.06</div>
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">个人信息</div>
          <div class="info-item">
            <div class="info-label">工作年限</div>
            <div class="info-value">5年</div>
          </div>
          <div class="info-item">
            <div class="info-label">期望薪资</div>
            <div class="info-value">30-40K</div>
          </div>
          <div class="info-item">
            <div class="info-label">英语水平</div>
            <div class="info-value">CET-6</div>
          </div>
        </div>
      </div>
      
      <div class="content">
        <div class="section">
          <div class="section-title">工作经历</div>
          
          <div class="experience-item">
            <div class="experience-header">
              <div>
                <div class="experience-company">字节跳动</div>
                <div class="experience-title">高级前端工程师</div>
              </div>
              <div class="experience-period">2021.06 - 至今</div>
            </div>
            <div class="experience-desc">
              <ul>
                <li>负责抖音电商后台管理系统的前端架构设计和核心功能开发，服务日活千万级用户</li>
                <li>主导前端工程化建设，引入 Monorepo 架构，提升团队开发效率 40%</li>
                <li>优化首屏加载性能，通过代码分割和懒加载将 FCP 从 3.2s 降低至 1.1s</li>
                <li>搭建组件库和设计系统，统一产品视觉体验，被 5+ 业务线采用</li>
              </ul>
            </div>
          </div>
          
          <div class="experience-item">
            <div class="experience-header">
              <div>
                <div class="experience-company">美团</div>
                <div class="experience-title">前端工程师</div>
              </div>
              <div class="experience-period">2019.07 - 2021.05</div>
            </div>
            <div class="experience-desc">
              <ul>
                <li>参与美团外卖商家端 Web 应用开发，使用 React + Redux 技术栈</li>
                <li>开发订单管理、数据分析等核心模块，支持百万商家使用</li>
                <li>实现复杂的数据可视化图表，提升商家数据洞察能力</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">项目经验</div>
          
          <div class="project-item">
            <div class="project-name">电商后台管理系统</div>
            <div class="project-tech">技术栈：React 18 + TypeScript + Ant Design + Zustand</div>
            <div class="experience-desc">
              <ul>
                <li>从 0 到 1 搭建电商后台管理系统，包含商品、订单、营销、数据分析等模块</li>
                <li>实现权限管理系统，支持角色、菜单、按钮级别的细粒度权限控制</li>
                <li>集成 WebSocket 实现订单实时推送，提升商家订单处理效率</li>
                <li>项目上线后 DAU 达到 50w+，系统稳定性 99.9%</li>
              </ul>
            </div>
          </div>
          
          <div class="project-item">
            <div class="project-name">低代码可视化平台</div>
            <div class="project-tech">技术栈：Vue 3 + Element Plus + Monaco Editor</div>
            <div class="experience-desc">
              <ul>
                <li>开发拖拽式页面编辑器，支持 30+ 组件的可视化配置</li>
                <li>实现组件属性面板、样式编辑器、事件绑定等核心功能</li>
                <li>支持实时预览和代码生成，可一键导出 Vue 组件代码</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
}
