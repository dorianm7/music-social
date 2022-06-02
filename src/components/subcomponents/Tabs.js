import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/subcomponents/Tabs.css';

// children are preferably buttons or strings
class Tabs extends React.Component {
  renderTabs() {
    const { children, tabSelected } = this.props;
    if (!children.length) {
      return (
        <li className="tab selected">
          {children}
        </li>
      );
    }

    const tabs = [];
    for (let i = 0; i < children.length; i += 1) {
      const selectedClass = i === tabSelected ? ' selected' : '';
      tabs.push(
        <li className={`tab${selectedClass}`}>
          {children[i]}
        </li>,
      );
    }

    return tabs;
  }

  render() {
    return (
      <ul className="tabs">
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
};

Tabs.defaultProps = {
  children: [
    'Tab 1',
    'Tab 2',
  ],
  tabSelected: 0,
};

export default Tabs;
