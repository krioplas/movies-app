import React from 'react';
import { Space, Spin } from 'antd';
import './loader.css';

export default function Loader() {
  return (
    <Space className="loader_space">
      <Spin />
    </Space>
  );
}
