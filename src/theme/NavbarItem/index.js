import React from 'react';
import NavbarItem from '@theme-original/NavbarItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function NavbarItemWithIcon(props) {
  // Si le lien est celui de GitHub
  if (props.href && props.href.includes('github.com')) {
    const { href, className } = props;
    return (
      <li className={`navbar__item ${className || ''}`}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__link"
          style={{ padding: '0.5rem', fontSize: '1.5rem', color: 'var(--numahop-dark)' }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
    );
  }
  // Sinon, rendez le composant normalement
  return <NavbarItem {...props} />;
}
