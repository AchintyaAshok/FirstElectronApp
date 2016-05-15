const electron = require('electron');
const app = electron.app;

// Let's load the browser window plugin
const BrowserWindow = electron.BrowserWindow;

// When electron is ready, we do this
app.on('ready', function(){
  var mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });
});
