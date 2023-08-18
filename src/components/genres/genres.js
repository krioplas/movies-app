import React from "react";
import "./genres.css";
import PropTypes from "prop-types";
import { ApiGenresConsumer } from "../context/context";

export default class Genres extends React.Component {
  render() {
    let { genreIds } = this.props;
    return (
      <ApiGenresConsumer>
        {(genres) => {
          return genres.map((el) => {
            let genre;
            if (genreIds.includes(el.id)) {
              genre = el.name;
              return (
                <div className="rectangle" key={el.id}>
                  {genre}
                </div>
              );
            }
            return genre;
          });
        }}
      </ApiGenresConsumer>
    );
  }
}
Genres.propTypes = {
  genreIds: PropTypes.array,
};

Genres.defaultProps = {
  genreIds: [],
};
