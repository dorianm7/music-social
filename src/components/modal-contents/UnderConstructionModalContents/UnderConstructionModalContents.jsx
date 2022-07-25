import React from 'react';

import './UnderConstructionModalContents.css';

import {
  Icons,
} from '../../../Icons';

function UnderConstructionModalContents() {
  return (
    <div className="under-construction-modal-contents">
      <p className="under-construction-text">
        {`This app is still under construction.
        Check your email for updates on the project or follow us on GitHub.
        Thank you!`}
      </p>
      <div>
        <a
          className="center-row "
          href="https://github.com/dorianm7/music-compatibility"
          target="_blank"
          rel="noreferrer"
        >
          {Icons.GITHUB}
          Github
        </a>
      </div>
    </div>
  );
}

export default UnderConstructionModalContents;
