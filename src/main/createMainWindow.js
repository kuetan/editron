import {BrowserWindow} from "electron";

class Mainwindow {
    constructor(){
	this.window = new BrowserWindow({ width:800,height:700});
	this.window.loadURL('file://' + __dirname + '/../../index.html');
	this.window.on("closed",()=>{
	    this.window = nul;
	});
    }
}


function createMainWindow(){
    return new MainWindow();
}

export default createMainWindow;
