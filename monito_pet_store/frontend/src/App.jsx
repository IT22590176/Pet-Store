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
import Home_02 from './assets/Home_02.png';
import Home_03 from './assets/Home_03.png';
import p1 from './assets/p1.png';
import p2 from './assets/p2.png';
import p3 from './assets/p3.png';
import p4 from './assets/p4.png';
import p5 from './assets/p5.png';
import p6 from './assets/p6.png';
import p7 from './assets/p7.png';
import p8 from './assets/p8.png';

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
        <section className="section3">
          <div className="hero-content">
            <div className="text-contentt">
              <h1>One More Friend</h1> <h3>Thousands More Fun!</h3>
              <p>
                Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!
              </p>
              <div className="button-groupp">
                <button className="view-intro-button">
                  View Intro <i className="fa fa-play-circle"></i>
                </button>
                <button className="explore-button">Explore Now</button>
              </div>
            </div>
            <div className="hero-image1">
              <img src={Home_03} alt="Person holding a dog" />
            </div>
          </div>
        </section>
        <section className="products-section">
  <div className="section-header">
    <h3>Hard to choose right products for your pets?</h3>
    <h2>Our Products</h2>
  </div>

  <div className="view-more-container">
    <a href="#" className="view-more">View more ➝</a>
  </div>

  <div className="products-gallery">
    <div className="product-card">
      <img src={p1} alt="Reflex Plus Adult Cat Food" />
      <h4>Reflex Plus Adult Cat Food Salmon</h4>
      <p>Product: Dog Food • Size: 385gm</p>
      <p className="price">140.000 VND</p>
      <div className="product-tag">
        <span>🎁 Free Toy & Free Shaker</span>
      </div>
    </div>

    <div className="product-card">
      <img src={p2} alt="Reflex Plus Adult Cat Food" />
      <h4>Reflex Plus Adult Cat Food Salmon</h4>
      <p>Product: Cat Food • Size: 1.5kg</p>
      <p className="price">165.000 VND</p>
      <div className="product-tag">
        <span>🎁 Free Toy & Free Shaker</span>
      </div>
    </div>

    <div className="product-card">
      <img src={p3} alt="Cat Scratching Ball" />
      <h4>Cat Scratching Ball Toy Kitten</h4>
      <p>Product: Toy</p>
      <p className="price">1.100.000 VND</p>
      <div className="product-tag">
        <span>🍽 Free Cat Food</span>
      </div>
    </div>

    <div className="product-card">
      <img src={p4} alt="Cute Pet Cat Warm Nest" />
      <h4>Cute Pet Cat Warm Nest</h4>
      <p>Product: Toy</p>
      <p className="price">410.000 VND</p>
      <div className="product-tag">
        <span>🍽 Free Cat Food</span>
      </div>
    </div>

    <div className="product-card">
      <img src={p5} alt="NatureVet Dogs Omega-Gold" />
      <h4>NatureVet Dogs Omega-Gold</h4>
      <p>Product: Dog Food • Size: 385gm</p>
      <p className="price">350.000 VND</p>
      <div className="product-tag">
        <span>🎁 Free Toy & Free Shaker</span>
      </div>
    </div>

    <div className="product-card">
      <img src={p6} alt="Costumes Fashion Pet Cloth Cowboy Rider" />
      <h4>Costumes Fashion Pet Cloth Cowboy Rider</h4>
      <p>Product: Costume</p>
      <p className="price">500.000 VND</p>
      <div className="product-tag">
        <span>🎁 Free Toy & Free Shaker</span>
      </div>
    </div>

    <div className="product-card">
      <img src={p7} alt="Costumes Chicken Drumstick Headband" />
      <h4>Costumes Chicken Drumstick Headband</h4>
      <p>Product: Costume</p>
      <p className="price">400.000 VND</p>
      <div className="product-tag">
        <span>🍽 Free Cat Food</span>
      </div>
    </div>

    <div className="product-card">
      <img src={p8} alt="Plush Pet Toy" />
      <h4>Plush Pet Toy</h4>
      <p>Product: Toy</p>
      <p className="price">250.000 VND</p>
      <div className="product-tag">
        <span>🍽 Free Cat Food & Shaker</span>
      </div>
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
