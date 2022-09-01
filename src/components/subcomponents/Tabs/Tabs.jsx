/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import './Tabs.css';

// children are preferably buttons or strings
class Tabs extends React.Component {
  renderTabs() {
    const {
      children,
      tabSelected,
      role,
      ariaControlsList,
    } = this.props;

    const tabRole = !role ? {} : { role: 'tab' };

    const ariaControlsAttrs = [];
    ariaControlsList.forEach((ariaControl) => {
      ariaControlsAttrs.push({
        'aria-controls': ariaControl,
      });
    });
    if (!children.length) {
      return (
        <div
          className="tab selected"
          {...tabRole}
          {...ariaControlsAttrs[0]}
          aria-selected
        >
          {children}
        </div>
      );
    }

    const tabs = [];
    for (let i = 0; i < children.length; i += 1) {
      const selectedClass = i === tabSelected ? ' selected' : '';
      tabs.push(
        <div
          key={nanoid()}
          className={`tab${selectedClass}`}
          aria-selected={i === tabSelected}
          {...tabRole}
          {...ariaControlsAttrs[i]}
        >
          {children[i]}
        </div>,
      );
    }

    return tabs;
  }

  render() {
    const {
      role,
      ariaLabelledBy,
    } = this.props;
    const roleAttr = !role ? {} : { role };
    const ariaLabelledByAttr = !ariaLabelledBy ? {} : { 'aria-labelledby': ariaLabelledBy };
    return (
      <div
        className="tabs"
        {...roleAttr}
        {...ariaLabelledByAttr}
      >
        {this.renderTabs()}
      </div>
    );
  }
}

Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  tabSelected: PropTypes.number,
  role: PropTypes.string,
  ariaLabelledBy: PropTypes.string,
  ariaControlsList: PropTypes.arrayOf(PropTypes.string),
};

Tabs.defaultProps = {
  children: [
    'Tab 1',
    'Tab 2',
  ],
  tabSelected: 0,
  role: '',
  ariaLabelledBy: '',
  ariaControlsList: [],
};

export default Tabs;
