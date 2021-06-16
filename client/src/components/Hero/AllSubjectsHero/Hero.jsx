import React from 'react'
import hero from "../../../assets/icon/books.svg"
import "./Hero.css"
function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>All Subjects</h1>
          <h4>
            In this page you find resources to all of of our subjects, if you coudnt find what you are looking for, please click on add new subject button
          </h4>
        </div>
        <div className="hero-img">
          <img src={hero} id="hero-img" alt="board" />
        </div>
      </div>
    </section>
  )
}

export default Hero
