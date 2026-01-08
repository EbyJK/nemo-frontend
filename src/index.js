// const { app, BrowserWindow, screen } = require('electron')
// const { ipcMain } = require('electron')
const path = require('path')
const { app, BrowserWindow, screen, ipcMain, Tray, Menu,globalShortcut} = require('electron')
let win
function toggleWindow() {
  if (!win) return

  if (win.isVisible()) {
    win.hide()
  } else {
    win.show()
    win.focus()
  }
}
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
  // ----- SYSTEM TRAY -----
const tray = new Tray(path.join(__dirname, '../assets/icon.ico'))

const trayMenu = Menu.buildFromTemplate([
  {
    label: 'Show Nemo',
    click: () => {
      win.show()
      win.focus()
    }
  },
  {
    label: 'Quit',
    click: () => {
      app.quit()
    }
  }
])

tray.setToolTip('NEMO – Mail Assistant')
tray.setContextMenu(trayMenu)

tray.on('click', () => {
  win.show()
  win.focus()
})

// GLOBAL SHORTCUT: Ctrl + Shift + N
const registered = globalShortcut.register('Control+Shift+N', () => {
  toggleWindow()
})

if (!registered) {
  console.log('Global shortcut registration failed')
}




})

ipcMain.on('window:minimize', () => {
  // mainWindow.minimize()
   if (win) win.minimize()
})

ipcMain.on('window:close', () => {
  // mainWindow.close()
  if (win) win.hide()
})
app.on('window-all-closed', (e) => {
  e.preventDefault()
})

ipcMain.on('window:toggle-always-on-top', () => {
  if (!win) return

  const isOnTop = win.isAlwaysOnTop()
  win.setAlwaysOnTop(!isOnTop)
})

app.on('will-quit', () => {
  globalShortcut.unregisterAll()
})
