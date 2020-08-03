import React from 'react'
import './index.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import Home from './pages/Home'
import VideoRegister from './pages/register/Video'
import CategoryRegister from './pages/register/Category'
import Page404 from './components/Page404'

function App() {
  const options = {
    position: positions.TOP_CENTER,
    timeout: 5000,
    offset: '30px',
    transition: transitions.SCALE,
  }

  return (
    <AlertProvider template={AlertTemplate} {...options}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/register/video" component={VideoRegister} exact />
          <Route path="/register/category" component={CategoryRegister} exact />
          <Route component={Page404} />
        </Switch>
      </BrowserRouter>
    </AlertProvider>
  )
}

export default App
