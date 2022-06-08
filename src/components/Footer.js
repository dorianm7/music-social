import React from 'react';
import { nanoid } from 'nanoid';

import '../stylesheets/Footer.css';

import { Icons } from '../Icons';

function Footer() {
  return (
    <footer className="content">
      <div className="left">
        <span className="app-name">Music&nbsp;Social</span>
        <span className="created-text">
          created by Dorian A Maldonado
        </span>
      </div>
      <hr />
      <ul className="right">
        <li className="project">
          <span>Project Links</span>
          <ul className="project-links">
            <li key={nanoid()}>
              <a
                href="https://github.com/dorianm7/music-compatibility"
                target="_blank"
                rel="noreferrer"
              >
                {Icons.GITHUB}
                Project Github
              </a>
            </li>
          </ul>
        </li>
        <li className="creator">
          <span>Creator Links</span>
          <ul className="creator-links">
            <li key={nanoid()}>
              <a
                href="https://github.com/dorianm7/"
                target="_blank"
                rel="noreferrer"
              >
                {Icons.GITHUB}
                Personal Github
              </a>
            </li>
            <li key={nanoid()}>
              <a
                href="https://dorian-alexis-maldonado.firebaseapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                {Icons.WEB}
                Personal Website
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
