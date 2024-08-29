import * as React from "react"
import { Link } from 'gatsby'
import IconLinkedin from "./icons/IconLinkedIn"
import IconTwitter from "./icons/IconTwitter"
import IconGithub from "./icons/IconGithub"
import IconCodepen from "./icons/IconCodepen"
import Icon from "./icons/Icon"

const socialMediaLinks = [
    {name: "Github", address: "https://www.github.com/adiela", icon: IconGithub},
    {name: "Linkedin", address: "https://www.linkedin.com/in/adielaabishua", icon: IconLinkedin},
    {name: "Twitter", address: "https://www.x.com/adielaabishua", icon: IconTwitter},
    {name: "Codepen", address: "https://www.codepen.io/adielathedeveloper", icon: IconCodepen}
]

const SocialLinks = () => (
    <ul className="social-media-links">
        {socialMediaLinks.map(link => <li key={link.name} className="social-media-link" ><Link to={link.address}><Icon name={link.name} /></Link></li>)}
    </ul>
    
  );

export default SocialLinks