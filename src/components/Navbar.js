import * as React from "react"
import logo from "../images/logo.svg"
import { Link } from "gatsby"


const navLinks = [
    {text: "About", address: "/"},
    {text: "Projects", address: "/projects"},
    {text: "Blog", address: "/blog"},
    {text: "Contact", address: "/contact"},
]

const Navbar = () => {
  return (
    <nav id="navbar">
        <Link to="/"><img src={logo} alt="Logo"/></Link>

        <input id="menu-toggle" type="checkbox"/>
        <label htmlFor="menu-toggle" id="menu-toggle-label" className="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </label>
        <ul id="nav-list"> 
          {navLinks.map(link => <li key={link.text}><Link to={link.address} className="nav-link">{link.text}</Link></li>)}
        </ul>
        
    </nav>
  )
}

export default Navbar
