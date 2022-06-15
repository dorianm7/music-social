import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/MusicItem.css';
import defaultImg from '../images/help-rhombus-outline.svg';

function MusicItem(props) {
  const {
    type, // track, album, artist
    labelColor,
    imgSrc,
    imgAlt,
    creator,
    title,
    rightComponent,
  } = props;

  return (
    <div className={`music-item ${type}`}>
      {labelColor !== 'none' && (
        <div
          className="label"
          style={{ backgroundColor: labelColor }}
        />
      )}
      <img className="picture" src={imgSrc} alt={imgAlt} width="60px" height="60px" />
      <div className="info">
        {type !== 'artist' && (
          <span
            className="title ellipses-overflow"
          >
            {title}
          </span>
        )}
        <span
          className="creator ellipses-overflow"
        >
          {creator}
        </span>
      </div>
      {rightComponent !== 'none' && rightComponent}
    </div>
  );
}

MusicItem.propTypes = {
  type: PropTypes.string,
  labelColor: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  creator: PropTypes.string,
  title: PropTypes.string,
  rightComponent: PropTypes.node,
};

MusicItem.defaultProps = {
  type: 'track',
  labelColor: 'none',
  imgSrc: defaultImg,
  imgAlt: 'Default Image',
  creator: 'Creator',
  title: 'Title of the Music Item',
  rightComponent: 'none',
};

export default MusicItem;
