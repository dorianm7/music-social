import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/MusicItem.css';
import dotsVertical from '../images/dots-vertical.svg';
import defaultImg from '../images/help-rhombus-outline.svg';
import ExpandableButton from './basic/ExpandableButton';

function MusicItem(props) {
  const {
    imgSrc,
    imgAlt,
    creator,
    title,
    options,
  } = props;

  return (
    <div className="music-item">
      <img className="picture" src={imgSrc} alt={imgAlt} width="60px" height="60px" />
      <div className="info">
        <p className="title">{title}</p>
        <p className="creator">{creator}</p>
      </div>
      <ExpandableButton
        initialIconSrc={dotsVertical}
        initialIconAlt="Expand Options"
        subsequentIconSrc={dotsVertical}
        subsequentIconAlt="Close Options"
        iconWidth="20px"
        iconHeight="40px"
        initialIconTransparent
        expand="left"
        direction="down"
        options={options}
      />
    </div>
  );
}

MusicItem.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  creator: PropTypes.string,
  title: PropTypes.string,
  options: PropTypes.node,
};

MusicItem.defaultProps = {
  imgSrc: defaultImg,
  imgAlt: 'Default Image',
  creator: 'Creator',
  title: 'Title of the Music Item',
  options: ['One', 'Two', 'Three'],
};

export default MusicItem;
