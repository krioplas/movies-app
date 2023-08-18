import React from "react";
import "./voteAverage.css";
import PropTypes from "prop-types";
export default class VoteAverage extends React.Component {
  color;
  render() {
    if (this.props.value <= 3) {
      this.color = "color1 range_radius";
    } else if (this.props.value > 3 && this.props.value <= 5) {
      this.color = "color2 range_radius";
    } else if (this.props.value > 5 && this.props.value <= 7) {
      this.color = "color3 range_radius";
    } else if (this.props.value > 7) {
      this.color = "color4 range_radius";
    }
    return <div className={this.color}>{this.props.value.toFixed(1)}</div>;
  }
}
VoteAverage.propTypes = {
  value: PropTypes.number,
};

VoteAverage.defaultProps = {
  value: 0,
};
