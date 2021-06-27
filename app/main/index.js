const { app, BrowserWindow } = require('electron')
const handleIPC = require('./ipc')
const { createMainWin } = require('./window/main')
const path = require('path')


app.on('ready', () => {
  createMainWin()
  handleIPC()


})


