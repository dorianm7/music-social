import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputRequirements from '../subcomponents/InputRequirements/InputRequirements';
import './TextInput.css';

function TextInput(props) {
  const [value, setValue] = useState('');
  const [hasOpened, setHasOpened] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);
  const [showDropDown, setShowDropDown] = useState(true);
  const [showRequirements, setShowRequirements] = useState(false);
  const {
    type,
    name,
    requirementTexts,
    requirementValidities,
    onChange,
    pattern,
    minLength,
    maxLength,
    required,
  } = props;

  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };

  const inputOnChange = (e) => {
    onChange(e);
    setValue(e.target.value);
    if (!e.target.value) {
      setShowDropDown(true);
    }
  };

  const handleFocus = () => {
    if (!value) {
      setShowRequirements(true);
      setShowDropDown(true);
      setHasOpened(true);
      setHasClosed(false);
    }
  };

  const handleBlur = () => {
    if (!requirementValidities.includes(false) && !hasClosed) {
      setShowDropDown(false);
      setHasClosed(true);
    }
  };

  return (
    <div className="text-input">
      <input
        type={type}
        name={name}
        onChange={inputOnChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
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
  name: PropTypes.string,
  requirementTexts: PropTypes.arrayOf(PropTypes.string),
  requirementValidities: PropTypes.arrayOf(PropTypes.bool),
  onChange: PropTypes.func,
  pattern: PropTypes.string,
  minLength: PropTypes.string,
  maxLength: PropTypes.string,
  required: PropTypes.bool,
};

TextInput.defaultProps = {
  type: 'text',
  name: '',
  requirementTexts: ['Requirement 1', 'Requirement 2'],
  requirementValidities: [true, false],
  onChange: () => { window.alert('Input onChanged'); },
  pattern: null,
  minLength: null,
  maxLength: null,
  required: false,
};

export default TextInput;
