# Viate Resume Builder 🚀

一个专业的在线简历编辑器，支持实时编辑、模板管理和一键发布到 GitHub Pages。

**🎉 现已支持浏览器扩展！** 可作为 Chrome/Edge/Brave 扩展运行，在侧边栏中便捷编辑简历。

## ✨ 特性

- 🎨 **精美的 UI 设计** - 使用 Tailwind CSS 和 Framer Motion 打造流畅动画效果
- 📝 **在线编辑** - 集成 Monaco Editor，提供强大的 HTML 编辑能力
- 🎯 **内置模板** - 多种专业简历模板可供选择
- 📤 **上传模板** - 支持上传自定义 HTML 模板
- 🌐 **一键发布** - 直接发布到 GitHub Pages
- 📄 **PDF 导出** - 一键下载简历为 PDF 格式
- 💾 **智能存储** - Web 版使用 localStorage，扩展版使用 chrome.storage
- 🔌 **浏览器扩展** - 支持作为 Chrome/Edge 扩展在侧边栏运行

## 🛠️ 技术栈

- **React 18** - 现代化的 UI 库
- **TypeScript** - 类型安全
- **Vite** - 快速的构建工具
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Framer Motion** - 强大的动画库
- **Monaco Editor** - VSCode 同款编辑器
- **Zustand** - 轻量级状态管理
- **React Router** - 路由管理
- **html2canvas + jsPDF** - PDF 生成

## 🚀 快速开始

### 方式 1: Web 应用

#### 安装依赖

```bash
npm install
```

#### 启动开发服务器

```bash
npm run dev
```

#### 构建生产版本

```bash
npm run build
```

#### 预览生产构建

```bash
npm run preview
```

### 方式 2: 浏览器扩展

#### 1. 准备图标

在 `public/` 目录下添加图标文件（参考 `public/ICONS_README.md`）：
- icon-16.png (16x16)
- icon-32.png (32x32)
- icon-48.png (48x48)
- icon-128.png (128x128)

#### 2. 构建扩展

```bash
npm install
npm run build:extension
```

#### 3. 安装到浏览器

**Chrome/Edge/Brave:**
1. 打开 `chrome://extensions/` (或对应浏览器扩展页面)
2. 开启"开发者模式"
3. 点击"加载已解压的扩展程序"
4. 选择项目的 `dist` 目录

详细说明请查看：
- **[扩展安装使用指南](./docs/扩展安装使用指南.md)** ⭐ 完整的安装和使用教程
- [浏览器扩展使用指南](./docs/浏览器扩展使用指南.md) - 技术详解和高级功能

## 📁 项目结构

```
viate-project/
├── src/
│   ├── components/        # React 组件
│   │   ├── ui/           # 基础 UI 组件
│   │   ├── Editor/       # 编辑器组件
│   │   ├── Preview/      # 预览组件
│   │   └── Templates/    # 模板组件
│   ├── pages/            # 页面组件
│   ├── store/            # Zustand 状态管理
│   ├── lib/              # 工具函数
│   ├── types/            # TypeScript 类型定义
│   ├── templates/        # 内置简历模板
│   ├── App.tsx           # 主应用组件
│   └── main.tsx          # 入口文件
├── public/               # 静态资源
└── package.json
```

## 🎯 使用说明

1. **选择模板** - 从内置模板库中选择一个模板，或上传自定义 HTML 模板
2. **在线编辑** - 使用强大的代码编辑器修改简历内容
3. **实时预览** - 右侧实时查看简历效果
4. **导出 PDF** - 点击导出按钮下载简历为 PDF
5. **发布到 GitHub** - 配置 GitHub Token 后一键发布到 GitHub Pages

## 🔑 GitHub Pages 发布

1. 在 GitHub 创建一个个人 Access Token（需要 `repo` 权限）
2. 在设置页面配置 Token 和仓库信息
3. 点击发布按钮即可将简历部署到 `https://[username].github.io/`

## 📝 License

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！
