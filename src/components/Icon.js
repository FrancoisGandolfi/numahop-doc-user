// src/components/Icon.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// Ajoutez les icônes à la bibliothèque
library.add(fas, fab);

const Icon = ({ icon, size = '2x', color = '#fc063b' }) => {
  return <FontAwesomeIcon icon={icon} size={size} color={color} />;
};

export default Icon;
