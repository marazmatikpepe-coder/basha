const { app, BrowserWindow, Menu } = require('electron');
function createWindow() {
  const w = new BrowserWindow({ width: 1280, height: 720, backgroundColor: '#040507', autoHideMenuBar: true, title: 'Башня помнит' });
  Menu.setApplicationMenu(null);
  w.loadFile('index.html');
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
