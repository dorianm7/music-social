import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import { RefExpandedOptions } from '../subcomponents/ExpandedOptions';
import '../../stylesheets/ExpandableButton.css';
import defaultIcon from '../../images/help-rhombus-outline.svg';
import close from '../../images/close.svg';

let getCorner;

class ExpandableButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.expandedOptionsRef = React.createRef();
    this.expandedOptionsEl = null;
    this.setExpandedOptionsEl();
    this.expandedOptionsWidth = '0px';
    this.expandedOptionsHeight = '0px';
  }

  componentDidMount() {
  }

  componentDidUpdate() {
    const { isOpen } = this.state;

    if (isOpen) {
      this.setStyle();
    }
  }

  componentWillUnmount() {
  }

  handleClick() {
    this.setState((prevState) => (
      {
        isOpen: !prevState.isOpen,
      }
    ));
  }

  setStyle() {
    const {
      iconWidth,
      iconHeight,
    } = this.props;

    this.expandedOptionsHeight = this.expandedOptionsRef.current.offsetHeight;
    this.expandedOptionsWidth = this.expandedOptionsRef.current.offsetWidth;

    this.expandedOptionsRef.current.style.setProperty('--expanded-options-height', `${this.expandedOptionsHeight}px`);
    this.expandedOptionsRef.current.style.setProperty('--expanded-options-width', `${this.expandedOptionsWidth}px`);
    this.expandedOptionsRef.current.style.setProperty('--icon-height', iconHeight);
    this.expandedOptionsRef.current.style.setProperty('--icon-width', iconWidth);
  }

  getIconRoundedProp() {
    const { expand } = this.props;
    let rounded;
    if (expand === 'top') {
      rounded = 'bottom';
    } else if (expand === 'right') {
      rounded = 'left';
    } else if (expand === 'bottom') {
      rounded = 'top';
    } else {
      rounded = 'right';
    }

    return rounded;
  }

  getIconButton() {
    const {
      initialIconSrc,
      subsequentIconSrc,
      iconWidth,
      iconHeight,
    } = this.props;
    const { isOpen } = this.state;
    let iconRounded;
    let iconSrc;
    let alt;

    if (isOpen) {
      iconSrc = subsequentIconSrc;
      alt = 'Close Expandable Button';
      iconRounded = this.getIconRoundedProp();
    } else {
      iconSrc = initialIconSrc;
      alt = 'Open Expandable Button';
      iconRounded = 'all';
    }

    return (
      <IconButton
        src={iconSrc}
        alt={alt}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
        rounded={iconRounded}
        onClick={this.handleClick}
        onKeyUp={this.handleClick}
      />
    );
  }

  setExpandedOptionsEl() {
    const { expand, direction, options } = this.props;
    const corner = getCorner(expand, direction);

    this.expandedOptionsEl = (
      <RefExpandedOptions
        options={options}
        corner={corner}
        ref={this.expandedOptionsRef}
      />
    );
  }

  renderExpandedOptions() {
    return this.expandedOptionsEl;
  }

  renderContents() {
    const { isOpen } = this.state;
    const iconButton = this.getIconButton();

    if (isOpen) {
      return (
        <>
          {iconButton}
          {this.renderExpandedOptions()}
        </>
      );
    }
    return iconButton;
  }

  render() {
    const {
      expand,
      direction,
    } = this.props;

    return (
      <div className={`expandable-button expand-${expand} direction-${direction}`}>
        {this.renderContents()}
      </div>
    );
  }
}

getCorner = (expand, direction) => {
  const isTopLeft = (expand === 'right' && direction === 'down')
    || (expand === 'bottom' && direction === 'right');

  const isTopRight = (expand === 'left' && direction === 'down')
    || (expand === 'bottom' && direction === 'left');

  const isBottomRight = (expand === 'left' && direction === 'up')
  || (expand === 'top' && direction === 'left');

  let corner;
  if (isTopLeft) {
    corner = 'top-left';
  } else if (isTopRight) {
    corner = 'top-right';
  } else if (isBottomRight) {
    corner = 'bottom-right';
  } else {
    corner = 'bottom-left';
  }

  return corner;
};

ExpandableButton.propTypes = {
  initialIconSrc: PropTypes.string,
  subsequentIconSrc: PropTypes.string,
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
  expand: PropTypes.string,
  direction: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.node),
};

ExpandableButton.defaultProps = {
  initialIconSrc: defaultIcon,
  subsequentIconSrc: close,
  iconWidth: '20px',
  iconHeight: '20px',
  expand: 'top',
  direction: 'left',
  options: ['One', 'Two', 'Three', 'Four'],
};

export default ExpandableButton;
