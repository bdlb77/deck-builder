import ReactDOM from "react-dom/client";
import App from "./App";


console.log('👋 This message is being logged by "renderer.js", included via webpack');
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

import { createGlobalStyle } from 'styled-components';
import { AppAPI } from "../common/interfaces";


const GlobalStyle = createGlobalStyle(({ theme }) => ({
  "html, body, #root": {
    height: "100%",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans- serif",
    margin: "auto",
    maxWidth: "38rem",
    padding: "2rem",
  },

}));

declare global {
  interface Window {
    myAppAPI: AppAPI;

  }
}
root.render (
  <>
  <GlobalStyle />
  <App />
  </>
)
