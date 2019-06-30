const {ipcRenderer} = require('electron')
const {$} = require('./helper')

// 给按钮注册时间监听
$('#select-music').addEventListener('click',() => {
  // 使用IPC通知main.js主进程
  console.log('-----');
  
  ipcRenderer.send('open-music-file')
})