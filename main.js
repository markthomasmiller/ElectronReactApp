const electron = require('electron')
const path = require('path')
const { app, BrowserWindow } = electron
const isDev = require('electron-is-dev')

// Let Electron reload itself when Webpack watches changes
isDev && require('electron-reload')(__dirname)

// Allows app to avoid garbage collection
global.mainWindow

function createAppInstance () {
	// Define window properties
	global.mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		title: "ElectronReactApp",
		titleBarStyle: 'hiddenInset',
		backgroundColor: '#000000',
		icon: path.join(__dirname, 'app/src/assets/icons/png/64x64.png'),
		show: false,
		minHeight: 300,
  	minWidth: 300
	})
	
	// Load window contents
	global.mainWindow.loadURL(`file://${__dirname}/app/index.html`)
	
	// Create menu
	require('./app/menu/menu.js')
	
	// Show window when ready
	global.mainWindow.once('ready-to-show', () => {
     global.mainWindow.show()
 	})
	
	// Dereference the window object on close
	global.mainWindow.on('closed', function () {
    global.mainWindow = null
  })
	
}

// Creates a new window when activated with no other windows open (Mac)
app.on('activate', () => {
  if (global.mainWindow === null) {
    createAppInstance()
  }
})

app.on('ready', createAppInstance)