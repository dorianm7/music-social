import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import '../stylesheets/Select.css';
import { renderIcon, CHEVRON_DOWN_NAME } from '../Icons';

const NBSP_UNICODE = '\u00A0';

function Select(props) {
  const {
    options,
    optionOnClick,
  } = props;

  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);
  const listItemButtonElements = [];
  for (let i = 0; i < options.length; i += 1) {
    listItemButtonElements.push((
      <button
        type="button"
        className="list-item-button"
        onClick={() => {
          setSelected(options[i]);
          setOpen(!open);
          optionOnClick();
        }}
      >
        <li key={nanoid()}>
          {options[i].replaceAll(' ', NBSP_UNICODE)}
        </li>
      </button>
    ));
  }
  const stateString = open ? 'open' : 'closed';

  return (
    <div className="select">
      <button
        type="button"
        className={`selected-option-button ${stateString}`}
        onClick={() => { setOpen(!open); }}
      >
        {selected}
        {renderIcon(CHEVRON_DOWN_NAME, '15px', '15px', stateString)}
      </button>
      <ul className={stateString}>
        {listItemButtonElements}
      </ul>
    </div>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  optionOnClick: PropTypes.func,
};

Select.defaultProps = {
  options: ['One', 'Two', 'Three'],
  optionOnClick: () => { window.alert('Option clicked'); },
};

export default Select;
