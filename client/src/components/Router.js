import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import CreatePost from '../pages/CreatePost'
import Discover from '../pages/Discover'
import Home from '../pages/Home'
import LandingPage from '../pages/LandingPage'
import Profile from '../pages/Profile'
import SignIn from '../pages/SignIn'
import Signup from '../pages/Signup'
import UpdatePost from '../pages/UpdatePost'
import ViewPost from '../pages/ViewPost'
import { __CheckSession } from '../services/UserServices'
import Layout from './Layout'
import ProtectedRoute from './ProtectedRoute'

class Router extends Component {
  constructor() {
    super()
    this.state = {
      authenticated: false,
      currentUser: null,
      pageLoading: true
    }
  }

  componentDidMount() {
    //invoke verifyTokenValid request
    this.verifyTokenValid()
    this.setState({ pageLoading: false })
  }

  verifyTokenValid = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const session = await __CheckSession()
        console.log('session', session)
        this.setState(
          {
            currentUser: session.user,
            authenticated: true
          },
          () => this.props.history.push('/profile')
        )
      } catch (error) {
        this.setState({ currentUser: null, authenticated: false })
        localStorage.clear()
      }
      // Send Api request to verify token
      // if token valid should set a user to state
    }
  }

  toggleAuthenticated = (value, user, done) => {
    this.setState({ authenticated: value, currentUser: user }, () => done())
  }

  render() {
    return (
      <main>
        {this.state.pageLoading ? (
          <h3>Loading...</h3>
        ) : (
          <Layout
          currentUser={this.state.currentUser}
          authenticated={this.state.authenticated}
        >
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <LandingPage>
                  <Home />
                </LandingPage>
              )}
            />
            <Route
              path="/register"
              component={(props) => (
                <LandingPage>
                  <Signup {...props} />
                </LandingPage>
              )}
            />
            <Route
              path="/login"
              component={(props) => (
                <LandingPage>
                  <SignIn
                    toggleAuthenticated={this.toggleAuthenticated}
                    {...props}
                  />
                </LandingPage>
              )}
            />
            <Route
              path="/discover"
              component={(props) => (
                
                  <Discover {...props} />
              )}
            />
            <Route
              path="/posts/:post_id"
              component={(props) => (
                
                  <ViewPost {...props} />
              )}
            />
            <ProtectedRoute
              authenticated={this.state.authenticated}
              path="/profile"
              component={(props) => (
                
                  <Profile {...props} currentUser={this.state.currentUser} />
              )}
            />
            <ProtectedRoute
              authenticated={this.state.authenticated}
              path="/upload"
              component={(props) => (
                
                  <CreatePost {...props} currentUser={this.state.currentUser} />
              )}
            />
            <ProtectedRoute
              authenticated={this.state.authenticated}
              path="/edit/:post_id"
              component={(props) => (
                
                  <UpdatePost {...props} currentUser={this.state.currentUser} />
              )}
            />
          </Switch>
        </Layout>
        )}
      </main>
    )
  }
}

export default withRouter(Router)
