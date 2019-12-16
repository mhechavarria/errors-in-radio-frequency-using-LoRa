const { app, BrowserWindow } = require('electron');
constpath = require('path');
const url = require('url');

// Init win
let win;

function createWindow() {
    // Create browser windows
    win = new BrowserWindow({ width: 800, height: 600, icon: __dirname + '/img/appicon.png' });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Open devtools
    win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    });
}

// Run create function
app.on('ready', createWindow);

//Quit when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});