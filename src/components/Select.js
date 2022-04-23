import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import '../stylesheets/Select.css';
import { renderIcon, CHEVRON_DOWN_NAME } from '../Icons';

const NBSP_UNICODE = '\u00A0';

function Select(props) {
  const {
    choices,
    choiceOnClick,
  } = props;

  const [selected, setSelected] = useState(choices[0]);
  const [open, setOpen] = useState(false);
  const listItemButtonElements = [];
  for (let i = 0; i < choices.length; i += 1) {
    listItemButtonElements.push((
      <button
        type="button"
        className="list-item-button"
        onClick={() => {
          setSelected(choices[i]);
          setOpen(!open);
          choiceOnClick();
        }}
      >
        <li key={nanoid()}>
          {choices[i].replaceAll(' ', NBSP_UNICODE)}
        </li>
      </button>
    ));
  }
  const stateString = open ? 'open' : 'closed';

  return (
    <div className="select">
      <button
        type="button"
        className={`selected-choice-button ${stateString}`}
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
  choices: PropTypes.arrayOf(PropTypes.string),
  choiceOnClick: PropTypes.func,
};

Select.defaultProps = {
  choices: ['One', 'Two', 'Three'],
  choiceOnClick: () => { window.alert('Choice clicked'); },
};

export default Select;
