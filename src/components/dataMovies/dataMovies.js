import React from 'react';
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import './dataMovies.css';
import { Rate } from 'antd/es';

import Genres from '../genres/genres';
import ApiService from '../../services/apiService';
import VoteAverage from '../voteAverage/voteAverage';

export default class DataMovies extends React.Component {
  services = new ApiService();

  correctOverview = (text) => {
    if (text.length > 100) {
      let resText = text.split(' ', 20);
      resText = `${resText.join(' ')}...`;
      return resText;
    }
    return text;
  };

  render() {
    const { title, onError } = this.props;
    return title.map((el) => {
      const image = `https://image.tmdb.org/t/p/original${el.poster_path}`;
      let releaseDate = '';
      if (el.release_date !== '') {
        releaseDate = format(new Date(el.release_date), 'MMM dd, yyyy');
      } else {
        releaseDate = 'Нет данных';
      }
      const onChange = (gride) => {
        const { guestSessionId } = this.props;
        this.services.addRating(el.id, guestSessionId, gride).catch(onError);
      };
      return (
        <div className="comp_poster" key={el.id}>
          <img
            src={
              image !== 'https://image.tmdb.org/t/p/originalnull'
                ? image
                : 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uc4RAVW1T3T29h6OQdr7zu4Blui.jpg'
            }
            alt=""
            className="image_poster"
          />
          <div className="info_poster">
            <div className="info_head">
              <span className="info_header">{el.title}</span>
              <VoteAverage value={el.vote_average} />
            </div>
            <span className="date_release">{releaseDate}</span>
            <div className="genres">
              <Genres genreIds={el.genre_ids} />
            </div>
            <span className="overview_film">{this.correctOverview(el.overview)}</span>
            <br />
            <div className="rate">
              <Rate allowHalf onChange={onChange} count={10} defaultValue={el.rating} />
            </div>
          </div>
        </div>
      );
    });
  }
}
DataMovies.propTypes = {
  guestSessionId: PropTypes.string,
};

DataMovies.defaultProps = {
  guestSessionId: '',
};
