import React from 'react';
import PropTypes from 'prop-types';
import IconCodepen from './IconCodepen';
import IconGithub from './IconGithub';
import IconLinkedin from './IconLinkedIn';
import IconTwitter from './IconTwitter';

const Icon = ({ name }) => {
  switch (name) {
    case 'Codepen':
      return <IconCodepen />;
    case 'Github':
      return <IconGithub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Twitter':
      return <IconTwitter />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;