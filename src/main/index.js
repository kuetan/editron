import {app} "electron";
import createMainWindow from "createMainwindow";

let mainWindow = null;

app.on("ready",()=> {
    mainWindow = createMainWindow();
});

app.on("window-all-closed",()=>{
    if(process.platform !== "darwin"){
	app.quit();
    }
});

app.on("activate",(_e,hasVisibleWindows)=>{
       if(!hasVisibleWindows){
	   mainWindow = createMainWindow();
       }
});




