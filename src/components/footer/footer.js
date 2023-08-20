import React from 'react';
import { Pagination } from 'antd/es';
import PropTypes from 'prop-types';
import './footer.css';

export default class ButtonFooter extends React.Component {
  onChange = (page) => {
    const { onFooterPage } = this.props;
    onFooterPage(page);
  };

  render() {
    const { totalRes } = this.props;
    if (totalRes === 0) {
      return null;
    }
    return (
      <div className="footPag">
        <Pagination defaultCurrent={1} total={totalRes} onChange={this.onChange} pageSize={20} />
      </div>
    );
  }
}
ButtonFooter.propTypes = {
  onFooterPage: PropTypes.func,
  totalRes: PropTypes.number,
};

ButtonFooter.defaultProps = {
  onFooterPage: () => {},
  totalRes: 0,
};
