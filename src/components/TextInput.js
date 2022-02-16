import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputRequirements from './subcomponents/InputRequirements';

function TextInput(props) {
  const [value, setValue] = useState('');
  const [hasOpened, setHasOpened] = useState(false);
  const [showDropDown, setShowDropDown] = useState(true);
  const {
    type,
    requirementTexts,
    requirementValidities,
    onChange,
  } = props;

  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };

  const inputOnChange = (e) => {
    onChange(e);
    setValue(e.target.value);
    if (value.length === 0) {
      setShowDropDown(true);
      setHasOpened(false);
    } else {
      setHasOpened(true);
    }
  };

  const handleBlur = () => {
    if (!requirementValidities.includes(false)) {
      setShowDropDown(false);
    }
  };

  return (
    <div className="text-input">
      <input
        type={type}
        onChange={inputOnChange}
        onBlur={handleBlur}
      />
      {value.length > 0 && (
        <InputRequirements
          openDropDown={showDropDown}
          hasOpened={hasOpened}
          requirementTexts={requirementTexts}
          requirementValidities={requirementValidities}
          showRequirements={value.length > 0}
          onTitleBarClick={handleClick}
        />
      )}
    </div>
  );
}

TextInput.propTypes = {
  type: PropTypes.string,
  requirementTexts: PropTypes.arrayOf(PropTypes.string),
  requirementValidities: PropTypes.arrayOf(PropTypes.bool),
  onChange: PropTypes.func,
};

TextInput.defaultProps = {
  type: 'text',
  requirementTexts: ['Requirement 1', 'Requirement 2'],
  requirementValidities: [true, false],
  onChange: () => { window.alert('Input onChanged'); },
};

export default TextInput;
