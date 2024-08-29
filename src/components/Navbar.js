import * as React from "react"
import logo from "../images/logo.svg"
import { Link } from "gatsby"


const navLinks = [
    {text: "About", address: "/"},
    {text: "Projects", address: "/#projects"},
    {text: "Blog", address: "/blog"},
    {text: "Contact", address: "/contact"},
]

const Navbar = () => {
  return (
    <nav id="navbar">
        <Link to="/"><img src={logo} alt="Logo"/></Link>

        <ul>
        {navLinks.map(link => <li key={link.text}><Link to={link.address}>{link.text}</Link></li>)}
        </ul>
        
    </nav>
  )
}

export default Navbar
