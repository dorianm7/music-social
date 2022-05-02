import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/subcomponents/ExpandedOptions.css';

import { nanoid } from 'nanoid';

import { spaceToNbsp } from '../../utility/StringUtilities';

function createListElements(title, alignTitle, options, alignOptions) {
  const listItems = [];

  if (title !== 'Title') {
    listItems.push(<li key={nanoid()} className={`options-title align-${alignTitle}`}>{title}</li>);
  }
  for (let i = 0; i < options.length; i += 1) {
    listItems.push(<li key={nanoid()} className={`options align-${alignOptions}`}>{options[i]}</li>);
  }

  return listItems;
}

function ExpandedOptions(props) {
  const {
    title,
    alignTitle,
    options,
    alignOptions,
    corner,
  } = props;
  const cornerClassName = `${corner}-corner`;
  const listItems = createListElements(
    spaceToNbsp(title),
    alignTitle,
    options.map((option) => spaceToNbsp(option)),
    alignOptions,
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
  alignOptions: PropTypes.string,
  corner: PropTypes.string,
};

ExpandedOptions.defaultProps = {
  title: 'Title',
  alignTitle: 'center',
  options: ['Default', 'expanded', 'options'],
  alignOptions: 'center',
  corner: 'top-left',
};

const RefExpandedOptions = React.forwardRef((props, ref) => {
  const {
    className,
    title,
    alignTitle,
    options,
    alignOptions,
    corner,
  } = props;
  const cornerClassName = `${corner}-corner`;
  const listItems = createListElements(
    spaceToNbsp(title),
    alignTitle,
    options.map((option) => spaceToNbsp(option)),
    alignOptions,
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
  alignOptions: PropTypes.string,
  corner: PropTypes.string,
};

RefExpandedOptions.defaultProps = {
  className: '',
  title: 'Title',
  alignTitle: 'center',
  options: ['Default', 'expanded', 'ref', 'options'],
  alignOptions: 'center',
  corner: 'top-left',
};

export {
  ExpandedOptions,
  RefExpandedOptions,
};
