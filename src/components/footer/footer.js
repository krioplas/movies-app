import React from "react";
import { Pagination } from "antd";

export default class ButtonFooter extends React.Component {
  onChange = (page) => {
    this.props.onFooterPage(page);
  };
  render() {
    let { label, loading } = this.props;
    if (label === "" && loading === false) {
      return null;
    }
    return (
      <Pagination defaultCurrent={1} total={50} onChange={this.onChange} />
    );
  }
}
