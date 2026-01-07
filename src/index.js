const { app, BrowserWindow, screen } = require('electron')
const { ipcMain } = require('electron')
const path = require('path')
let win
app.setAppUserModelId('com.nemo.mailsidebar')

app.whenReady().then(() => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize
const path = require('path')
  win = new BrowserWindow({
    width: 400,               // Sidebar width
    height: height,           // Full screen height
    x: width - 400,           // Right side of screen
    y: 0,
    frame: false,             // No title bar
    alwaysOnTop: true,
    resizable: false,
    icon: path.join(__dirname, '../assets/icon.ico'),
    skipTaskbar: false,       // Allows pinning
    webPreferences: {
      // preload: __dirname + '/preload.js'
       preload: path.join(__dirname, 'preload.js')
    }
  })

  // win.loadFile(__dirname + '/index.html')
  win.loadURL('http://localhost:3000')

})

ipcMain.on('window:minimize', () => {
  // mainWindow.minimize()
   if (win) win.minimize()
})

ipcMain.on('window:close', () => {
  // mainWindow.close()
  if (win) win.close()
})
