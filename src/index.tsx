import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./assets/css/main.css"
import "./styles/reset.css"
import "tippy.js/dist/tippy.css"
import UseTaskGlobalContext from "./context"

ReactDOM.render(
  <React.StrictMode>
    <UseTaskGlobalContext>
      <App />
    </UseTaskGlobalContext>
  </React.StrictMode>,
  document.getElementById("root")
)
