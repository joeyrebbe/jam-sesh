import React from 'react'
import { Redirect, Route } from 'react-router-dom'
// Integrate this with auth
export default function ProtectedRoute ({ authenticated, children, component: Component, ...rest }) {
  return authenticated === true ? (
    <Route {...rest} component={Component}>
      {console.log(authenticated)}
    </Route>
  ) : (
    <Redirect to="/" />
  )
}
