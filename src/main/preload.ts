// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

import { contextBridge, ipcRenderer } from "electron";
import { Card } from "../common/interfaces";


const appAPI: any = {
  ping: () => ipcRenderer.invoke("ping"),
  getCards: (): Promise<Card[]> => ipcRenderer.invoke("getCards")

}


contextBridge.exposeInMainWorld("myAppAPI", appAPI);
