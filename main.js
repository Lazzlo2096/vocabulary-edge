const {app, BrowserWindow} = require('electron')

const fs = require('fs');

/** 
  https://www.electronjs.org/docs/api/browser-window
  https://www.electronjs.org/docs/api/app#%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B5-ready


  https://stackoverflow.com/questions/50905886/i-am-trying-to-turn-my-electron-app-to-windows-portable

  https://stackoverflow.com/questions/35995273/how-to-run-html-file-using-node-js
*/

function createWindow () {

    const mainWindow = new BrowserWindow()

    //mainWindow.loadURL('https://github.com')
    mainWindow.loadFile('index.html')
}

app.on('ready', createWindow)

/// https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_readfile_file_options_callback
fs.readFile('test.txt', (err, data)=>{ // 2 , 'utf8'
    console.log(data);
})

/// другие четние файлов
/// https://www.html5rocks.com/ru/tutorials/file/dndfiles/
