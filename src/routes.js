import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import Product from './pages/Product'
import EditProduct from './pages/Product/editProd'
import EditClient from './pages/Client/editClient'
import Client from './pages/Client'
import Home from './pages/Home'

export default function Routes(){
  return(
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home}/>
      <Route path='/product' exact component={Product}/>
      <Route path='/edit-product' exact component={EditProduct}/>
      <Route path='/edit-client' exact component={EditClient}/>
      <Route path='/client' exact component={Client}/>
    </Switch>
    </BrowserRouter>
  )
}

