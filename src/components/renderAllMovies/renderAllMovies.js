import React from "react";
import DataMovies from "../dataMovies/dataMovies";
import "./renderAllMovies.css";
import Loader from "../loader/loader";
import AlertMessage from "../errorComponent/error";

export default class RenderAllMovies extends React.Component {
  state = {
    error: false,
  };
  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    let { title, loading, error, onRate } = this.props;
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
        />
      </div>
    );
  }
}
