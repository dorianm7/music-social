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
    } = this.props;

    const tabRole = !role ? {} : { role: 'tab' };
    if (!children.length) {
      return (
        <li
          className="tab selected"
          {...tabRole}
        >
          {children}
        </li>
      );
    }

    const tabs = [];
    for (let i = 0; i < children.length; i += 1) {
      const selectedClass = i === tabSelected ? ' selected' : '';
      tabs.push(
        <li
          key={nanoid()}
          className={`tab${selectedClass}`}
        >
          {children[i]}
        </li>,
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
      <ul
        className="tabs"
        {...roleAttr}
        {...ariaLabelledByAttr}
      >
        {this.renderTabs()}
      </ul>
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
};

Tabs.defaultProps = {
  children: [
    'Tab 1',
    'Tab 2',
  ],
  tabSelected: 0,
  role: '',
  ariaLabelledBy: '',
};

export default Tabs;
