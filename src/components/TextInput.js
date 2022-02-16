import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputRequirements from './subcomponents/InputRequirements';
import '../stylesheets/TextInput.css';

function TextInput(props) {
  const [value, setValue] = useState('');
  const [hasOpened, setHasOpened] = useState(false);
  const [showDropDown, setShowDropDown] = useState(true);
  const [showRequirements, setShowRequirements] = useState(false);
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
  };

  const handleFocus = () => {
    if (!value) {
      setShowRequirements(true);
      setShowDropDown(true);
      setHasOpened(true);
    }
  };

  const handleBlur = () => {
    if (!value) {
      setShowDropDown(true);
    }

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
        onFocus={handleFocus}
      />
      {showRequirements && (
        <InputRequirements
          openDropDown={showDropDown}
          hasOpened={hasOpened}
          requirementTexts={requirementTexts}
          requirementValidities={requirementValidities}
          showRequirements={showRequirements}
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
