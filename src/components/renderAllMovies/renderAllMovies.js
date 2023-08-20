import React from 'react';

import DataMovies from '../dataMovies/dataMovies';
import './renderAllMovies.css';
import Loader from '../loader/loader';
import AlertMessage from '../errorComponent/error';

export default function RenderAllMovies(props) {
  const { title, loading, error, onError, guestSessionId } = props;
  if (loading) {
    return <Loader />;
  }
  const errorMessage = error ? <AlertMessage /> : null;
  return (
    <div className="film_box">
      {errorMessage}
      <DataMovies title={title} loading={loading} guestSessionId={guestSessionId} onError={onError} />
    </div>
  );
}

RenderAllMovies.defaultProps = {
  title: [],
  loading: false,
  error: false,
  guestSessionId: '',
};
