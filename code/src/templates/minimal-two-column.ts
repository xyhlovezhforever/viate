import { ResumeTemplate } from '@/types'

export const minimalTwoColumn: ResumeTemplate = {
  id: 'minimal-two-column',
  name: '简约双栏版',
  description: '简洁的双栏布局，适合各类职位，信息清晰易读',
  category: 'modern',
  thumbnail: '',
  html: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>简历 - 陈静</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', sans-serif;
      line-height: 1.7;
      color: #2c3e50;
      background: #ecf0f1;
    }
    
    .page {
      max-width: 850px;
      margin: 0 auto;
      background: white;
      display: flex;
      min-height: 100vh;
    }
    
    .left-column {
      width: 320px;
      background: #34495e;
      color: white;
      padding: 40px 30px;
    }
    
    .profile {
      text-align: center;
      margin-bottom: 35px;
      padding-bottom: 30px;
      border-bottom: 2px solid rgba(255,255,255,0.2);
    }
    
    .avatar {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: linear-gradient(135deg, #3498db, #2980b9);
      margin: 0 auto 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 48px;
      font-weight: 300;
      border: 4px solid rgba(255,255,255,0.3);
    }
    
    .name {
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    
    .job-title {
      font-size: 15px;
      opacity: 0.9;
      font-weight: 300;
    }
    
    .section {
      margin-bottom: 35px;
    }
    
    .section-title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 18px;
      padding-bottom: 8px;
      border-bottom: 2px solid rgba(255,255,255,0.2);
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .contact-item {
      margin-bottom: 15px;
      font-size: 14px;
      display: flex;
      align-items: flex-start;
      gap: 10px;
      line-height: 1.6;
    }
    
    .contact-icon {
      flex-shrink: 0;
      width: 20px;
      text-align: center;
    }
    
    .skill-item {
      margin-bottom: 18px;
    }
    
    .skill-name {
      font-size: 14px;
      margin-bottom: 8px;
      font-weight: 500;
    }
    
    .skill-bar-bg {
      height: 8px;
      background: rgba(255,255,255,0.2);
      border-radius: 4px;
      overflow: hidden;
    }
    
    .skill-bar {
      height: 100%;
      background: linear-gradient(90deg, #3498db, #2ecc71);
      border-radius: 4px;
    }
    
    .language-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
      font-size: 14px;
    }
    
    .language-name {
      font-weight: 500;
    }
    
    .language-level {
      opacity: 0.8;
    }
    
    .right-column {
      flex: 1;
      padding: 40px 45px;
    }
    
    .right-column .section {
      margin-bottom: 40px;
    }
    
    .right-column .section-title {
      font-size: 22px;
      color: #2c3e50;
      margin-bottom: 25px;
      padding-bottom: 10px;
      border-bottom: 3px solid #3498db;
      text-transform: none;
      letter-spacing: 0;
    }
    
    .timeline-item {
      margin-bottom: 30px;
      padding-left: 25px;
      border-left: 2px solid #3498db;
      position: relative;
    }
    
    .timeline-item::before {
      content: '';
      position: absolute;
      left: -6px;
      top: 5px;
      width: 10px;
      height: 10px;
      background: #3498db;
      border-radius: 50%;
      border: 2px solid white;
    }
    
    .timeline-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 10px;
    }
    
    .timeline-title {
      font-size: 18px;
      font-weight: 600;
      color: #2c3e50;
      margin-bottom: 4px;
    }
    
    .timeline-subtitle {
      font-size: 15px;
      color: #3498db;
      font-weight: 500;
    }
    
    .timeline-period {
      font-size: 13px;
      color: #7f8c8d;
      white-space: nowrap;
      background: #ecf0f1;
      padding: 4px 12px;
      border-radius: 12px;
    }
    
    .timeline-content {
      font-size: 14px;
      color: #555;
      line-height: 1.8;
    }
    
    .timeline-content ul {
      margin-top: 10px;
      padding-left: 20px;
    }
    
    .timeline-content li {
      margin-bottom: 8px;
    }
    
    .interests {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    
    .interest-tag {
      background: #ecf0f1;
      color: #2c3e50;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 500;
    }
    
    @media print {
      body {
        background: white;
      }
      .page {
        box-shadow: none;
      }
    }
    
    @media (max-width: 768px) {
      .page {
        flex-direction: column;
      }
      .left-column {
        width: 100%;
      }
    }
  </style>
</head>
<body>
  <div class="page">
    <div class="left-column">
      <div class="profile">
        <div class="avatar">CJ</div>
        <div class="name">陈静</div>
        <div class="job-title">市场营销经理</div>
      </div>
      
      <div class="section">
        <div class="section-title">联系方式</div>
        <div class="contact-item">
          <div class="contact-icon">📱</div>
          <div>139-8888-6666</div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">✉️</div>
          <div>chenjing@email.com</div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">🌐</div>
          <div>linkedin.com/in/chenjing</div>
        </div>
        <div class="contact-item">
          <div class="contact-icon">📍</div>
          <div>广州市天河区</div>
        </div>
      </div>
      
      <div class="section">
        <div class="section-title">专业技能</div>
        <div class="skill-item">
          <div class="skill-name">数字营销</div>
          <div class="skill-bar-bg">
            <div class="skill-bar" style="width: 95%"></div>
          </div>
        </div>
        <div class="skill-item">
          <div class="skill-name">品牌策划</div>
          <div class="skill-bar-bg">
            <div class="skill-bar" style="width: 90%"></div>
          </div>
        </div>
        <div class="skill-item">
          <div class="skill-name">内容运营</div>
          <div class="skill-bar-bg">
            <div class="skill-bar" style="width: 88%"></div>
          </div>
        </div>
        <div class="skill-item">
          <div class="skill-name">数据分析</div>
          <div class="skill-bar-bg">
            <div class="skill-bar" style="width: 85%"></div>
          </div>
        </div>
        <div class="skill-item">
          <div class="skill-name">项目管理</div>
          <div class="skill-bar-bg">
            <div class="skill-bar" style="width: 82%"></div>
          </div>
        </div>
      </div>
      
      <div class="section">
        <div class="section-title">语言能力</div>
        <div class="language-item">
          <div class="language-name">中文</div>
          <div class="language-level">母语</div>
        </div>
        <div class="language-item">
          <div class="language-name">英语</div>
          <div class="language-level">专业八级</div>
        </div>
        <div class="language-item">
          <div class="language-name">日语</div>
          <div class="language-level">N2</div>
        </div>
      </div>
      
      <div class="section">
        <div class="section-title">兴趣爱好</div>
        <div class="timeline-content">
          摄影、旅行、阅读<br>
          马拉松、瑜伽<br>
          钢琴、绘画
        </div>
      </div>
    </div>
    
    <div class="right-column">
      <div class="section">
        <div class="section-title">个人简介</div>
        <div class="timeline-content">
          具有 8 年市场营销经验，擅长品牌策划、数字营销和内容运营。曾主导多个品牌从 0 到 1 的市场推广，
          累计为公司带来 5000w+ 营收增长。熟悉新媒体营销、SEO/SEM、社交媒体运营等多个领域。
          拥有优秀的团队协作能力和项目管理经验。
        </div>
      </div>
      
      <div class="section">
        <div class="section-title">工作经历</div>
        
        <div class="timeline-item">
          <div class="timeline-header">
            <div>
              <div class="timeline-title">市场营销经理</div>
              <div class="timeline-subtitle">某互联网公司</div>
            </div>
            <div class="timeline-period">2020.03 - 至今</div>
          </div>
          <div class="timeline-content">
            <ul>
              <li>负责公司品牌战略规划和市场推广，带领 10 人团队</li>
              <li>策划并执行年度营销活动 20+，新增用户 100w+，ROI 达 1:5</li>
              <li>搭建私域流量池，社群用户超 50w，月活跃率 60%</li>
              <li>与产品、运营团队协作，推动 GMV 年增长 300%</li>
            </ul>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-header">
            <div>
              <div class="timeline-title">市场营销专员</div>
              <div class="timeline-subtitle">某消费品牌</div>
            </div>
            <div class="timeline-period">2017.06 - 2020.02</div>
          </div>
          <div class="timeline-content">
            <ul>
              <li>负责品牌社交媒体运营，粉丝从 0 增长至 200w</li>
              <li>策划爆款营销活动，单次活动曝光量超 5000w</li>
              <li>与 KOL、媒体建立合作关系，提升品牌知名度</li>
            </ul>
          </div>
        </div>
        
        <div class="timeline-item">
          <div class="timeline-header">
            <div>
              <div class="timeline-title">市场助理</div>
              <div class="timeline-subtitle">某 4A 广告公司</div>
            </div>
            <div class="timeline-period">2015.07 - 2017.05</div>
          </div>
          <div class="timeline-content">
            <ul>
              <li>协助客户经理完成品牌策划和创意提案</li>
              <li>参与多个知名品牌的营销活动执行</li>
              <li>学习并掌握完整的品牌营销流程</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="section">
        <div class="section-title">教育背景</div>
        <div class="timeline-item">
          <div class="timeline-header">
            <div>
              <div class="timeline-title">中山大学</div>
              <div class="timeline-subtitle">市场营销 · 学士</div>
            </div>
            <div class="timeline-period">2011 - 2015</div>
          </div>
        </div>
      </div>
      
      <div class="section">
        <div class="section-title">获奖荣誉</div>
        <div class="timeline-content">
          <ul>
            <li>2023 年度最佳营销案例奖 - 中国广告协会</li>
            <li>2022 年公司年度优秀员工</li>
            <li>2021 年金投赏铜奖 - 社交媒体营销类</li>
            <li>2020 年公司最佳新人奖</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
}
