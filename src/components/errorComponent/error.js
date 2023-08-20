import React from 'react';
import { Alert } from 'antd';
import './error.css';

export default function AlertMessage() {
  return (
    <Alert
      className="alert"
      message="Error"
      description="Пожалуйста попробуйте перезагрузить страницу (Click: F5)."
      type="error"
      showIcon
    />
  );
}
