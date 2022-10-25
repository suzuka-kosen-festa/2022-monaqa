import React from 'react'

import { Switch, Route, Redirect } from 'wouter'
import { Login } from './components/pages/Login'
import { Search } from './components/pages/Search'
import { QR } from './components/pages/QR'

const Routers = () => (
  <Switch>
    <Route path="/" component={QR} />
    <Route path="/login" component={Login} />
    <Route path="/search" component={Search} />
    <Route>
      <Redirect to="/" />
    </Route>
  </Switch>
)
export default Routers
