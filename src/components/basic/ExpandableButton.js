import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import { RefExpandedOptions } from '../subcomponents/ExpandedOptions';
import '../../stylesheets/ExpandableButton.css';
import { DEFAULT_NAME, X_NAME } from '../../Icons';

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
    switch (expand) {
      case 'top':
        rounded = 'bottom';
        break;
      case 'right':
        rounded = 'left';
        break;
      case 'bottom':
        rounded = 'top';
        break;
      default:
        rounded = 'right';
        break;
    }
    return rounded;
  }

  getIconButton() {
    const {
      initialIcon,
      subsequentIcon,
      iconWidth,
      iconHeight,
      initialIconTransparent,
    } = this.props;
    const { isOpen } = this.state;
    let iconRounded;
    let icon;
    let transparentIcon;

    if (isOpen) {
      icon = subsequentIcon;
      iconRounded = this.getIconRoundedProp();
      transparentIcon = false;
    } else {
      icon = initialIcon;
      iconRounded = 'all';
      transparentIcon = initialIconTransparent;
    }

    return (
      <IconButton
        icon={icon}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
        rounded={iconRounded}
        transparentBackground={transparentIcon}
        onClick={this.handleClick}
        onKeyUp={this.handleClick}
      />
    );
  }

  setExpandedOptionsEl() {
    const {
      expand,
      direction,
      optionsTitle,
      alignOptionsTitle,
      options,
      alignOptions,
    } = this.props;
    const corner = getCorner(expand, direction);

    this.expandedOptionsEl = (
      <RefExpandedOptions
        title={optionsTitle}
        alignTitle={alignOptionsTitle}
        options={options}
        alignOptions={alignOptions}
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

  const isBottomLeft = (expand === 'right' && direction === 'up')
    || (expand === 'top' && direction === 'right');

  let corner;
  if (isTopLeft) {
    corner = 'top-left';
  } else if (isTopRight) {
    corner = 'top-right';
  } else if (isBottomLeft) {
    corner = 'bottom-left';
  } else {
    corner = 'bottom-right';
  }

  return corner;
};

ExpandableButton.propTypes = {
  initialIcon: PropTypes.string,
  subsequentIcon: PropTypes.string,
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
  initialIconTransparent: PropTypes.bool,
  expand: PropTypes.string,
  direction: PropTypes.string,
  optionsTitle: PropTypes.string,
  alignOptionsTitle: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.node),
  alignOptions: PropTypes.string,
};

ExpandableButton.defaultProps = {
  initialIcon: DEFAULT_NAME,
  subsequentIcon: X_NAME,
  iconWidth: '20px',
  iconHeight: '20px',
  initialIconTransparent: false,
  expand: 'top',
  direction: 'left',
  optionsTitle: 'Title',
  alignOptionsTitle: 'center',
  options: ['One', 'Two', 'Three', 'Four'],
  alignOptions: 'center',
};

export default ExpandableButton;
