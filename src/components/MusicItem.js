import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/MusicItem.css';
import defaultImg from '../images/help-rhombus-outline.svg';

function MusicItem(props) {
  const {
    imgSrc,
    imgAlt,
    creator,
    title,
    rightComponent,
  } = props;

  return (
    <div className="music-item">
      <img className="picture" src={imgSrc} alt={imgAlt} width="60px" height="60px" />
      <div className="info">
        <p className="title">{title}</p>
        <p className="creator">{creator}</p>
      </div>
      {rightComponent}
    </div>
  );
}

MusicItem.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  creator: PropTypes.string,
  title: PropTypes.string,
  rightComponent: PropTypes.node,
};

MusicItem.defaultProps = {
  imgSrc: defaultImg,
  imgAlt: 'Default Image',
  creator: 'Creator',
  title: 'Title of the Music Item',
  rightComponent: <p>Right component</p>,
};

export default MusicItem;
