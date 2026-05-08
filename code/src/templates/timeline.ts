import { ResumeTemplate } from '@/types'

export const timeline: ResumeTemplate = {
  id: 'timeline',
  name: '时间轴版',
  description: '以时间轴方式展示工作经历，清晰展现职业发展轨迹',
  category: 'modern',
  thumbnail: '',
  html: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>时间轴简历</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: Arial, 'Microsoft YaHei', sans-serif; line-height: 1.6; color: #333; background: #f5f5f5; }
    .container { max-width: 900px; margin: 0 auto; background: white; padding: 40px 50px; }
    .header { text-align: center; margin-bottom: 40px; }
    .name { font-size: 42px; font-weight: 700; margin-bottom: 10px; }
    .title { font-size: 18px; color: #666; margin-bottom: 20px; }
    .contact { display: flex; justify-content: center; gap: 20px; font-size: 14px; color: #666; }
    .timeline { position: relative; padding-left: 40px; }
    .timeline::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: #3498db; }
    .timeline-item { position: relative; margin-bottom: 40px; }
    .timeline-item::before { content: ''; position: absolute; left: -45px; top: 5px; width: 12px; height: 12px; background: #3498db; border-radius: 50%; border: 3px solid white; }
    .timeline-date { font-size: 13px; color: #999; margin-bottom: 5px; }
    .timeline-title { font-size: 20px; font-weight: 600; margin-bottom: 5px; }
    .timeline-subtitle { font-size: 15px; color: #3498db; margin-bottom: 10px; }
    .timeline-desc { font-size: 14px; color: #555; line-height: 1.8; }
    .section { margin-bottom: 35px; }
    .section-title { font-size: 24px; font-weight: 700; margin-bottom: 20px; padding-bottom: 10px; border-bottom: 2px solid #3498db; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="name">赵强</div>
      <div class="title">数据分析师</div>
      <div class="contact">
        <span>📱 136-1234-5678</span>
        <span>✉️ zhaoqiang@data.com</span>
        <span>📍 上海市浦东新区</span>
      </div>
    </div>
    <div class="section">
      <div class="section-title">工作经历</div>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-date">2021.06 - 至今</div>
          <div class="timeline-title">高级数据分析师</div>
          <div class="timeline-subtitle">阿里巴巴</div>
          <div class="timeline-desc">负责电商平台用户行为分析，搭建数据指标体系，通过数据驱动产品优化</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">2019.03 - 2021.05</div>
          <div class="timeline-title">数据分析师</div>
          <div class="timeline-subtitle">京东</div>
          <div class="timeline-desc">分析商品销售数据，优化推荐算法，提升转化率</div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="section-title">教育背景</div>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-date">2015 - 2019</div>
          <div class="timeline-title">上海交通大学</div>
          <div class="timeline-subtitle">统计学 · 学士</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`
}
