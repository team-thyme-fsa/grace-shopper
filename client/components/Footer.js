import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-right">
        <a href="#">
          <i className="-member"></i>
        </a>
        <a href="#">
          <i className="member"></i>
        </a>
        <a href="#">
          <i className="member"></i>
        </a>
        <a href="#">
          <i className="member"></i>
        </a>
      </div>

      <div className="footer-left">
        <p className="footer-links">
          <a className="link-1" href="/pokemart">
            Home
          </a>
          <a href="/products">Products</a>
          <a href="#">About Us</a>
        </p>

        <p>Team Rockey &copy; 1996</p>
      </div>
    </footer>
  );
};

export default Footer;
