import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-right">
        <a target="_blank" href="https://github.com/fguillen1215">
          <i className="member">F</i>
        </a>
        <a target="_blank" href="https://github.com/thingung">
          <i className="-member">E</i>
        </a>
        <a target="_blank" href="https://github.com/cxb0934">
          <i className="member">C</i>
        </a>
        <a target="_blank" href="https://github.com/ggiggity">
          <i className="member">K</i>
        </a>
      </div>

      <div className="footer-left">
        <p className="footer-links">
          <a className="link-1" href="/">
            Home
          </a>
          <a href="/">Products</a>
          <a href="/">About Us</a>
        </p>

        <p>Team Rockey &copy; 1996</p>
      </div>
    </footer>
  );
};

export default Footer;
