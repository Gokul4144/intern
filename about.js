import React, { useState } from 'react';

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleProductDropdown = () => {
    setProductDropdownOpen(!productDropdownOpen);
  };

  return (
    <>
      <div className="header">
        <div className="navbar">
          <div className="logo"><a href="/">logo</a></div>
          <nav>
            <ul style={{ maxHeight: menuOpen ? '200px' : '0px' }} className="menu-items">
              <li><a href="/">Home</a></li>
              <li onClick={toggleProductDropdown}>
                <a className="active">Products <i className="fas fa-caret-down"></i></a>
                {productDropdownOpen && (
                  <ul className="inner-items">
                    <li><a href="/moisterizers">Moisterizers</a></li>
                    <li><a href="/serums">Serums</a></li>
                    <li><a href="/cleansers">Cleansers</a></li>
                    <li><a href="/sunscreens">Sunscreens</a></li>
                  </ul>
                )}
              </li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/account">Account</a></li>
            </ul>
          </nav>
          <div className="right-icons">
            <div className="search-bar">
              <input type="text" placeholder="Search..." />
              <button><i className="fas fa-search"></i></button>
            </div>
            <a href="/card"><i className="fas fa-shopping-cart"></i></a>
            <a href="/account"><i className="fas fa-user"></i></a>
          </div>
        </div>
      </div>

      <div className="account-page">
        <section id="about" className="page-section">
          <div className="text-center">
            <h2 className="section-heading">About Us</h2>
            <p className="section-subheading">Some information about our shop.</p>
          </div>
          <div className="timeline">
            <div className="timeline-block">
              <h4>1992–2002</h4>
              <h5>Values And Beliefs</h5>
              <p>We treat the customer as our highest priority...</p>
            </div>
            <div className="timeline-block">
              <h4>2002–2012</h4>
              <h5>Build A Connection</h5>
              <p>We focused on long-term relationships...</p>
            </div>
            <div className="timeline-block">
              <h4>2012–2022</h4>
              <h5>Certifications, Awards</h5>
              <p>We were proud to receive many awards...</p>
            </div>
            <div className="timeline-block">
              <h4>2022–</h4>
              <h5>Be Interesting!</h5>
              <p>We aim to stay modern and exciting...</p>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer">
        <div className="footer-row">
          <div className="footer-col">
            <h4>Get Help</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <p className="copyright">
          © 2025 myshop.com — All rights reserved
        </p>
      </footer>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Arial', sans-serif;
        }
        .header {
          background: #f8f8f8;
          padding: 10px 20px;
        }
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        nav ul {
          list-style: none;
          overflow: hidden;
          transition: max-height 0.3s;
        }
        nav li {
          display: inline-block;
          margin: 0 10px;
        }
        nav a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
        }
        .inner-items {
          display: block;
          background: #eee;
          padding: 10px;
        }
        .right-icons {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .search-bar input {
          padding: 5px;
        }
        .account-page {
          padding: 30px 20px;
        }
        .section-heading {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        .section-subheading {
          color: #555;
          margin-bottom: 20px;
        }
        .timeline {
          margin-top: 30px;
        }
        .timeline-block {
          margin-bottom: 25px;
          border-left: 4px solid #aaa;
          padding-left: 15px;
        }
        .timeline-block h4 {
          font-size: 20px;
          color: #222;
        }
        .timeline-block h5 {
          font-size: 16px;
          color: #444;
        }
        .timeline-block p {
          font-size: 14px;
          color: #666;
        }
        .footer {
          background: #222;
          color: #eee;
          padding: 20px;
          margin-top: 40px;
        }
        .footer-row {
          display: flex;
          justify-content: space-around;
        }
        .footer-col h4 {
          margin-bottom: 10px;
        }
        .footer-col ul {
          list-style: none;
          padding-left: 0;
        }
        .footer-col a {
          color: #aaa;
          text-decoration: none;
          font-size: 14px;
        }
        .footer-col a:hover {
          text-decoration: underline;
        }
        .copyright {
          text-align: center;
          margin-top: 20px;
          font-size: 13px;
          color: #888;
        }
      `}</style>
    </>
  );
}
