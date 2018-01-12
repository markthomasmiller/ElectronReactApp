const electron = require('electron')
const path = require('path')
const { app, BrowserWindow } = electron

// Let Electron reload itself when Webpack watches changes
if (process.env.NODE_ENV === 'development') {
	require('electron-reload')(__dirname)
}

// Allows app to avoid garbage collection
let mainWindow

function createAppInstance () {
	// Define window properties
	mainWindow = new BrowserWindow({
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
	mainWindow.loadURL(`file://${__dirname}/app/index.html`)
	
	// Create menu
	require('./app/menu/menu.js')
	
	// Show window when ready
	mainWindow.once('ready-to-show', () => {
     mainWindow.show()
 	})
	
	// Dereference the window object on close
	mainWindow.on('closed', function () {
    mainWindow = null
  })
}

// Creates a new window when activated with no other windows open (Mac)
app.on('activate', () => {
  if (mainWindow === null) {
    createAppInstance()
  }
})

app.on('ready', createAppInstance)