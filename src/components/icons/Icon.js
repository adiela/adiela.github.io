import React from 'react';
import IconCodepen from './IconCodepen';
import IconGithub from './IconGithub';
import IconLinkedin from './IconLinkedIn';
import IconTwitter from './IconTwitter';

function Icon({ name }) {
  switch (name) {
    case 'Codepen':
      return <IconCodepen />;
    case 'Github':
      return <IconGithub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return <IconCodepen />;
  }
}

export default Icon;
