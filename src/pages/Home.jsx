import React from 'react'
import {Link} from 'react-router-dom'
import './Home.scss'

function HomePage () {
  return (<div>
    <header>
      <nav>
        <Link to="/">Anonymous</Link>

        <div className="links">
          <Link to="/login">Login</Link>
          <Link to="/register">Sign up</Link>
        </div>
      </nav>
      <div className="hero">
        <h1>Receive anonymous messages online!</h1>
        <p>Share you link and start getting anonymous messages from friends & family, colleagues, co-workers, well wishers, haters...anyone!</p>
        <Link to="/register" className="start">Get started</Link>
      </div>
    </header>

    <section className="why">
      <h2>Why anonymous</h2>
      <p>It's amazing and awesome, below are features of anonymous</p>
    </section>
  </div>)
}

export default HomePage
