const {ipcRenderer} = require('electron')

// 给按钮注册时间监听
document.querySelector('#add-music-btn').addEventListener('click',() => {
  // 使用IPC通知main.js主进程
  ipcRenderer.send('add-music-window')
})