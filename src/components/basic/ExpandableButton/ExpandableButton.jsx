import React, {
  useState,
  useRef,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import './ExpandableButton.css';

import IconButton from '../IconButton/IconButton';
import { RefExpandedOptions } from '../../subcomponents/ExpandedOptions/ExpandedOptions';
import { DEFAULT_NAME, X_NAME } from '../../../Icons';

function getIconRoundedProp(expand) {
  let rounded;
  switch (expand) {
    case 'up':
      rounded = 'bottom';
      break;
    case 'right':
      rounded = 'left';
      break;
    case 'down':
      rounded = 'top';
      break;
    default:
      rounded = 'right';
      break;
  }
  return rounded;
}

function getCorner(expand, direction) {
  const isTopLeft = (expand === 'right' && direction === 'down')
    || (expand === 'down' && direction === 'right');

  const isTopRight = (expand === 'left' && direction === 'down')
    || (expand === 'down' && direction === 'left');

  const isBottomLeft = (expand === 'right' && direction === 'up')
    || (expand === 'up' && direction === 'right');

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
}

function ExpandableButton(props) {
  const {
    initialIcon,
    subsequentIcon,
    iconWidth,
    iconHeight,
    initialIconTransparent,
    expand,
    direction,
    optionsTitle,
    alignOptionsTitle,
    options,
    alignOptions,
    optionsOnClicks,
  } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false); // Used to set style once

  const expandedOptionsRef = useRef(null);

  const addCloseOnClick = (func) => (
    () => {
      func();
      setIsOpen(false);
    }
  );

  // Add options close functionality when option clicked
  const optionsOnClicksCloseOptions = [];
  for (let i = 0; i < optionsOnClicks.length; i += 1) {
    const newOnClick = addCloseOnClick(optionsOnClicks[i]);
    optionsOnClicksCloseOptions.push(newOnClick);
  }

  useEffect(() => {
    if (expandedOptionsRef.current !== null && !hasOpened) {
      expandedOptionsRef.current.style.setProperty('--icon-width', iconWidth);
      expandedOptionsRef.current.style.setProperty('--icon-height', iconHeight);
      setHasOpened(true);
    }
  });

  return (
    <div className={`expandable-button expand-${expand} direction-${direction}`}>
      <IconButton
        icon={isOpen ? subsequentIcon : initialIcon}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
        rounded={isOpen ? getIconRoundedProp(expand) : 'all'}
        transparentBackground={isOpen ? false : initialIconTransparent}
        onClick={() => setIsOpen(!isOpen)}
        onKeyUp={() => setIsOpen(!isOpen)}
      />
      <RefExpandedOptions
        className={isOpen ? '' : 'hide'}
        title={optionsTitle}
        alignTitle={alignOptionsTitle}
        options={options}
        alignOptions={alignOptions}
        optionsOnClicks={optionsOnClicksCloseOptions}
        corner={getCorner(expand, direction)}
        ref={expandedOptionsRef}
      />
    </div>
  );
}

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
  optionsOnClicks: PropTypes.arrayOf(PropTypes.func),
};

ExpandableButton.defaultProps = {
  initialIcon: DEFAULT_NAME,
  subsequentIcon: X_NAME,
  iconWidth: '20px',
  iconHeight: '20px',
  initialIconTransparent: false,
  expand: 'up',
  direction: 'left',
  optionsTitle: 'Title',
  alignOptionsTitle: 'center',
  options: ['Default Option'],
  alignOptions: 'center',
  optionsOnClicks: [() => {}],
};

export default ExpandableButton;
