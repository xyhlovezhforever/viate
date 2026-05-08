# 快速创建简单的占位图标
# 使用 PowerShell 创建纯色 PNG 图标

$distPath = "d:\code\viate-project\dist"

# 确保 dist 目录存在
if (-not (Test-Path $distPath)) {
    Write-Host "错误: dist 目录不存在，请先运行 npm run build" -ForegroundColor Red
    exit 1
}

Write-Host "创建占位图标..." -ForegroundColor Cyan

# 创建一个简单的 Base64 编码的 PNG 图标
# 这是一个 16x16 的蓝色方块
$base64Icon16 = "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABNSURBVDiN7dIxCoAwEETRvxJvmnsJj5NYeRMb8QAiNhYKgquFhYWQZqvZYmEYBmZgYKr8xQoXnNgRVPjhhxdbggo//Phiyz8E/wX/WgEmZQtnWPPj+wAAAABJRU5ErkJggg=="

# 32x32
$base64Icon32 = "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABxSURBVFiF7dYxCoAwEETRvxJvmnsJj5NYeRMb8QAiNhYKgquFhYWQZqvZYmEYBmZgYKr8g1P4Ysce2LDhgx1bbNjwwY4tNmz4YMcWGzZ8sGOLDRs+2LHFhg0f7Nhiw4YPdmyx/UPwX/Bfw58A3AAm0A8+AJGOGwAAAABJRU5ErkJggg=="

# 48x48
$base64Icon48 = "iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACJSURBVGiB7dkxCoAwEETRvxJvmnsJj5NYeRMb8QAiNhYKgquFhYWQZqvZYmEYBmZgYKr8g1P4Ysce2LDhgx1bbNjwwY4tNmz4YMcWGzZ8sGOLDRs+2LHFhg0f7Nhiw4YPdmyx/UPwX/Bfw58A3ACm8A8+2LHFhg0f7Nhiw4YPdmyxYcMHO7bY/iH4LwEmwA8+YHOQVgAAAABJRU5ErkJggg=="

# 128x128
$base64Icon128 = "iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEXSURBVHic7doxCoAwEETRvxJvmnsJj5NYeRMb8QAiNhYKgquFhYWQZqvZYmEYBmZgYKr8g1P4Ysce2LDhgx1bbNjwwY4tNmz4YMcWGzZ8sGOLDRs+2LHFhg0f7Nhiw4YPdmyxYcMHO7bYsOGDHVts2PDBji02bPhgxxYbNnywY4sNGz7YscWGDR/s2GLDhg92bLFhwwc7ttiw4YMdW2zY8MGOLTZs+GDHFhs2fLBjiw0bPtixxYYNH+zYYsOGD3ZssWHDBzu22LDhgx1bbNjwwY4tNmz4YMcWGzZ8sGOLDRs+2LHFhg0f7Nhiw4YPdmyx/UPwX/Bfw58A3ACm8A8+2LHFhg0f7Nhiw4YPdmyxYcMHO7bY/iH4LwFM4A8+cOXzVAAAAABJRU5ErkJggg=="

# 保存图标
[System.Convert]::FromBase64String($base64Icon16) | Set-Content -Path "$distPath\icon-16.png" -Encoding Byte
[System.Convert]::FromBase64String($base64Icon32) | Set-Content -Path "$distPath\icon-32.png" -Encoding Byte
[System.Convert]::FromBase64String($base64Icon48) | Set-Content -Path "$distPath\icon-48.png" -Encoding Byte
[System.Convert]::FromBase64String($base64Icon128) | Set-Content -Path "$distPath\icon-128.png" -Encoding Byte

Write-Host "✓ 图标创建成功！" -ForegroundColor Green
Write-Host ""
Write-Host "图标已保存到: $distPath" -ForegroundColor Yellow
Write-Host "  - icon-16.png"
Write-Host "  - icon-32.png"
Write-Host "  - icon-48.png"
Write-Host "  - icon-128.png"
Write-Host ""
Write-Host "现在可以重新加载扩展了！" -ForegroundColor Cyan
Write-Host ""
Write-Host "注意: 这些是临时占位图标（蓝色方块）" -ForegroundColor Yellow
Write-Host "建议稍后使用 scripts/generate-placeholder-icons.html 生成更好看的图标" -ForegroundColor Yellow
