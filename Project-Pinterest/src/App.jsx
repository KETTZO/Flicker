import { useState } from 'react'
import Login from './Login/log'
import Register from './Login/Register'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './App.css'


function App() {

  return (
    <BrowserRouter>
      <header>
        <Link to="/">
          Login
        </Link>
        <Link to="/register">
          Registrar
        </Link>
      </header>

      <Switch>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
