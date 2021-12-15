import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import ExpandedOptions from '../subcomponents/ExpandedOptions';
import '../../stylesheets/ExpandableButton.css';
import defaultIcon from '../../images/help-rhombus-outline.svg';
import close from '../../images/close.svg';

let getCorner;

class ExpandableButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.expandedOptionsRef = React.createRef();
  }

  componentDidMount() {
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

  render() {
    const { isOpen } = this.state;
    const {
      initialIconSrc,
      subsequentIconSrc,
      expand,
      direction,
      options,
    } = this.props;

    const closeIconButton = (
      <IconButton
        src={subsequentIconSrc}
        alt="Close Icon"
        onClick={this.handleClick}
        onKeyUp={this.handleClick}
      />
    );

    const initialIconButton = (
      <IconButton
        src={initialIconSrc}
        onClick={this.handleClick}
        onKeyUp={this.handleClick}
      />
    );

    const iconButton = isOpen ? closeIconButton : initialIconButton;
    const corner = getCorner(expand, direction);

    const RefExpandedOptions = React.forwardRef((props, ref) => (
      <ExpandedOptions forwardedRef={ref} options={options} corner={corner} />
    ));

    const contents = isOpen
      ? (
        <>
          {iconButton}
          <RefExpandedOptions ref={this.expandedOptionsRef} />
        </>
      )
      : iconButton;

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
  expand: PropTypes.string,
  direction: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.node),
};

ExpandableButton.defaultProps = {
  initialIconSrc: defaultIcon,
  subsequentIconSrc: close,
  expand: 'top',
  direction: 'left',
  options: ['One', 'Two', 'Three', 'Four'],
};

export default ExpandableButton;
