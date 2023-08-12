import React from "react";
import DataMovies from "../dataMovies/dataMovies";
import "./renderAllMovies.css";
import Loader from "../loader/loader";
import AlertMessage from "../errorComponent/error";

export default class RenderAllMovies extends React.Component {
  render() {
    let { title, loading, error } = this.props;
    if (loading) {
      return <Loader />;
    }
    const errorMessage = error ? <AlertMessage /> : null;
    return (
      <div className="film_box">
        {errorMessage}
        <DataMovies title={title} loading={loading} />
      </div>
    );
  }
}
