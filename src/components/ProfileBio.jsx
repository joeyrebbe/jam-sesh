import React from 'react'
import { Link } from 'react-router-dom'

const ProfileBio = () => {
  return (
    <div className="profile flex-col">
      <div className="profile-message">
        <h1>Tell Us About Your Journey</h1>
        <p>Travelling is so much fun, tell your friends all about it!</p>
      </div>
      <div className="profile-action">
        <Link to="/register">Get Started</Link>
      </div>
    </div>
  )
}

export default ProfileBio