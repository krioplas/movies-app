import React from "react";
import { Space, Spin } from "antd";
import "./loader.css";

export default class Loader extends React.Component {
  render() {
    return (
      <Space className="loader_space">
        <Spin />
      </Space>
    );
  }
}
