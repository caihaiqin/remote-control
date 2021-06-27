const { ipcMain } = require('electron')
const { sendMain } = require('./window/main')
const { createControlWin } = require('./window/control')

module.exports = function handleIPC() {
  ipcMain.handle('login', async (event, ...args) => {
    const code = Math.floor(Math.random() * (999999 - 100000)) + 100000

    return code
  })
  ipcMain.on('control', async (e, remoteCode) => {
    console.log('remotecode', remoteCode)
    sendMain('control-state-change', remoteCode, 1)
    createControlWin()

  })
}
