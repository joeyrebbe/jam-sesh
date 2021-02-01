import React from 'react'

export default function Card ({ children, ...rest }) {
  return (
    <div className="card" {...rest}>
      {children}
    </div>
  )
}
