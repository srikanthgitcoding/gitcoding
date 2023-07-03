import React from 'react'
import Header from './containers/Header'
import ProductListing from './containers/ProductListing'
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'


function APP() {
  return (
    <div>APP
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route exact path="/product/:ProductId">
            <ProductListing />
          </Route>
          <Route>
            <div>
              404 not found!
            </div>
            </Route>
        </Switch>
      </Router>

    </div>
  )
}

export default APP