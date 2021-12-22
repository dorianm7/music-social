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

  getIconButton() {
    const {
      initialIconSrc,
      subsequentIconSrc,
      iconWidth,
      iconHeight,
    } = this.props;
    const { isOpen } = this.state;
    if (isOpen) {
      return (
        <IconButton
          src={subsequentIconSrc}
          alt="Close Expandable Button"
          iconWidth={iconWidth}
          iconHeight={iconHeight}
          onClick={this.handleClick}
          onKeyUp={this.handleClick}
        />
      );
    }
    return (
      <IconButton
        src={initialIconSrc}
        alt="Open Expandable Button"
        iconWidth={iconWidth}
        iconHeight={iconHeight}
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

  render() {
    const { isOpen } = this.state;
    const {
      expand,
      direction,
    } = this.props;

    const iconButton = this.getIconButton();
    let contents;

    if (isOpen) {
      contents = (
        <>
          {iconButton}
          {this.renderExpandedOptions()}
        </>
      );
    } else {
      contents = iconButton;
    }

    return (
      <div className={`expandable-button expand-${expand} direction-${direction}`}>
        {contents}
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
