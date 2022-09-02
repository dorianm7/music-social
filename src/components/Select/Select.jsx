import React, {
  useState,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import './Select.css';

import {
  renderIcon,
  IconNames,
} from '../../Icons';

const NBSP_UNICODE = '\u00A0';

function Select(props) {
  const {
    options,
    optionOnClick,
  } = props;

  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('');
  const [hasId, setHasId] = useState(false);

  useEffect(() => {
    if (open) {
      const optionsUl = document.getElementById(id);
      const firstOption = optionsUl.querySelector('button');
      firstOption.focus();
    }
  });

  if (!hasId) {
    setId(nanoid());
    setHasId(true);
  }

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
        onClick={() => {
          setOpen(!open);
        }}
        role="combobox"
        aria-expanded={open}
        aria-controls={id}
      >
        {selected.replace(' ', NBSP_UNICODE)}
        {options.length > 1
          && renderIcon(IconNames.CHEVRON_DOWN, stateString)}
      </button>
      {options.length > 1
        && (
          <ul
            id={id}
            className={stateString}
          >
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
