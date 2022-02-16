import React from 'react';
import PropTypes from 'prop-types';
import {
  RequirementsDropDown,
  renderRequirement,
} from './RequirementsDropDown';

function InputRequirements(props) {
  const {
    openDropDown,
    hasOpened,
    requirementTexts,
    requirementValidities,
    showRequirements,
    onTitleBarClick,
  } = props;

  const handleClick = () => {
    onTitleBarClick();
  };

  const requirementComponent = requirementTexts.length === 1
    ? (
      <div className="requirement center-row">
        {renderRequirement(requirementTexts[0], requirementValidities[0])}
      </div>
    ) : (
      <RequirementsDropDown
        open={openDropDown}
        hasOpened={hasOpened}
        onTitleBarClick={handleClick}
        requirementTexts={requirementTexts}
        requirementValidities={requirementValidities}
      />
    );

  const inputRequirementsComponent = showRequirements ? (
    <div className="input-requirements">
      {requirementComponent}
    </div>
  ) : <></>;

  return inputRequirementsComponent;
}

InputRequirements.propTypes = {
  openDropDown: PropTypes.bool,
  hasOpened: PropTypes.bool,
  requirementTexts: PropTypes.arrayOf(PropTypes.string),
  requirementValidities: PropTypes.arrayOf(PropTypes.bool),
  showRequirements: PropTypes.bool,
  onTitleBarClick: PropTypes.func,
};

InputRequirements.defaultProps = {
  openDropDown: false,
  hasOpened: false,
  requirementTexts: ['Requirement 1', 'Requirement 2'],
  requirementValities: [false, true],
  showRequirements: false,
  onTitleBarClick: () => { window.alert('Input Requirements Title Bar Clicked'); },
};

export default InputRequirements;
