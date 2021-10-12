import React, { FC } from "react"
import Drag from "./components/Drag"
import Allproject from "./pages/Allproject"
import { HashRouter as Router, Switch, Route } from "react-router-dom"

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"}>
          <Allproject />
        </Route>
        <Route path={"/:projectName/:projectId"}>
          <Drag />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
