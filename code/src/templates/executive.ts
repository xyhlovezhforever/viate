import { ResumeTemplate } from '@/types'

export const executive: ResumeTemplate = {
  id: 'executive',
  name: '高管商务版',
  description: '适合管理岗位、高级职位，突出领导力和成就',
  category: 'classic',
  thumbnail: '',
  html: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>高管简历 - 李明</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Times New Roman', 'SimSun', serif;
      line-height: 1.7;
      color: #2c3e50;
      background: #f9f9f9;
    }
    
    .container {
      max-width: 850px;
      margin: 0 auto;
      background: white;
      box-shadow: 0 0 40px rgba(0,0,0,0.08);
    }
    
    .header {
      text-align: center;
      padding: 50px 60px 40px;
      border-bottom: 3px solid #1a1a1a;
      background: linear-gradient(to bottom, #ffffff 0%, #f8f8f8 100%);
    }
    
    .name {
      font-size: 48px;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 12px;
      letter-spacing: 4px;
    }
    
    .position {
      font-size: 22px;
      color: #555;
      margin-bottom: 25px;
      font-weight: 400;
      letter-spacing: 2px;
    }
    
    .contact-info {
      display: flex;
      justify-content: center;
      gap: 30px;
      flex-wrap: wrap;
      font-size: 14px;
      color: #666;
    }
    
    .contact-item {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    
    .divider {
      color: #ccc;
    }
    
    .summary {
      padding: 40px 60px;
      background: #fafafa;
      border-left: 4px solid #1a1a1a;
      margin: 0;
    }
    
    .summary-text {
      font-size: 15px;
      line-height: 1.9;
      color: #444;
      text-align: justify;
      font-style: italic;
    }
    
    .content {
      padding: 40px 60px 50px;
    }
    
    .section {
      margin-bottom: 40px;
    }
    
    .section-title {
      font-size: 24px;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 25px;
      padding-bottom: 10px;
      border-bottom: 2px solid #1a1a1a;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    
    .experience-item {
      margin-bottom: 35px;
      page-break-inside: avoid;
    }
    
    .exp-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 12px;
    }
    
    .exp-title {
      flex: 1;
    }
    
    .company-name {
      font-size: 20px;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 4px;
    }
    
    .job-title {
      font-size: 16px;
      color: #555;
      font-weight: 600;
    }
    
    .period {
      font-size: 14px;
      color: #888;
      white-space: nowrap;
      font-style: italic;
    }
    
    .achievements {
      margin-top: 12px;
    }
    
    .achievement-item {
      margin-bottom: 10px;
      padding-left: 25px;
      position: relative;
      font-size: 15px;
      color: #444;
      line-height: 1.7;
    }
    
    .achievement-item::before {
      content: '▪';
      position: absolute;
      left: 8px;
      color: #1a1a1a;
      font-size: 18px;
    }
    
    .education-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      padding: 15px 20px;
      background: #fafafa;
      border-left: 3px solid #1a1a1a;
    }
    
    .edu-info {
      flex: 1;
    }
    
    .university {
      font-size: 17px;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 4px;
    }
    
    .degree {
      font-size: 15px;
      color: #555;
    }
    
    .skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    
    .skill-category {
      padding: 20px;
      background: #fafafa;
      border-radius: 4px;
    }
    
    .skill-title {
      font-size: 16px;
      font-weight: 700;
      color: #1a1a1a;
      margin-bottom: 12px;
    }
    
    .skill-list {
      font-size: 14px;
      color: #555;
      line-height: 1.8;
    }
    
    @media print {
      body {
        background: white;
      }
      .container {
        box-shadow: none;
      }
    }
    
    @media (max-width: 768px) {
      .header {
        padding: 30px 20px;
      }
      .content, .summary {
        padding: 30px 20px;
      }
      .name {
        font-size: 36px;
      }
      .skills-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 class="name">李明</h1>
      <div class="position">产品总监 / 互联网运营专家</div>
      <div class="contact-info">
        <span class="contact-item">138-0000-0000</span>
        <span class="divider">|</span>
        <span class="contact-item">liming@executive.com</span>
        <span class="divider">|</span>
        <span class="contact-item">上海市浦东新区</span>
        <span class="divider">|</span>
        <span class="contact-item">LinkedIn: linkedin.com/in/liming</span>
      </div>
    </div>
    
    <div class="summary">
      <p class="summary-text">
        拥有 12 年互联网产品和运营管理经验，曾主导多个千万级用户产品从 0 到 1 的规划与落地。
        擅长产品战略规划、团队建设、数据驱动运营。带领团队实现年度营收增长 300%，用户增长 500%。
        具有丰富的 B 端和 C 端产品经验，在电商、社交、教育等领域有深入实践。
      </p>
    </div>
    
    <div class="content">
      <div class="section">
        <h2 class="section-title">Work Experience</h2>
        
        <div class="experience-item">
          <div class="exp-header">
            <div class="exp-title">
              <div class="company-name">某知名互联网公司（上市）</div>
              <div class="job-title">产品总监 / 产品委员会成员</div>
            </div>
            <div class="period">2019.03 - 至今</div>
          </div>
          <div class="achievements">
            <div class="achievement-item">
              负责公司核心产品线战略规划和产品管理，带领 50+ 人产品团队
            </div>
            <div class="achievement-item">
              主导新业务线从 0 到 1 孵化，18 个月内实现月活 2000w+，年营收破 5 亿
            </div>
            <div class="achievement-item">
              建立数据驱动的产品决策体系，通过 A/B 测试和用户研究优化产品转化率 45%
            </div>
            <div class="achievement-item">
              推动产品中台建设，实现组件复用率 70%，新产品开发周期缩短 60%
            </div>
          </div>
        </div>
        
        <div class="experience-item">
          <div class="exp-header">
            <div class="exp-title">
              <div class="company-name">某电商独角兽公司</div>
              <div class="job-title">高级产品经理</div>
            </div>
            <div class="period">2016.06 - 2019.02</div>
          </div>
          <div class="achievements">
            <div class="achievement-item">
              负责电商平台核心交易系统和推荐系统的产品设计与优化
            </div>
            <div class="achievement-item">
              通过个性化推荐算法优化，使商品点击率提升 85%，转化率提升 32%
            </div>
            <div class="achievement-item">
              主导会员体系设计，付费会员数增长至 500w+，会员复购率达 78%
            </div>
          </div>
        </div>
        
        <div class="experience-item">
          <div class="exp-header">
            <div class="exp-title">
              <div class="company-name">某创业公司（已被收购）</div>
              <div class="job-title">产品经理</div>
            </div>
            <div class="period">2013.07 - 2016.05</div>
          </div>
          <div class="achievements">
            <div class="achievement-item">
              从 0 到 1 负责社交产品的产品设计和迭代，累计用户 1000w+
            </div>
            <div class="achievement-item">
              通过社区运营和内容策略，实现 DAU/MAU 比值达到 35%
            </div>
          </div>
        </div>
      </div>
      
      <div class="section">
        <h2 class="section-title">Education</h2>
        <div class="education-item">
          <div class="edu-info">
            <div class="university">复旦大学</div>
            <div class="degree">工商管理硕士（MBA）</div>
          </div>
          <div class="period">2017 - 2019</div>
        </div>
        <div class="education-item">
          <div class="edu-info">
            <div class="university">上海交通大学</div>
            <div class="degree">计算机科学与技术 · 学士</div>
          </div>
          <div class="period">2009 - 2013</div>
        </div>
      </div>
      
      <div class="section">
        <h2 class="section-title">Core Competencies</h2>
        <div class="skills-grid">
          <div class="skill-category">
            <div class="skill-title">产品管理</div>
            <div class="skill-list">
              产品战略规划 · 用户研究 · 需求分析<br>
              原型设计 · 数据分析 · A/B 测试
            </div>
          </div>
          <div class="skill-category">
            <div class="skill-title">团队管理</div>
            <div class="skill-list">
              团队建设 · 跨部门协作 · 项目管理<br>
              人才培养 · 绩效管理 · OKR 落地
            </div>
          </div>
          <div class="skill-category">
            <div class="skill-title">业务能力</div>
            <div class="skill-list">
              商业模式设计 · 增长黑客 · 运营策略<br>
              市场分析 · 竞品研究 · 用户增长
            </div>
          </div>
          <div class="skill-category">
            <div class="skill-title">行业经验</div>
            <div class="skill-list">
              电商平台 · 社交产品 · 内容社区<br>
              SaaS · 在线教育 · 企业服务
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
}
