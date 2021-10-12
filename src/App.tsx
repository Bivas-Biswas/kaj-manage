import React, { FC } from "react"
import TaskPageDrag from "./pages/TaskPageDrag"
import Project from "./pages/project"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/Header"

const App: FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={"/"}>
          <Project />
        </Route>
        <Route path={"/:projectName/:projectId"}>
          <TaskPageDrag />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
