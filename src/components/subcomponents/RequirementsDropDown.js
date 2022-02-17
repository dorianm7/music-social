import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import '../../stylesheets/subcomponents/RequirementsDropDown.css';
import DropDown from '../DropDown';
import { renderIcon, CHECK_NAME, X_NAME } from '../../Icons';

function renderRequirement(text, valid) {
  const validityClassName = valid ? 'valid' : 'invalid';
  const iconName = valid ? CHECK_NAME : X_NAME;
  return (
    <>
      <p className="requirement-text">{text}</p>
      {renderIcon(iconName, '20px', '20px', validityClassName)}
    </>
  );
}

// texts and validities must be same length
function renderRequirementsList(requirementTexts, requirementValidities) {
  const listItems = [];
  for (let i = 0; i < requirementTexts.length; i += 1) {
    const text = requirementTexts[i];
    const valid = requirementValidities[i];

    listItems.push(
      <li
        key={nanoid()}
        className="requirement center-row"
      >
        {renderRequirement(text, valid)}
      </li>,
    );
  }

  return (
    <ul className="requirements-list">
      {listItems}
    </ul>
  );
}

function RequirementsDropDown(props) {
  const {
    open,
    hasOpened,
    onTitleBarClick,
    requirementTexts,
    requirementValidities,
  } = props;

  const allValid = !requirementValidities.includes(false);
  const titleBarValidityIcon = allValid ? CHECK_NAME : X_NAME;
  const titleBarValidityClassName = allValid ? 'valid' : 'invalid';

  return (
    <DropDown
      className="requirements-drop-down"
      title="Requirements"
      titleBarIconName={titleBarValidityIcon}
      titleBarIconClassName={titleBarValidityClassName}
      showTitleBarIcon={hasOpened}
      open={open}
      content={renderRequirementsList(requirementTexts, requirementValidities)}
      onTitleBarClick={onTitleBarClick}
    />
  );
}

RequirementsDropDown.propTypes = {
  open: PropTypes.bool,
  hasOpened: PropTypes.bool,
  onTitleBarClick: PropTypes.func,
  requirementTexts: PropTypes.arrayOf(PropTypes.string),
  requirementValidities: PropTypes.arrayOf(PropTypes.bool),
};

RequirementsDropDown.defaultProps = {
  open: false,
  hasOpened: false,
  onTitleBarClick: () => window.alert('Requirements Title Bar Clicked'),
  requirementTexts: ['Requirement 1', 'Requirement 2'],
  requirementValidities: [false, true],
};

export {
  RequirementsDropDown,
  renderRequirement,
  renderRequirementsList,
};
