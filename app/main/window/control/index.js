const { BrowserWindow } = require('electron')
const path = require('path')
let win
function createControlWin() {

  win = new BrowserWindow({
    width: 600,
    height: 300,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  win.loadFile(path.resolve(__dirname, '../../../renderer/pages/control/index.html'))
}

module.exports = { createControlWin }