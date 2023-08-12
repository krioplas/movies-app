import React from "react";
import { format } from "date-fns";
import "./dataMovies.css";

export default class DataMovies extends React.Component {
  correctOverview = (text) => {
    if (text.length > 100) {
      let resText = text.split(" ", 20);
      resText = resText.join(" ") + "...";
      return resText;
    }
    return text;
  };
  render() {
    const { title } = this.props;
    return title.map((el) => {
      let image = `https://image.tmdb.org/t/p/original${el.poster_path}`;
      let releaseDate = "";
      if (el.release_date !== "") {
        releaseDate = format(new Date(el.release_date), "MMM dd, yyyy");
      } else {
        releaseDate = "Нет данных";
      }
      return (
        <div className="comp_poster" key={el.id}>
          <img
            src={
              image !== "https://image.tmdb.org/t/p/originalnull"
                ? image
                : "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/uc4RAVW1T3T29h6OQdr7zu4Blui.jpg"
            }
            alt=""
            className="image_poster"
          />
          <div className="info_poster">
            <h3>{el.title}</h3>
            <span className="date_release">{releaseDate}</span>
            <div>
              <div className="rectangle">Action</div>
            </div>
            <span className="overview_film">
              {this.correctOverview(el.overview)}
            </span>
          </div>
        </div>
      );
    });
  }
}
