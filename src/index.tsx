import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./styles/main.css"
import "./styles/reset.css"
import UseTaskGlobalContext from "./context"

ReactDOM.render(
  <React.StrictMode>
    <UseTaskGlobalContext>
      <App />
    </UseTaskGlobalContext>
  </React.StrictMode>,
  document.getElementById("root")
)
