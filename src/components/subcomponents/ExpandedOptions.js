import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/ExpandedOptions.css';

function ExpandedOptions(props) {
  const { options, corner } = props;
  const listItems = options.map((el) => <li>{el}</li>);
  const cornerClassName = `${corner}-corner`;

  return (
    <ul className={`${cornerClassName} expanded-options`}>
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

export default ExpandedOptions;
