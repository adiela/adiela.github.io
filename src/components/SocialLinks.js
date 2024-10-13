import * as React from 'react';
import Icon from './icons/Icon';

const socialMediaLinks = [
  { name: 'Github', address: 'https://www.github.com/adiela' },
  { name: 'Linkedin', address: 'https://www.linkedin.com/in/adielaabishua' },
  { name: 'Twitter', address: 'https://www.x.com/adielaabishua' },
];

function SocialLinks() {
  return (
    <ul className="social-media-links">
      {socialMediaLinks.map((link) => <li key={link.name} className="social-media-link"><a aria-label={`${link.name}-link`} href={link.address} target="_blank" rel="noopener noreferrer"><Icon name={link.name} /></a></li>)}
    </ul>
  );
}

export default SocialLinks;
