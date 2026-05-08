import { ResumeTemplate } from '@/types'

const creativeTemplate: ResumeTemplate = {
  id: 'creative-1',
  name: '创意设计',
  description: '富有创意的设计风格，适合设计行业',
  thumbnail: '/templates/creative.png',
  category: 'creative',
  html: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>个人简历</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Helvetica', sans-serif; color: #333; }
        .wrapper { display: flex; min-height: 100vh; }
        .sidebar { width: 300px; background: linear-gradient(180deg, #ff6b6b, #ee5a6f); color: white; padding: 40px 30px; }
        .main { flex: 1; padding: 40px 50px; background: #fafafa; }
        .profile { text-align: center; margin-bottom: 40px; }
        .avatar { width: 150px; height: 150px; border-radius: 50%; background: white; margin: 0 auto 20px; display: flex; align-items: center; justify-content: center; font-size: 60px; }
        .sidebar h1 { font-size: 28px; margin-bottom: 5px; }
        .sidebar p { font-size: 16px; opacity: 0.9; }
        .sidebar-section { margin-bottom: 30px; }
        .sidebar-section h3 { font-size: 18px; margin-bottom: 15px; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 8px; }
        .sidebar-item { margin-bottom: 10px; font-size: 14px; }
        .section { margin-bottom: 40px; }
        .section h2 { font-size: 32px; color: #ff6b6b; margin-bottom: 25px; }
        .timeline-item { position: relative; padding-left: 40px; margin-bottom: 30px; border-left: 3px solid #ff6b6b; }
        .timeline-item::before { content: ''; position: absolute; left: -8px; top: 5px; width: 13px; height: 13px; border-radius: 50%; background: #ff6b6b; }
        .timeline-item h3 { font-size: 20px; color: #333; margin-bottom: 5px; }
        .timeline-item .date { color: #999; font-size: 14px; margin-bottom: 10px; }
        .timeline-item p { color: #666; line-height: 1.6; }
        .tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .tag { background: #ff6b6b; color: white; padding: 6px 14px; border-radius: 15px; font-size: 13px; }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="sidebar">
            <div class="profile">
                <div class="avatar">👩‍💼</div>
                <h1>王芳</h1>
                <p>UI/UX 设计师</p>
            </div>

            <div class="sidebar-section">
                <h3>联系方式</h3>
                <div class="sidebar-item">📧 wangfang@email.com</div>
                <div class="sidebar-item">📱 137-0000-0000</div>
                <div class="sidebar-item">🌐 wangfang.design</div>
                <div class="sidebar-item">📍 上海市浦东新区</div>
            </div>

            <div class="sidebar-section">
                <h3>设计工具</h3>
                <div class="sidebar-item">⭐ Figma</div>
                <div class="sidebar-item">⭐ Sketch</div>
                <div class="sidebar-item">⭐ Adobe XD</div>
                <div class="sidebar-item">⭐ Photoshop</div>
                <div class="sidebar-item">⭐ Illustrator</div>
            </div>

            <div class="sidebar-section">
                <h3>语言能力</h3>
                <div class="sidebar-item">中文 - 母语</div>
                <div class="sidebar-item">英语 - 流利</div>
            </div>
        </div>

        <div class="main">
            <div class="section">
                <h2>关于我</h2>
                <p style="color: #666; line-height: 1.8;">
                    5年以上UI/UX设计经验，专注于用户体验设计和视觉设计。
                    擅长从用户需求出发，创造美观且易用的产品界面。
                    热爱设计，追求细节，注重用户反馈。
                </p>
            </div>

            <div class="section">
                <h2>工作经历</h2>
                <div class="timeline-item">
                    <h3>某知名互联网公司 - 资深UI设计师</h3>
                    <div class="date">2019.08 - 至今</div>
                    <p>负责公司主要产品的UI设计工作，主导设计系统的建立和维护。成功改版多款产品，用户满意度提升30%。</p>
                </div>
                <div class="timeline-item">
                    <h3>某设计工作室 - UI设计师</h3>
                    <div class="date">2017.07 - 2019.07</div>
                    <p>参与多个品牌的视觉设计项目，积累了丰富的设计经验。</p>
                </div>
            </div>

            <div class="section">
                <h2>教育背景</h2>
                <div class="timeline-item">
                    <h3>某艺术学院 - 视觉传达设计</h3>
                    <div class="date">2013.09 - 2017.06 | 本科</div>
                </div>
            </div>

            <div class="section">
                <h2>专业技能</h2>
                <div class="tags">
                    <span class="tag">UI设计</span>
                    <span class="tag">UX设计</span>
                    <span class="tag">交互设计</span>
                    <span class="tag">视觉设计</span>
                    <span class="tag">设计系统</span>
                    <span class="tag">用户研究</span>
                    <span class="tag">原型设计</span>
                    <span class="tag">品牌设计</span>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`
}

export const creative = creativeTemplate
export default creativeTemplate
