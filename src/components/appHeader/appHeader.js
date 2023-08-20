import React from 'react';
import './appHeader.css';
import { debounce } from 'lodash';
import '../../services/apiService';
import { Tabs } from 'antd';
import PropTypes from 'prop-types';

const items = [
  {
    key: '1',
    label: 'Search',
  },
  {
    key: '2',
    label: 'Rated',
  },
];
export default class AppHeader extends React.Component {
  constructor() {
    super();
    this.state = {
      key: '1',
    };
  }

  onTaskChange = (e) => {
    const { onLabel } = this.props;
    e.preventDefault();
    onLabel(e.target.value);
  };

  onTabsChange = (e) => {
    const { onTabs } = this.props;
    onTabs(e);
    this.setState({ key: e });
  };

  render() {
    const { key } = this.state;
    return (
      <header className="header">
        <Tabs defaultActiveKey="1" items={items} className="tabs" onChange={this.onTabsChange} />
        {key === '1' && (
          <form
            className="search_form"
            onChange={debounce((e) => {
              this.onTaskChange(e);
            }, 2000)}
          >
            <input type="text" className="search_input" placeholder="Type to search..." />
          </form>
        )}
      </header>
    );
  }
}

AppHeader.propTypes = {
  onLabel: PropTypes.func,
  onTabs: PropTypes.func,
};

AppHeader.defaultProps = {
  onLabel: () => {},
  onTabs: () => {},
};
