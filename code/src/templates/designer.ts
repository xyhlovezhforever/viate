import { ResumeTemplate } from '@/types'

export const designer: ResumeTemplate = {
  id: 'designer',
  name: '设计师作品集',
  description: '适合UI/UX设计师、视觉设计师，突出作品和创意',
  category: 'creative',
  thumbnail: '',
  html: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>设计师简历 - 王芳</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Helvetica Neue', Arial, 'PingFang SC', 'Hiragino Sans GB', sans-serif;
      line-height: 1.6;
      color: #333;
      background: #fafafa;
    }
    
    .container {
      max-width: 900px;
      margin: 0 auto;
      background: white;
    }
    
    .hero {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
      color: white;
      padding: 60px 50px;
      position: relative;
      overflow: hidden;
    }
    
    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><rect fill="rgba(255,255,255,0.05)" width="50" height="50"/><rect fill="rgba(255,255,255,0.05)" x="50" y="50" width="50" height="50"/></svg>');
      opacity: 0.3;
    }
    
    .hero-content {
      position: relative;
      z-index: 1;
    }
    
    .name {
      font-size: 48px;
      font-weight: 300;
      margin-bottom: 10px;
      letter-spacing: 2px;
    }
    
    .tagline {
      font-size: 24px;
      font-weight: 300;
      opacity: 0.95;
      margin-bottom: 30px;
    }
    
    .contact-bar {
      display: flex;
      gap: 25px;
      flex-wrap: wrap;
      font-size: 14px;
      opacity: 0.9;
    }
    
    .main-content {
      display: flex;
      gap: 0;
    }
    
    .sidebar {
      width: 280px;
      background: #2d3748;
      color: white;
      padding: 40px 30px;
    }
    
    .content {
      flex: 1;
      padding: 40px 50px;
    }
    
    .section {
      margin-bottom: 35px;
    }
    
    .section-title {
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
      margin-bottom: 20px;
      color: #a0aec0;
    }
    
    .content .section-title {
      color: #667eea;
      font-size: 22px;
      margin-bottom: 25px;
      padding-bottom: 12px;
      border-bottom: 3px solid #667eea;
      text-transform: none;
      letter-spacing: 0;
    }
    
    .skill-item {
      margin-bottom: 18px;
    }
    
    .skill-name {
      font-size: 14px;
      margin-bottom: 8px;
      display: flex;
      justify-content: space-between;
    }
    
    .skill-level {
      font-size: 12px;
      opacity: 0.7;
    }
    
    .skill-bar {
      height: 6px;
      background: #4a5568;
      border-radius: 3px;
      overflow: hidden;
    }
    
    .skill-progress {
      height: 100%;
      background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
      border-radius: 3px;
    }
    
    .tool-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      font-size: 13px;
    }
    
    .tool-item {
      padding: 8px;
      background: #4a5568;
      border-radius: 4px;
      text-align: center;
    }
    
    .info-item {
      margin-bottom: 15px;
      font-size: 14px;
      line-height: 1.7;
    }
    
    .info-label {
      color: #a0aec0;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 4px;
    }
    
    .work-item {
      margin-bottom: 35px;
      padding-bottom: 35px;
      border-bottom: 1px solid #e2e8f0;
    }
    
    .work-item:last-child {
      border-bottom: none;
    }
    
    .work-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 15px;
    }
    
    .work-title {
      font-size: 20px;
      font-weight: 600;
      color: #2d3748;
      margin-bottom: 5px;
    }
    
    .work-company {
      font-size: 15px;
      color: #667eea;
      font-weight: 500;
    }
    
    .work-period {
      font-size: 13px;
      color: #718096;
      white-space: nowrap;
    }
    
    .work-desc {
      font-size: 14px;
      color: #4a5568;
      line-height: 1.8;
      margin-bottom: 15px;
    }
    
    .project-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin-top: 15px;
    }
    
    .project-card {
      border: 2px solid #e2e8f0;
      border-radius: 8px;
      overflow: hidden;
      transition: all 0.3s;
    }
    
    .project-image {
      height: 140px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 40px;
      font-weight: 200;
    }
    
    .project-info {
      padding: 15px;
    }
    
    .project-name {
      font-size: 15px;
      font-weight: 600;
      color: #2d3748;
      margin-bottom: 6px;
    }
    
    .project-desc {
      font-size: 13px;
      color: #718096;
      line-height: 1.6;
    }
    
    .education-item {
      margin-bottom: 15px;
    }
    
    .edu-school {
      font-size: 16px;
      font-weight: 600;
      color: #2d3748;
      margin-bottom: 4px;
    }
    
    .edu-major {
      font-size: 14px;
      color: #4a5568;
      margin-bottom: 2px;
    }
    
    .edu-period {
      font-size: 13px;
      color: #718096;
    }
    
    @media print {
      body {
        background: white;
      }
    }
    
    @media (max-width: 768px) {
      .main-content {
        flex-direction: column;
      }
      .sidebar {
        width: 100%;
      }
      .hero {
        padding: 40px 20px;
      }
      .content {
        padding: 30px 20px;
      }
      .project-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="hero">
      <div class="hero-content">
        <h1 class="name">王芳</h1>
        <div class="tagline">UI/UX 设计师 · 视觉创意</div>
        <div class="contact-bar">
          <span>📱 138-1234-5678</span>
          <span>✉️ wangfang@design.com</span>
          <span>🌐 behance.net/wangfang</span>
          <span>📍 深圳市南山区</span>
        </div>
      </div>
    </div>
    
    <div class="main-content">
      <div class="sidebar">
        <div class="section">
          <div class="section-title">设计技能</div>
          
          <div class="skill-item">
            <div class="skill-name">
              <span>UI 设计</span>
              <span class="skill-level">95%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 95%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-name">
              <span>UX 研究</span>
              <span class="skill-level">90%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 90%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-name">
              <span>品牌设计</span>
              <span class="skill-level">85%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 85%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-name">
              <span>插画设计</span>
              <span class="skill-level">80%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 80%"></div>
            </div>
          </div>
          
          <div class="skill-item">
            <div class="skill-name">
              <span>动效设计</span>
              <span class="skill-level">75%</span>
            </div>
            <div class="skill-bar">
              <div class="skill-progress" style="width: 75%"></div>
            </div>
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">设计工具</div>
          <div class="tool-grid">
            <div class="tool-item">Figma</div>
            <div class="tool-item">Sketch</div>
            <div class="tool-item">Photoshop</div>
            <div class="tool-item">Illustrator</div>
            <div class="tool-item">After Effects</div>
            <div class="tool-item">Principle</div>
            <div class="tool-item">Axure</div>
            <div class="tool-item">Framer</div>
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">个人信息</div>
          <div class="info-item">
            <div class="info-label">工作年限</div>
            <div>6 年</div>
          </div>
          <div class="info-item">
            <div class="info-label">语言能力</div>
            <div>中文（母语）<br>英语（流利）</div>
          </div>
          <div class="info-item">
            <div class="info-label">获奖经历</div>
            <div>
              红点设计奖 2022<br>
              iF 设计奖 2021<br>
              站酷推荐设计师
            </div>
          </div>
        </div>
      </div>
      
      <div class="content">
        <div class="section">
          <div class="section-title">工作经历</div>
          
          <div class="work-item">
            <div class="work-header">
              <div>
                <div class="work-title">高级 UI/UX 设计师</div>
                <div class="work-company">腾讯</div>
              </div>
              <div class="work-period">2020.06 - 至今</div>
            </div>
            <div class="work-desc">
              负责微信生态下多款小程序和 H5 产品的设计工作，主导设计规范制定和组件库搭建。
              通过用户研究和数据分析，优化产品体验，使核心指标提升 40%。带领 3 人设计团队，
              参与多个千万级用户产品的设计迭代。
            </div>
            
            <div class="project-grid">
              <div class="project-card">
                <div class="project-image">📱</div>
                <div class="project-info">
                  <div class="project-name">电商小程序</div>
                  <div class="project-desc">从 0 到 1 设计完整购物流程，DAU 500w+</div>
                </div>
              </div>
              <div class="project-card">
                <div class="project-image">🎨</div>
                <div class="project-info">
                  <div class="project-name">设计系统</div>
                  <div class="project-desc">搭建组件库，提升设计效率 60%</div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="work-item">
            <div class="work-header">
              <div>
                <div class="work-title">UI 设计师</div>
                <div class="work-company">字节跳动</div>
              </div>
              <div class="work-period">2018.07 - 2020.05</div>
            </div>
            <div class="work-desc">
              参与抖音、今日头条等产品的设计工作，负责新功能的视觉设计和交互设计。
              与产品经理、开发团队紧密协作，确保设计方案的落地质量。
            </div>
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">教育背景</div>
          <div class="education-item">
            <div class="edu-school">中央美术学院</div>
            <div class="edu-major">视觉传达设计 · 学士</div>
            <div class="edu-period">2014.09 - 2018.06</div>
          </div>
        </div>
        
        <div class="section">
          <div class="section-title">作品集</div>
          <div class="work-desc">
            更多作品请访问：<br>
            🎨 Behance: behance.net/wangfang<br>
            🌟 Dribbble: dribbble.com/wangfang<br>
            📱 站酷: zcool.com.cn/u/wangfang
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
}
