import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/UserPreview.css';
import IconButton from './basic/IconButton';
import plusIcon from '../images/plus.svg';
import checkIcon from '../images/check.svg';
import defaultImg from '../images/help-rhombus-outline.svg';

class UserPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFollowing: false,
    };
  }

  componentDidMount() {

  }

  // MIGHT NEED TO HAVE TWO DIFFERENT ONCLICKS
  renderIconButton(addButtonOnClick) {
    const { isFollowing } = this.state;
    let iconSrc;
    if (isFollowing) {
      iconSrc = checkIcon;
    } else {
      iconSrc = plusIcon;
    }

    return (
      <IconButton
        src={iconSrc}
        rounded="all"
        iconWidth="25px"
        iconHeight="25px"
        onClick={addButtonOnClick}
      />
    );
  }

  render() {
    const {
      imgSrc,
      imgAlt,
      name,
      numFollowers,
      numFollowing,
      addButtonOnClick,
    } = this.props;

    const iconButton = this.renderIconButton(addButtonOnClick);

    return (
      <div className="user-preview">
        <img
          className="user-picture"
          src={imgSrc}
          alt={imgAlt}
          width="60px"
          height="60px"
        />
        <div className="user-info">
          <p className="user-name">{name}</p>
          <p className="user-follow-info">
            {numFollowers}
            &nbsp;Followers,&nbsp;
            {numFollowing}
            &nbsp;Following
          </p>
        </div>
        {iconButton}
      </div>
    );
  }
}

UserPreview.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  name: PropTypes.string,
  numFollowers: PropTypes.string,
  numFollowing: PropTypes.string,
  addButtonOnClick: PropTypes.func,
};

UserPreview.defaultProps = {
  imgSrc: defaultImg,
  imgAlt: 'Default Image',
  name: 'Name L',
  numFollowers: '2',
  numFollowing: '3',
  addButtonOnClick: () => { window.alert('Add Button Clicked'); },
};

export default UserPreview;
