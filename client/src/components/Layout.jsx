import React from 'react'
import Nav from './Nav'

export default function Layout({ children, authenticated, currentUser }) {
  
  return (
  <div>
    <Nav
      authenticated={authenticated}
      currentUser={currentUser}
      className="header-elevated"
    />
    {children}
  </div>
)
}

