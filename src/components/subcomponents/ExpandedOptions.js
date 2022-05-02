import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/subcomponents/ExpandedOptions.css';

import { nanoid } from 'nanoid';

import { spaceToNbsp } from '../../utility/StringUtilities';

function createListElements(title, alignTitle, options, optionsOnClicks) {
  const listItems = [];

  if (title !== 'Title') {
    listItems.push(<li key={nanoid()} className={`options-title align-${alignTitle}`}>{title}</li>);
  }

  const biggerLength = (options.length > optionsOnClicks.length)
    ? options.length
    : optionsOnClicks.length;

  const defaultOnClick = () => console.log('Default onClick');

  for (let i = 0; i < biggerLength; i += 1) {
    listItems.push(
      <li
        key={nanoid()}
        className="options"
      >
        <button
          type="button"
          onClick={(i < optionsOnClicks.length) ? optionsOnClicks[i] : defaultOnClick}
        >
          {(i < options.length) ? options[i] : `Default Option ${i + 1}`}
        </button>
      </li>,
    );
  }

  return listItems;
}

function ExpandedOptions(props) {
  const {
    title,
    alignTitle,
    options,
    optionsOnClicks,
    corner,
  } = props;
  const cornerClassName = `${corner}-corner`;
  const listItems = createListElements(
    spaceToNbsp(title),
    alignTitle,
    options.map((option) => spaceToNbsp(option)),
    optionsOnClicks,
  );

  return (
    <ul className={`${cornerClassName} expanded-options `}>
      {listItems}
    </ul>
  );
}

ExpandedOptions.propTypes = {
  title: PropTypes.string,
  alignTitle: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.node),
  optionsOnClicks: PropTypes.arrayOf(PropTypes.func),
  corner: PropTypes.string,
};

ExpandedOptions.defaultProps = {
  title: 'Title',
  alignTitle: 'center',
  options: ['Default Option 1'],
  optionsOnClicks: [() => console.log('Default onClick')],
  corner: 'top-left',
};

const RefExpandedOptions = React.forwardRef((props, ref) => {
  const {
    className,
    title,
    alignTitle,
    options,
    optionsOnClicks,
    corner,
  } = props;
  const cornerClassName = `${corner}-corner`;
  const listItems = createListElements(
    spaceToNbsp(title),
    alignTitle,
    options.map((option) => spaceToNbsp(option)),
    optionsOnClicks,
  );
  return (
    <ul ref={ref} className={`${cornerClassName} expanded-options ${className}`}>
      {listItems}
    </ul>
  );
});

RefExpandedOptions.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  alignTitle: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.node),
  optionsOnClicks: PropTypes.arrayOf(PropTypes.func),
  corner: PropTypes.string,
};

RefExpandedOptions.defaultProps = {
  className: '',
  title: 'Title',
  alignTitle: 'center',
  options: ['Default Option 1'],
  optionsOnClicks: [() => console.log('Default onClick')],
  corner: 'top-left',
};

export {
  ExpandedOptions,
  RefExpandedOptions,
};
