import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Product from './pages/Product'
import Client from './pages/Client'
import Home from './pages/Home'

export default function Routes(){
  return(
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/product' component={Product}/>
      <Route path='/client' component={Client}/>
    </Switch>
    </BrowserRouter>
  )
}

