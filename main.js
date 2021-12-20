const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 280,
    // minWidth: 300,
    // maxWidth: 500,
    // minHeight: 155,
    // maxHeight: 280,
    fullscreenable: false,
    vibrancy: 'under-window',  // 'light', 'medium-light' etc
    visualEffectState: "active",
    titleBarStyle: 'hidden',
    transparent:   true,
    hasShadow:     true,
    resizable: false,
    webPreferences: {
      preload: __dirname + '/src/preload.js'
    }
  })
  mainWindow.setAlwaysOnTop('true');
  // and load the index.html of the app.
  mainWindow.loadFile('src/index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  console.log(__dirname + 'src/preload.js')
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

ipcMain.on('resize-window',(event,arg) => {
  BrowserWindow.getAllWindows()[0].setSize(300,155,true);
})

ipcMain.on('restore-window',(event,arg) => {
  BrowserWindow.getAllWindows()[0].setSize(400,280,true);
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
