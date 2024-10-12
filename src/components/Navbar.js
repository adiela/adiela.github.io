import * as React from 'react';
import { Link } from 'gatsby';
import logo from '../images/logo.svg';

const navLinks = [
  { text: 'About', address: '/' },
  { text: 'Skills', address: '/#skills' },
  { text: 'Projects', address: '/#projects' },
  { text: 'Blog', address: '/blog' },
  { text: 'Contact', address: '/contact' },
];

function Navbar() {
  return (
    <nav id="navbar">
      <Link to="/"><img src={logo} alt="Logo" /></Link>

      <input id="menu-toggle" type="checkbox" />
      <label htmlFor="menu-toggle" id="menu-toggle-label" className="hamburger-lines">
        <span className="line line1" />
        <span className="line line2" />
        <span className="line line3" />
      </label>
      <ul id="nav-list">
        {navLinks.map((link) => <li key={link.text}><Link to={link.address} className="nav-link">{link.text}</Link></li>)}
      </ul>

    </nav>
  );
}

export default Navbar;
