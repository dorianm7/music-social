import React from 'react';
import PropTypes from 'prop-types';

import './MainHero.css';

import BasicButton from '../basic/BasicButton/BasicButton';

function MainHero(props) {
  const { tryButtonOnClick } = props;

  return (
    <div className="main-hero">
      <img
        src="https://newyork-dailynews.com/wp-content/uploads/2017/10/Night-Clubs-in-New-York-City-1024x552.jpg"
        alt="Night club dance floor"
      />
      <h1>AppName</h1>
      <p>
        App Description of the app so here is a lot of writing to do that
        the more you write the more things are written to see how it looks
        when there is a whole paragraph maybe?
      </p>
      <BasicButton
        onClick={tryButtonOnClick}
      >
        Try it today
      </BasicButton>
    </div>
  );
}

MainHero.propTypes = {
  tryButtonOnClick: PropTypes.func,
};

MainHero.defaultProps = {
  tryButtonOnClick: () => window.alert('Button clicked'),
};

export default MainHero;
