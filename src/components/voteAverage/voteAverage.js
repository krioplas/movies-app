import React from 'react';
import './voteAverage.css';
import PropTypes from 'prop-types';

export default class VoteAverage extends React.Component {
  color;

  render() {
    const { value } = this.props;
    if (value <= 3) {
      this.color = 'color1 range_radius';
    } else if (value > 3 && value <= 5) {
      this.color = 'color2 range_radius';
    } else if (value > 5 && value <= 7) {
      this.color = 'color3 range_radius';
    } else if (value > 7) {
      this.color = 'color4 range_radius';
    }
    return <div className={this.color}>{value.toFixed(1)}</div>;
  }
}
VoteAverage.propTypes = {
  value: PropTypes.number,
};

VoteAverage.defaultProps = {
  value: 0,
};
