import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Calendar, UserList, BuyList } from "./template"

const AppliRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={"(/)?"} component={Calendar} /> 
        <Route exact path={"(/user)"} component={UserList} />
        <Route exact path={"/buylist"} component={BuyList} />        
      </Switch>
    </Router>
  )
}

export default AppliRouter
