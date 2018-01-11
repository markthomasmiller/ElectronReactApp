// Basic init
const electron = require('electron')
var path = require('path')
const { app, BrowserWindow } = electron

// Let electron reload by itself when webpack watches changes in ./app/
if (process.env.NODE_ENV === 'development') {
	require('electron-reload')(__dirname)
}

// To avoid being garbage collected
let mainWindow

app.on('ready', () => {
	let mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		title: "ElectronReactApp",
		titleBarStyle: 'hiddenInset',
		backgroundColor: '#000000',
		icon: path.join(__dirname, 'app/src/assets/icons/png/64x64.png'),
		show: false
	});
	
	mainWindow.once('ready-to-show', () => {
     mainWindow.show()
 })
	
	mainWindow.setTitle(require('./package.json').name);

	mainWindow.loadURL(`file://${__dirname}/app/index.html`)
})
