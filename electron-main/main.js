const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: { nodeIntegration: false, contextIsolation: true },
    icon: path.join(__dirname, "Icon_sh.ico"),
  });


  Menu.setApplicationMenu(null)
  const dev = process.env.NODE_ENV !== "production";


  if (dev) {
    win.loadURL("http://localhost:5173"); // Load Vite dev server
  } else {
    win.loadFile(path.join(__dirname, "../renderer/dist/index.html"));
  }
}

app.whenReady().then(createWindow);
