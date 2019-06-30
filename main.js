
const { app, BrowserWindow, ipcMain } = require('electron')
// reday事件,是代表electron已经完全加载,准备创建BrowseWindow的时候
app.on('ready', () => {
  console.log('test');
  // 创建一个主窗口
  const mainWindow = new BrowserWindow({
    width:800,
    height:600,
    webPreferences:{
      nodeIntegration:true
    }
  })
  mainWindow.loadFile('index.html')

  // 创建第二个窗口
  /* const secondWindow = new BrowserWindow({
    width:500,
    height:300,
    webPreferences:{
      nodeIntegration:true
    },
    parent:mainWindow
  }) */
  // secondWindow.loadFile('second.html')
  /**
   * 在主进程监听响应事件
   * @name {String} 方法名称
   * @content {*} 传递过来的数据
   */
  ipcMain.on('message', (event, arg) => {
    console.log(arg);
    event.sender.send('reply', 'hell world!')
  })
})