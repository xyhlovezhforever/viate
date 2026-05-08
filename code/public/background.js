// Background service worker for Viate Resume Builder

// 监听扩展图标点击事件
chrome.action.onClicked.addListener(() => {
  // 打开新标签页，占据整个页面
  chrome.tabs.create({
    url: chrome.runtime.getURL('index.html')
  })
})

// 监听扩展安装事件
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    console.log('Viate Resume Builder 扩展已安装')
    // 首次安装时自动打开
    chrome.tabs.create({
      url: chrome.runtime.getURL('index.html')
    })
  } else if (details.reason === 'update') {
    console.log('Viate Resume Builder 已更新到版本', chrome.runtime.getManifest().version)
  }
})
