import { ResumeTemplate } from '@/types'

const classicTemplate: ResumeTemplate = {
  id: 'classic-1',
  name: '经典专业',
  description: '传统商务风格，适合传统行业',
  thumbnail: '/templates/classic.png',
  category: 'classic',
  html: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>个人简历</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Georgia', serif; line-height: 1.8; color: #2c3e50; background: #f5f5f5; }
        .container { max-width: 850px; margin: 40px auto; background: white; padding: 60px; box-shadow: 0 0 30px rgba(0,0,0,0.1); }
        .header { text-align: center; border-bottom: 3px solid #2c3e50; padding-bottom: 30px; margin-bottom: 40px; }
        .header h1 { font-size: 42px; margin-bottom: 10px; color: #2c3e50; }
        .header p { font-size: 18px; color: #7f8c8d; }
        .section { margin-bottom: 35px; }
        .section-title { font-size: 24px; color: #2c3e50; border-left: 4px solid #3498db; padding-left: 15px; margin-bottom: 25px; }
        .item { margin-bottom: 20px; padding-left: 20px; }
        .item h3 { font-size: 18px; color: #34495e; margin-bottom: 5px; }
        .item .meta { color: #95a5a6; font-size: 14px; margin-bottom: 8px; font-style: italic; }
        .item ul { margin-left: 20px; }
        .item li { margin-bottom: 5px; color: #555; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>李四</h1>
            <p>资深项目经理</p>
            <p style="margin-top: 15px; font-size: 14px;">
                lisi@email.com | 139-0000-0000 | 北京市朝阳区
            </p>
        </div>

        <div class="section">
            <h2 class="section-title">个人简介</h2>
            <p>10年以上项目管理经验，擅长大型项目的规划与执行，具备出色的团队协作和沟通能力。</p>
        </div>

        <div class="section">
            <h2 class="section-title">工作经历</h2>
            <div class="item">
                <h3>某大型企业 - 高级项目经理</h3>
                <div class="meta">2018.03 - 至今</div>
                <ul>
                    <li>负责公司核心业务线的项目管理工作</li>
                    <li>成功交付多个千万级项目</li>
                    <li>管理20+人的跨部门团队</li>
                </ul>
            </div>
            <div class="item">
                <h3>某咨询公司 - 项目经理</h3>
                <div class="meta">2014.07 - 2018.02</div>
                <ul>
                    <li>参与多个大型企业的数字化转型项目</li>
                    <li>积累了丰富的行业经验</li>
                </ul>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">教育背景</h2>
            <div class="item">
                <h3>某著名大学 - 工商管理硕士(MBA)</h3>
                <div class="meta">2012.09 - 2014.06</div>
            </div>
            <div class="item">
                <h3>某大学 - 计算机科学学士</h3>
                <div class="meta">2008.09 - 2012.06</div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title">专业技能</h2>
            <ul style="margin-left: 40px;">
                <li>PMP项目管理专业认证</li>
                <li>精通敏捷开发方法论(Scrum/Kanban)</li>
                <li>熟练使用JIRA、Confluence等项目管理工具</li>
                <li>优秀的英语沟通能力(CET-6)</li>
            </ul>
        </div>
    </div>
</body>
</html>`
}

export const classic = classicTemplate
export default classicTemplate
