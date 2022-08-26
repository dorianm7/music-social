import React, {
  useState,
  useRef,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import './ExpandableButton.css';

import { RefExpandedOptions } from '../../subcomponents/ExpandedOptions/ExpandedOptions';

import {
  renderIcon,
  IconNames,
} from '../../../Icons';

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
    initialIconAriaLabel,
    subsequentIcon,
    subsequentIconAriaLabel,
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
  const iconButtonRef = useRef(null);

  const roundedClass = isOpen ? getIconRoundedProp(expand) : 'all';
  const transparentClass = initialIconTransparent && !isOpen ? 'transparent-background' : '';

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
    if (iconButtonRef && !hasOpened) {
      iconButtonRef.current.style.setProperty('--icon-width', iconWidth);
      iconButtonRef.current.style.setProperty('--icon-height', iconHeight);
    }
    if (expandedOptionsRef.current && !hasOpened) {
      expandedOptionsRef.current.style.setProperty('--icon-width', iconWidth);
      expandedOptionsRef.current.style.setProperty('--icon-height', iconHeight);
      setHasOpened(true);
    }
  });

  return (
    <div className={`expandable-button expand-${expand} direction-${direction}`}>
      <button
        type="button"
        ref={iconButtonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={`icon-button ${transparentClass} rounded-${roundedClass}`}
        aria-label={isOpen ? subsequentIconAriaLabel : initialIconAriaLabel}
      >
        {renderIcon(isOpen ? subsequentIcon : initialIcon, '')}
      </button>
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
  initialIcon: PropTypes.oneOf(Object.values(IconNames)),
  initialIconAriaLabel: PropTypes.string,
  subsequentIcon: PropTypes.oneOf(Object.values(IconNames)),
  subsequentIconAriaLabel: PropTypes.string,
  iconWidth: PropTypes.string,
  iconHeight: PropTypes.string,
  initialIconTransparent: PropTypes.bool,
  expand: PropTypes.oneOf([
    'up',
    'right',
    'down',
    'left',
  ]),
  direction: PropTypes.oneOf([
    'up',
    'right',
    'down',
    'left',
  ]),
  optionsTitle: PropTypes.string,
  alignOptionsTitle: PropTypes.oneOf([
    'left',
    'center',
    'right',
  ]),
  options: PropTypes.arrayOf(PropTypes.node),
  alignOptions: PropTypes.oneOf([
    'left',
    'center',
    'right',
  ]),
  optionsOnClicks: PropTypes.arrayOf(PropTypes.func),
};

ExpandableButton.defaultProps = {
  initialIcon: IconNames.DEFAULT,
  initialIconAriaLabel: 'Expand options',
  subsequentIcon: IconNames.X,
  subsequentIconAriaLabel: 'Hide options',
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
