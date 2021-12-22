import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import '../../stylesheets/subcomponents/ExpandedOptions.css';
import '../../stylesheets/main.css';

function createListElements(options) {
  const listItems = [];

  for (let i = 0; i < options.length; i += 1) {
    listItems.push(<li key={nanoid()}>{options[i]}</li>);
  }

  return listItems;
}

function ExpandedOptions(props) {
  const {
    options,
    corner,
  } = props;
  const cornerClassName = `${corner}-corner`;
  const listItems = createListElements(options);

  return (
    <ul className={`${cornerClassName} expanded-options `}>
      {listItems}
    </ul>
  );
}

ExpandedOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.node),
  corner: PropTypes.string,
};

ExpandedOptions.defaultProps = {
  options: ['Default', 'expanded', 'options'],
  corner: 'top-left',
};

const RefExpandedOptions = React.forwardRef((props, ref) => {
  const { options, corner } = props;
  const cornerClassName = `${corner}-corner`;
  const listItems = createListElements(options);

  return (
    <ul ref={ref} className={`${cornerClassName} expanded-options `}>
      {listItems}
    </ul>
  );
});

RefExpandedOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.node),
  corner: PropTypes.string,
};

RefExpandedOptions.defaultProps = {
  options: ['Default', 'expanded', 'ref', 'options'],
  corner: 'top-left',
};

export {
  ExpandedOptions,
  RefExpandedOptions,
};
