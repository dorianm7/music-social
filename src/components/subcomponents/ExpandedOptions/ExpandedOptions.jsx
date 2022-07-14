import React from 'react';
import PropTypes from 'prop-types';
import './ExpandedOptions.css';

import { nanoid } from 'nanoid';

import { spaceToNbsp } from '../../../utility/StringUtilities';

const DEFAULT_CLASSNAME = '';
const DEFAULT_TITLE = 'Title';
const DEFAULT_ALIGN_TITLE = 'center';
const DEFAULT_OPTIONS = ['Default Option 1'];
const DEFAULT_ALIGN_OPTIONS = 'center';
const DEFAULT_OPTIONS_ONCLICKS = [() => console.log('Default onClick')];
const DEFAULT_CORNER = 'top-left';

function createListElements(
  title,
  alignTitle,
  options,
  alignOptions,
  optionsOnClicks,
) {
  const listItems = [];

  if (title !== DEFAULT_TITLE) {
    listItems.push(<li key={nanoid()} className={`options-title align-${alignTitle}`}>{title}</li>);
  }

  const biggerLength = (options.length > optionsOnClicks.length)
    ? options.length
    : optionsOnClicks.length;

  for (let i = 0; i < biggerLength; i += 1) {
    listItems.push(
      <li
        key={nanoid()}
        className="options"
      >
        <button
          type="button"
          onClick={(i < optionsOnClicks.length) ? optionsOnClicks[i] : DEFAULT_OPTIONS_ONCLICKS[0]}
          className={`align-${alignOptions}`}
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
    className,
    title,
    alignTitle,
    options,
    alignOptions,
    optionsOnClicks,
    corner,
  } = props;
  const cornerClassName = `${corner}-corner`;
  const listItems = createListElements(
    spaceToNbsp(title),
    alignTitle,
    options.map((option) => spaceToNbsp(option)),
    alignOptions,
    optionsOnClicks,
  );

  return (
    <ul className={`expanded-options ${cornerClassName} ${className}`}>
      {listItems}
    </ul>
  );
}

ExpandedOptions.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  alignTitle: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.node),
  alignOptions: PropTypes.string,
  optionsOnClicks: PropTypes.arrayOf(PropTypes.func),
  corner: PropTypes.string,
};

ExpandedOptions.defaultProps = {
  className: DEFAULT_CLASSNAME,
  title: DEFAULT_TITLE,
  alignTitle: DEFAULT_ALIGN_TITLE,
  options: DEFAULT_OPTIONS,
  alignOptions: DEFAULT_ALIGN_OPTIONS,
  optionsOnClicks: DEFAULT_OPTIONS_ONCLICKS,
  corner: DEFAULT_CORNER,
};

const RefExpandedOptions = React.forwardRef((props, ref) => {
  const {
    className,
    title,
    alignTitle,
    options,
    alignOptions,
    optionsOnClicks,
    corner,
  } = props;
  const cornerClassName = `${corner}-corner`;
  const listItems = createListElements(
    spaceToNbsp(title),
    alignTitle,
    options.map((option) => spaceToNbsp(option)),
    alignOptions,
    optionsOnClicks,
  );
  return (
    <ul ref={ref} className={`expanded-options ${cornerClassName} ${className}`}>
      {listItems}
    </ul>
  );
});

RefExpandedOptions.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  alignTitle: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.node),
  alignOptions: PropTypes.string,
  optionsOnClicks: PropTypes.arrayOf(PropTypes.func),
  corner: PropTypes.string,
};

RefExpandedOptions.defaultProps = {
  className: DEFAULT_CLASSNAME,
  title: DEFAULT_TITLE,
  alignTitle: DEFAULT_ALIGN_TITLE,
  options: DEFAULT_OPTIONS,
  alignOptions: DEFAULT_ALIGN_OPTIONS,
  optionsOnClicks: DEFAULT_OPTIONS_ONCLICKS,
  corner: DEFAULT_CORNER,
};

export {
  ExpandedOptions,
  RefExpandedOptions,
};
