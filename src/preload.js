const { contextBridge, BrowserWindow,ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('ipcSend',ipcRenderer.send);