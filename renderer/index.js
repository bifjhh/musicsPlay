const {ipcRenderer} = require('electron')
const {$} = require('./helper')

// 给按钮注册时间监听
$('#add-music-btn').addEventListener('click',() => {
  // 使用IPC通知main.js主进程
  ipcRenderer.send('add-music-window')
})