import { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';
import Home from './assets/home.png';
import I01 from './assets/i1.png';
import I011 from './assets/i8.png';
import I2 from './assets/i2.png';
import I3 from './assets/i3.png';
import I4 from './assets/i4.png';
import I5 from './assets/i5.png';
import I6 from './assets/i6.png';
import I7 from './assets/i7.png';

function App() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Category</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="search-bar">
            <input type="text" placeholder="Search Something Here..." />
            <button className="search-button">Join the Community</button>
          </div>
          <div className="currency-dropdown">
            <span className="currency">VND ^</span>
            <i className="fa fa-caret-down"></i>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section first */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="text-content">
              <h1>One More Friend</h1><h3>Thousands More Fun!</h3>
              <p>
                Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun.
                We have 200+ different pets that can meet your needs!
              </p>
              <div className="button-group">
                <button className="view-intro-button">View Intro</button>
                <button className="explore-button">Explore Now</button>
              </div>

            </div>

          </div>
          <div className="hero-image">
            <img src={Home} alt="Person holding a dog" />
          </div>
        </section>
        <section className="pets-section">
          <div className="section-header">
            <h3>What's new?</h3>
            <h2>Take A Look At Some Of Our Pets</h2>
          </div>

          {/* View More Button */}
          <div className="view-more-container">
            <a href="#" className="view-more">View more ➝</a>
          </div>

          {/* Pets Gallery */}
          <div className="pets-gallery">
            <div className="pet-card">
              <img src={I011} alt="Pomeranian White" />
              <h4>MO231 - Pomeranian White</h4>
              <p>Gender: Male • Age: 02 months</p>
              <p className="price">6.900.000 VND</p>
            </div>

            <div className="pet-card">
              <img src={I2} alt="Poodle Tiny Yellow" />
              <h4>MO502 - Poodle Tiny Yellow</h4>
              <p>Gender: Female • Age: 02 months</p>
              <p className="price">3.900.000 VND</p>
            </div>

            <div className="pet-card">
              <img src={I3} alt="Poodle Tiny Sepia" />
              <h4>MO102 - Poodle Tiny Sepia</h4>
              <p>Gender: Male • Age: 02 months</p>
              <p className="price">4.000.000 VND</p>
            </div>

            <div className="pet-card">
              <img src={I01} alt="Alaskan Malamute Grey" />
              <h4>MO512 - Alaskan Malamute Grey</h4>
              <p>Gender: Male • Age: 02 months</p>
              <p className="price">8.900.000 VND</p>
            </div>


            <div className="pet-card">
              <img src={I4} alt="Pembroke Corgi Cream" />
              <h4>MO231 - Pembroke Corgi Cream</h4>
              <p>Gender: Male • Age: 02 months</p>
              <p className="price">7.900.000 VND</p>
            </div>

            <div className="pet-card">
              <img src={I5} alt="Pembroke Corgi Tricolor" />
              <h4>MO502 - Pembroke Corgi Tricolor</h4>
              <p>Gender: Female • Age: 02 months</p>
              <p className="price">9.000.000 VND</p>
            </div>

            <div className="pet-card">
              <img src={I6} alt="Pomeranian White" />
              <h4>MO231 - Pomeranian White</h4>
              <p>Gender: Male • Age: 02 months</p>
              <p className="price">6.500.000 VND</p>
            </div>

            <div className="pet-card">
              <img src={I7} alt="Poodle Tiny Dairy Cow" />
              <h4>MO512 - Poodle Tiny Dairy Cow</h4>
              <p>Gender: Male • Age: 02 months</p>
              <p className="price">5.000.000 VND</p>
            </div>
          </div>
        </section>

      </main>

      <footer>
        <p>&copy; 2024 My Application. All rights reserved.</p>
        <nav className="footer-nav">
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default App;
