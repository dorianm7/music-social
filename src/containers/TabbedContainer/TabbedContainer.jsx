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

  renderUpdatedPanels(tabIds, tabSelected) {
    const { tabPanels } = this.props;
    const updatedPanels = [];
    tabPanels.forEach((panel, index) => {
      const classVal = index === tabSelected ? '' : 'hide';
      const updatedPanel = React.cloneElement(panel, {
        key: nanoid(),
        className: classVal,
        role: 'tabpanel',
        'aria-labelledby': tabIds[index],
      });
      updatedPanels.push(updatedPanel);
    });
    return updatedPanels;
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

    const tabIds = [];
    tabTitles.forEach(() => {
      tabIds.push(nanoid());
    });

    return (
      <div className="tabbed-container">
        <Tabs
          ids={tabIds}
          tabSelected={tabSelected}
          role="tablist"
          ariaLabelledBy={tabTitles[tabSelected]}
          ariaControlsList={tabIds}
          // ariaControlsList should have ids of the tabpanels
        >
          {buttons}
        </Tabs>
        {this.renderUpdatedPanels(tabIds, tabSelected)}
        {/* <div
          className="tab-content"
          role="tabpanel"
        >
          {this.renderTab()}
        </div> */}
      </div>
    );
  }
}

TabbedContainer.propTypes = {
  tabTitles: PropTypes.arrayOf(PropTypes.string),
  tabContents: PropTypes.arrayOf(PropTypes.node),
  tabPanels: PropTypes.arrayOf(PropTypes.node),
};

TabbedContainer.defaultProps = {
  tabTitles: ['Tab 0', 'Tab 1'],
  tabContents: [<span>Tab 0 contents</span>, <span>Tab 1 Contents</span>],
  tabPanels: [
    <div>
      Tab 0 contents
    </div>,
    <div>
      Tab 1 contents
    </div>,
  ],
};

export default TabbedContainer;
