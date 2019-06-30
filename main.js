
const { app, BrowserWindow, ipcMain } = require('electron')
// reday事件,是代表electron已经完全加载,准备创建BrowseWindow的时候
app.on('ready', () => {
  // 创建一个主窗口
  const mainWindow = new BrowserWindow({
    width:800,
    height:600,
    webPreferences:{
      nodeIntegration:true
    }
  })
  mainWindow.loadFile('./renderer/index.html')

  /**
   * 在主进程监听响应事件
   * @name {String} 方法名称
   * @content {*} 传递过来的数据
   */
  ipcMain.on('add-music-window', () => {
    // console.log('hello from index page');
    // 接收到数据之后创建新的窗口
    const addWindow = new BrowserWindow({
      width:500,
      height:400,
      webPreferences:{
        nodeIntegration:true
      },
      parent:mainWindow
    })
    addWindow.loadFile('./renderer/add.html')
    // event.sender.send('reply', 'hell world!')
  })
})