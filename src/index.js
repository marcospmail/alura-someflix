import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import VideoRegister from './pages/register/Video'
import CategoryRegister from './pages/register/Category'
import Page404 from './components/Page404'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/register/video" component={VideoRegister} exact />
      <Route path="/register/category" component={CategoryRegister} exact />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
)
