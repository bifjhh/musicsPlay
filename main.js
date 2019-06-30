const {
  app,
  BrowserWindow,
  ipcMain,
  dialog
} = require('electron')

// 创建一个类,用来简化创建窗口
class AppWindow extends BrowserWindow {
  constructor(config, fileLocation) {
    // 默认的窗口配置
    const basiConfig = {
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    }
    // 将基础配置和传递来的配置合并
    const finalConfig = {
      ...basiConfig,
      ...config
    }
    // 使用父类构造函数
    super(finalConfig)
    // 怪哉loadFile
    this.loadFile(fileLocation)

    // 解决窗口闪烁
    this.once('ready-to-show', () => {
      this.show()
    })
  }
}
// reday事件,是代表electron已经完全加载,准备创建BrowseWindow的时候
app.on('ready', () => {
  // 创建一个主窗口
  const mainWindow = new AppWindow({}, './renderer/index.html')

  /**
   * 在主进程监听响应事件
   * @name {String} 方法名称
   * @content {*} 传递过来的数据
   */
  ipcMain.on('add-music-window', () => {
    // console.log('hello from index page');
    // 接收到数据之后创建新的窗口
    const addWindow = new AppWindow({
      width: 500,
      height: 400,
      parent: mainWindow
    }, './renderer/add.html')
    // event.sender.send('reply', 'hell world!')
  })
  ipcMain.on('open-music-file', () => {
    dialog.showOpenDialog({
      properties: ['openFile', 'multiSelections'],
      filters: [{
        name: 'Music',
        extensions: ['mp3']
      }]
    }, files => {
      console.log(files)
    })
  })
})