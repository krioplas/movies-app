import React from "react";
import DataMovies from "../dataMovies/dataMovies";
import "./renderAllMovies.css";
import Loader from "../loader/loader";
import AlertMessage from "../errorComponent/error";
import PropTypes from "prop-types";

export default class RenderAllMovies extends React.Component {
  state = {
    error: false,
  };
  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    let { title, loading, error, onRate, onError } = this.props;
    if (loading) {
      return <Loader />;
    }
    const errorMessage = error ? <AlertMessage /> : null;
    return (
      <div className="film_box">
        {errorMessage}
        <DataMovies
          title={title}
          loading={loading}
          onRate={onRate}
          guestSessionId={this.props.guestSessionId}
          onError={onError}
        />
      </div>
    );
  }
}
RenderAllMovies.propTypes = {
  onRate: PropTypes.func,
  title: PropTypes.array,
  loading: PropTypes.bool,
  guestSessionId: PropTypes.string,
  error: PropTypes.bool,
};

RenderAllMovies.defaultProps = {
  onRate: () => {},
  title: [],
  loading: false,
  error: false,
  guestSessionId: "",
};
