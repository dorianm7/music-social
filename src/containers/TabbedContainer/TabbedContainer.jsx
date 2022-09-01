import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import './TabbedContainer.css';

import Tabs from '../../components/subcomponents/Tabs/Tabs';

class TabbedContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabSelected: 0,
    };
    this.tabsClickHandler = this.tabsClickHandler.bind(this);
  }

  getTabIndex(tabTitle) {
    const { tabTitles } = this.props;
    return tabTitles.indexOf(tabTitle);
  }

  tabsClickHandler(e) {
    this.setState({ tabSelected: this.getTabIndex(e.target.innerText) });
  }

  renderTab() {
    const { tabSelected } = this.state;
    const { tabContents } = this.props;

    return tabContents[tabSelected];
  }

  render() {
    const { tabSelected } = this.state;
    const { tabTitles } = this.props;

    const buttons = tabTitles.map(
      (title) => (
        <button
          type="button"
          onClick={this.tabsClickHandler}
          key={nanoid()}
        >
          {title}
        </button>
      ),
    );

    return (
      <div className="tabbed-container">
        <Tabs
          tabSelected={tabSelected}
          role="tablist"
        >
          {buttons}
        </Tabs>
        <div
          className="tab-content"
          role="tabpanel"
        >
          {this.renderTab()}
        </div>
      </div>
    );
  }
}

TabbedContainer.propTypes = {
  tabTitles: PropTypes.arrayOf(PropTypes.string),
  tabContents: PropTypes.arrayOf(PropTypes.node),
};

TabbedContainer.defaultProps = {
  tabTitles: ['Tab 0', 'Tab 1'],
  tabContents: [<span>Tab 0 contents</span>, <span>Tab 1 Contents</span>],
};

export default TabbedContainer;
