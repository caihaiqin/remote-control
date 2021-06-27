const { BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
let win
function createMainWin() {

  win = new BrowserWindow({
    width: 600,
    height: 300,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  if (isDev) {
    win.loadURL('http://localhost:3000')
  } else {
    //加载生产环境页面
    win.loadFile(path.resolve(__dirname, '../renderer/pages/main/index.html'))
  }
}
function sendMain(chanel, ...args) {
  win.webContents.send(chanel, ...args)
}
module.exports = { createMainWin, sendMain }