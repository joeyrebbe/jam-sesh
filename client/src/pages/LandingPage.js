import React from 'react'
import GuitarImg from '../assets/guitar.png'
import Hero from '../components/Hero'
import Nav from '../components/Nav'

export default function LandingPage ({ children }) {
  return (
    <div style={{background: "linear-gradient(black, white)", color: "white"}}>
      <section style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap", marginBottom: "20vh"}}>
        <div style={{margin: "0 auto", width: "600px"}}>
          <Hero />
          {children}
        </div>
        <div style={{width: "600px", margin: "0 auto"}}>
          <img src="http://freepngimages.com/wp-content/uploads/2016/11/dean-sunburst-guitar.png" alt="guitar" 
            style={{width: "100%", margin: "20vh auto"}}
          />
        </div>
      </section>
    </div>
  )
}
