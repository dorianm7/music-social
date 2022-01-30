import React from 'react';
import PropTypes from 'prop-types';
import '../../stylesheets/subcomponents/Tabs.css';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { clickHandler } = this.props;
    clickHandler(e.target.innerText);
  }

  renderTabs() {
    const { tabTitles, tabSelected } = this.props;
    const tabs = [];
    for (let i = 0; i < tabTitles.length; i += 1) {
      const selectedClass = i === tabSelected ? ' selected' : '';
      tabs.push(
        <button type="button" className={`tab${selectedClass}`} onClick={this.handleClick}>{tabTitles[i]}</button>,
      );
    }

    return tabs;
  }

  render() {
    return (
      <div className="tabs">
        {this.renderTabs()}
      </div>
    );
  }
}

Tabs.propTypes = {
  tabTitles: PropTypes.arrayOf(PropTypes.string),
  tabSelected: PropTypes.number,
  clickHandler: PropTypes.func,
};

Tabs.defaultProps = {
  tabTitles: ['Tab 0', 'Tab 1'],
  tabSelected: 0,
  clickHandler: (e) => { console.log(e); },
};

export default Tabs;
