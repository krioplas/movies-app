import React from "react";
import { Alert } from "antd";
import "./error.css";

export default class AlertMessage extends React.Component {
  render() {
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
}
