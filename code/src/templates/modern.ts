import { ResumeTemplate } from '@/types'

const modernTemplate: ResumeTemplate = {
  id: 'modern-1',
  name: '现代简约',
  description: '简洁现代的设计风格，适合互联网行业',
  thumbnail: '/templates/modern.png',
  category: 'modern',
  html: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>个人简历</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 800px; margin: 0 auto; padding: 40px 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 60px 40px; border-radius: 10px; margin-bottom: 40px; }
        .header h1 { font-size: 48px; margin-bottom: 10px; }
        .header p { font-size: 20px; opacity: 0.9; }
        .section { margin-bottom: 40px; }
        .section-title { font-size: 28px; color: #667eea; border-bottom: 3px solid #667eea; padding-bottom: 10px; margin-bottom: 20px; }
        .item { margin-bottom: 25px; }
        .item h3 { font-size: 20px; color: #333; margin-bottom: 5px; }
        .item .meta { color: #666; font-size: 14px; margin-bottom: 10px; }
        .item p { color: #555; }
        .skills { display: flex; flex-wrap: wrap; gap: 10px; }
        .skill { background: #667eea; color: white; padding: 8px 16px; border-radius: 20px; font-size: 14px; }
        .contact { display: flex; gap: 20px; flex-wrap: wrap; }
        .contact-item { display: flex; align-items: center; gap: 5px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>张三</h1>
            <p>高级前端工程师</p>
        </div>

        <div class="section">
            <h2 class="section-title">联系方式</h2>
            <div class="contact">
                <div class="contact-item">📧 zhangsan@email.com</div>
                <div class="contact-item">📱 138-0000-0000</div>
                <div class="contact-item">🌐 github.com/zhangsan</div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">工作经历</h2>
            <div class="item">
                <h3>某科技公司 - 高级前端工程师</h3>
                <div class="meta">2020.06 - 至今</div>
                <p>负责公司核心产品的前端开发，主导多个重要项目的架构设计与实现。</p>
            </div>
            <div class="item">
                <h3>某互联网公司 - 前端工程师</h3>
                <div class="meta">2018.07 - 2020.05</div>
                <p>参与多个Web应用的开发，积累了丰富的前端开发经验。</p>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">教育背景</h2>
            <div class="item">
                <h3>某大学 - 计算机科学与技术</h3>
                <div class="meta">2014.09 - 2018.06 | 本科</div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">技能专长</h2>
            <div class="skills">
                <span class="skill">JavaScript</span>
                <span class="skill">TypeScript</span>
                <span class="skill">React</span>
                <span class="skill">Vue</span>
                <span class="skill">Node.js</span>
                <span class="skill">Webpack</span>
                <span class="skill">Git</span>
            </div>
        </div>
    </div>
</body>
</html>`
}

export const modern = modernTemplate
export default modernTemplate
