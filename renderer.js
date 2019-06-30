// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const { ipcRenderer } = require('electron')
// 测试node.js 的 api
// alert(process.versions.node)

// 测试DOM api
window.addEventListener('DOMContentLoaded', () => {
  //  alert('DOMContentLoaded')
  // 
  
  /** 
   * 通过icp 向主进程发送消息
   * @name {String} 发送事件的名称
   * @content {*} 发送的消息内容,可以是任意类型
   * 
  */
  ipcRenderer.send('message', 'test ipc message')
  
  // 监听主进程返回的事件响应
  ipcRenderer.on('reply',(event, arg) => {
    // 使用DOM的api渲染内容
    document.querySelector('#message').innerHTML=arg
  })
})