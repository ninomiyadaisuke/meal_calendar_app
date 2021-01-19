import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Calendar, UserList, BuyList } from "./template"
import { Header } from "./components/Header"

const AppliRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={"(/)?"} component={Calendar} /> 
        <Route exact path={"(/user)"} component={UserList} />
        <Route exact path={"/buylist"} component={BuyList} />        
      </Switch>
    </Router>
  )
}

export default AppliRouter
