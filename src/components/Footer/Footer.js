import React from 'react';
import { nanoid } from 'nanoid';

import './Footer.css';

import { Icons } from '../../Icons';

function Footer() {
  return (
    <footer>
      <div className="text-section">
        <span className="app-name">Music&nbsp;Social</span>
        <span className="created-text">
          created by&nbsp;
        </span>
        <br />
        <span className="created-name">Dorian A Maldonado</span>
      </div>
      <hr />
      <ul className="links-section">
        <li className="project-links-section">
          <span>Project Links</span>
          <ul className="project-links">
            <li key={nanoid()}>
              <a
                href="https://github.com/dorianm7/music-compatibility"
                target="_blank"
                rel="noreferrer"
              >
                {Icons.GITHUB}
                Github
              </a>
            </li>
          </ul>
        </li>
        <li className="creator-links-section">
          <span>Creator Links</span>
          <ul className="creator-links">
            <li key={nanoid()}>
              <a
                href="https://github.com/dorianm7/"
                target="_blank"
                rel="noreferrer"
              >
                {Icons.GITHUB}
                Github
              </a>
            </li>
            <li key={nanoid()}>
              <a
                href="https://dorian-alexis-maldonado.firebaseapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                {Icons.WEB}
                Website
              </a>
            </li>
            <li key={nanoid()}>
              <a
                href="https://www.linkedin.com/in/dorian-maldonado/"
                target="_blank"
                rel="noreferrer"
              >
                {Icons.LINKEDIN}
                LinkedIn
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
