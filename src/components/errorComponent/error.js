import React from "react";
import { Alert } from "antd";

export default class AlertMessage extends React.Component {
  render() {
    return (
      <Alert
        message="Error"
        description="Пожалуйста попробуйте перезагрузить страницу (Click: F5)."
        type="error"
        showIcon
      />
    );
  }
}
