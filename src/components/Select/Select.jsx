import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import './Select.css';

import { renderIcon, CHEVRON_DOWN_NAME } from '../../Icons';

const NBSP_UNICODE = '\u00A0';

function Select(props) {
  const {
    options,
    optionOnClick,
  } = props;

  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);

  function renderListItemButton(option) {
    return (
      <li key={nanoid()}>
        <button
          type="button"
          className="list-item-button"
          onClick={() => {
            setSelected(option);
            setOpen(!open);
            optionOnClick(option);
          }}
        >
          {option.replaceAll(' ', NBSP_UNICODE)}
        </button>
      </li>
    );
  }

  const listItemButtonElements = [];
  let stateString;
  if (options.length === 0) {
    listItemButtonElements.push(renderListItemButton(options[0]));
    stateString = 'closed';
  } else {
    for (let i = 0; i < options.length; i += 1) {
      listItemButtonElements.push(renderListItemButton(options[i]));
    }
    stateString = open ? 'open' : 'closed';
  }

  return (
    <div className="select">
      <button
        type="button"
        className={`selected-option-button ${stateString}`}
        onClick={() => { setOpen(!open); }}
      >
        {selected.replace(' ', NBSP_UNICODE)}
        {options.length > 1
          && renderIcon(CHEVRON_DOWN_NAME, '15px', '15px', stateString)}
      </button>
      {options.length > 1
        && (
          <ul className={stateString}>
            {listItemButtonElements}
          </ul>
        )}
    </div>
  );
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  optionOnClick: PropTypes.func,
};

Select.defaultProps = {
  options: ['One', 'Two', 'Three'],
  optionOnClick: () => {},
};

export default Select;
