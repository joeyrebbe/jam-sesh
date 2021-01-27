import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import SignupPage from '../SignupPage/SignupPage'
import LoginPage from '../LoginPage/LoginPage'
import userService from '../../utils/userService'
import Feed from '../Feed/Feed'
import ProfilePage from '../ProfilePage/ProfilePage'

function App() {


  const [user, setUser] = useState(userService.getUser())

  function handleSignupOrLogin(){
    setUser(userService.getUser())
  }


  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Feed />
        </Route>
        <Route exact path='/login'>
          <LoginPage />
        </Route>
        <Route exact path='/signup'>
          <SignupPage handleSignupOrLogin={handleSignupOrLogin}/>
        </Route>
        <Route path="/:username">
          <ProfilePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
