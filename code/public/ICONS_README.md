# 扩展图标说明

## 📌 需要准备的图标文件

为了让浏览器扩展正常工作，请在此目录下添加以下图标文件：

```
public/
├── icon-16.png   (16x16 像素)
├── icon-32.png   (32x32 像素)
├── icon-48.png   (48x48 像素)
└── icon-128.png  (128x128 像素)
```

## 🎨 设计建议

### 图标风格
- **简洁明了** - 在小尺寸下清晰可辨
- **符合品牌** - 使用项目主题色（蓝色/紫色渐变）
- **专业感** - 采用简历/文档相关的图形元素

### 推荐图形元素
- 📄 文档/简历图标
- ✏️ 编辑/笔的图标
- 📝 写作相关图标
- 💼 职业/商务图标

### 颜色方案
项目主题色：
- 主色：`#6366f1` (Indigo)
- 辅色：`#8b5cf6` (Purple)
- 渐变：从蓝色到紫色

## 🛠️ 快速生成图标

### 方法 1: 在线工具
- [RealFaviconGenerator](https://realfavicongenerator.net/) - 上传一张大图，自动生成多尺寸
- [App Icon Generator](https://www.appicon.co/) - 专业的图标生成工具
- [Favicon.io](https://favicon.io/) - 简单的图标创建工具

### 方法 2: 设计软件
使用 Figma、Sketch、Adobe Illustrator 等设计工具：

1. 创建 128x128 的画布
2. 设计图标（注意 16x16 也要清晰）
3. 导出为 PNG 格式的多个尺寸

### 方法 3: AI 生成
使用 AI 工具生成图标：
- DALL-E
- Midjourney
- Stable Diffusion

提示词示例：
```
"A minimalist app icon for a resume builder, 
simple document or pen icon, 
gradient from blue to purple, 
professional and modern, 
flat design, on transparent background"
```

## 📝 临时占位图标

在准备正式图标前，你可以使用纯色占位图标。在命令行运行：

```bash
# 使用 ImageMagick 生成临时图标
convert -size 16x16 xc:#6366f1 public/icon-16.png
convert -size 32x32 xc:#6366f1 public/icon-32.png
convert -size 48x48 xc:#6366f1 public/icon-48.png
convert -size 128x128 xc:#6366f1 public/icon-128.png
```

或者使用在线工具快速创建纯色图标。

## ✅ 检查清单

构建扩展前，确保：
- [ ] 所有 4 个尺寸的图标文件都已创建
- [ ] 图标格式为 PNG
- [ ] 文件名完全匹配（icon-16.png 等）
- [ ] 图标背景透明或使用合适的背景色
- [ ] 在小尺寸下图标清晰可辨

---

**提示**: 图标准备好后，运行 `npm run build:extension` 即可构建扩展！
