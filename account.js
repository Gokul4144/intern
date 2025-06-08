import { useState } from "react";

export default function AccountPage() {
  // State to control menu toggle (mobile menu)
  const [menuOpen, setMenuOpen] = useState(false);

  // State to control dropdown Products submenu
  const [productsOpen, setProductsOpen] = useState(false);

  // State for login/register form toggle
  const [isLogin, setIsLogin] = useState(true);

  // Toggle handlers
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleProducts = () => setProductsOpen(!productsOpen);
  const showLogin = () => setIsLogin(true);
  const showRegister = () => setIsLogin(false);

  return (
    <>
      {/* Styles */}
      <style jsx>{`
        * {
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }
        /* Navbar */
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 0;
          background: #4caf50;
          color: white;
          position: relative;
        }
        .logo a {
          color: white;
          font-weight: 700;
          font-size: 24px;
          text-decoration: none;
        }
        nav ul {
          list-style: none;
          display: flex;
          margin: 0;
          padding: 0;
        }
        nav ul li {
          position: relative;
          margin-left: 25px;
        }
        nav ul li a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          cursor: pointer;
          user-select: none;
        }
        nav ul li a.active {
          font-weight: 700;
        }
        /* Dropdown */
        .dropdown ul {
          position: absolute;
          top: 28px;
          left: 0;
          background: #388e3c;
          padding: 10px 0;
          display: none;
          min-width: 150px;
          border-radius: 4px;
          z-index: 10;
          flex-direction: column;
        }
        .dropdown ul li {
          margin: 0;
          padding: 5px 15px;
        }
        .dropdown ul li a {
          color: white;
          font-weight: 400;
        }
        .dropdown.open ul {
          display: flex;
        }
        /* Shopping cart icon */
        .navbar a i.fa-shopping-cart {
          font-size: 20px;
          color: white;
          margin-left: 15px;
          cursor: pointer;
        }
        /* Menu icon for mobile */
        .menu-icon {
          display: none;
          width: 28px;
          height: 28px;
          cursor: pointer;
        }
        /* Account Page */
        .account-page {
          padding: 40px 20px;
          background: #f5f5f5;
          min-height: 70vh;
        }
        .form-container {
          background: white;
          padding: 30px;
          max-width: 400px;
          margin: 0 auto;
          border-radius: 6px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .form-btn {
          display: flex;
          justify-content: space-around;
          margin-bottom: 20px;
          position: relative;
          user-select: none;
        }
        .form-btn span {
          cursor: pointer;
          font-weight: 500;
          font-size: 18px;
          padding-bottom: 5px;
          color: #333;
        }
        .form-btn span:hover {
          color: #4caf50;
        }
        #Indicator {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100px;
          height: 3px;
          background-color: #4caf50;
          transition: transform 0.3s ease;
        }
        form {
          display: flex;
          flex-direction: column;
        }
        form input, form button {
          padding: 10px 15px;
          margin: 10px 0;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        form button {
          background-color: #4caf50;
          border: none;
          color: white;
          cursor: pointer;
          font-weight: 600;
          transition: background-color 0.3s ease;
        }
        form button:hover {
          background-color: #388e3c;
        }
        form a {
          text-align: right;
          font-size: 14px;
          color: #4caf50;
          text-decoration: none;
        }
        form a:hover {
          text-decoration: underline;
        }
        /* Footer */
        .footer {
          background-color: #222;
          color: #ddd;
          padding: 40px 20px;
        }
        .container-f {
          max-width: 1200px;
          margin: 0 auto;
        }
        .row-f {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .footer-col {
          flex: 1;
          margin: 10px 20px;
          min-width: 180px;
        }
        .footer-col h4 {
          font-size: 18px;
          margin-bottom: 20px;
          text-transform: uppercase;
        }
        .footer-col ul {
          list-style: none;
          padding: 0;
        }
        .footer-col ul li {
          margin-bottom: 10px;
        }
        .footer-col ul li a {
          color: #ddd;
          text-decoration: none;
          font-size: 14px;
        }
        .footer-col ul li a:hover {
          color: #4caf50;
        }
        .social-links a {
          display: inline-block;
          color: #ddd;
          font-size: 18px;
          margin-right: 15px;
          transition: color 0.3s ease;
        }
        .social-links a:hover {
          color: #4caf50;
        }
        hr {
          border: 0;
          height: 1px;
          background: #444;
          margin: 20px 0;
        }
        .copyright {
          text-align: center;
          font-size: 14px;
          color: #777;
        }
        /* Responsive */
        @media(max-width: 768px) {
          nav ul {
            position: absolute;
            top: 60px;
            right: 0;
            background: #4caf50;
            width: 200px;
            flex-direction: column;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }
          nav ul.open {
            max-height: 400px;
          }
          nav ul li {
            margin: 0;
            padding: 15px;
          }
          .menu-icon {
            display: block;
          }
          .dropdown ul {
            position: relative;
            top: 0;
            left: 0;
            background: #388e3c;
            padding: 0;
            display: none !important;
            flex-direction: column;
          }
          .dropdown.open ul {
            display: flex !important;
          }
        }
      `}</style>

      {/* Navbar */}
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <a href="index.html">logo</a>
          </div>
          <nav>
            <ul id="MenuItems" className={menuOpen ? "open" : ""}>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li
                className={`dropdown ${productsOpen ? "open" : ""}`}
                onClick={toggleProducts}
              >
                <a className="active">
                  Products <i className="fas fa-caret-down"></i>
                </a>
                <ul id="inneritems">
                  <li>
                    <a href="moisterizers.html">moisterizers</a>
                  </li>
                  <li>
                    <a href="Serums.html">Serums</a>
                  </li>
                  <li>
                    <a href="Cleansers.html">Cleansers</a>
                  </li>
                  <li>
                    <a href="Sunscreens.html">Sunscreens</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
              <li>
                <a href="account.html">Account</a>
              </li>
            </ul>
          </nav>
          <a href="card.html">
            <i className="fas fa-shopping-cart"></i>
          </a>
          <img
            src="/images/menuicon.jpg"
            alt="menu icon"
            className="menu-icon"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {/* Account Page */}
      <div className="account-page">
        <div className="container">
          <div className="form-container">
            <div className="form-btn">
              <span
                onClick={showLogin}
                style={{ fontWeight: isLogin ? "700" : "400" }}
              >
                Login
              </span>
              <span
                onClick={showRegister}
                style={{ fontWeight: !isLogin ? "700" : "400" }}
              >
                Register
              </span>
              <hr
                id="Indicator"
                style={{
                  transform: isLogin ? "translateX(0)" : "translateX(100px)",
                }}
              />
            </div>

            {isLogin ? (
              <form
                id="LoginForm"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Login submitted");
                }}
              >
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button type="submit" className="btn">
                  Login
                </button>
                <a href="#">Forgot Password</a>
              </form>
            ) : (
              <form
                id="RegForm"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Register submitted");
                }}
              >
                <input type="text" placeholder="Username" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit" className="btn">
                  Register
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container-f">
          <div className="row-f">
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">shipping</a>
                </li>
                <li>
                  <a href="#">returns</a>
                </li>
                <li>
                  <a href="#">order status</a>
                </li>
                <li>
                  <a href="#">payment options</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Our Services</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="copyright text-center">
            <h5>
              <a href="#">🌐</a> copyright © myShop.com all rights reserved
            </h5>
          </div>
        </div>
      </footer>
    </>
  );
}
