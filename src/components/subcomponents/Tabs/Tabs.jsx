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
      ids,
      tabSelected,
      role,
      useAriaSelected,
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
      const ariaSelectedAttr = useAriaSelected ? { 'aria-selected': true } : {};
      return (
        <div
          key={nanoid()}
          id={ids[0]}
          className="tab selected"
          {...tabRole}
          {...ariaControlsAttrs[0]}
          {...ariaSelectedAttr}
        >
          {children}
        </div>
      );
    }

    const tabs = [];
    for (let i = 0; i < children.length; i += 1) {
      const selectedClass = i === tabSelected ? ' selected' : '';
      const ariaSelectedAttr = useAriaSelected ? { 'aria-selected': i === tabSelected } : {};
      tabs.push(
        <div
          key={nanoid()}
          id={ids[i]}
          className={`tab${selectedClass}`}
          {...ariaSelectedAttr}
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
  ids: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  tabSelected: PropTypes.number,
  role: PropTypes.string,
  useAriaSelected: PropTypes.bool,
  ariaLabelledBy: PropTypes.string,
  ariaControlsList: PropTypes.arrayOf(PropTypes.string),
};

Tabs.defaultProps = {
  ids: ['tab1id', 'tab2id'],
  children: [
    'Tab 1',
    'Tab 2',
  ],
  tabSelected: 0,
  role: '',
  useAriaSelected: false,
  ariaLabelledBy: '',
  ariaControlsList: [],
};

export default Tabs;
