import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero () {
  return (
    <div className="hero flex-col">
      <div className="hero-message">
        <h1>Rock Out.</h1>
        <p>Check who's looking to jam in your area!</p>
      </div>
      <div className="hero-action">
        <Link to="/register">Start Jamming</Link>
      </div>
    </div>
  )
}
