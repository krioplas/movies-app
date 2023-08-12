import React from "react";
import "./appHeader.css";
import { debounce } from "lodash";
import "../../services/apiService";

export default class AppHeader extends React.Component {
  onTaskChange = (e) => {
    this.props.onLabel(e.target.value);
  };
  render() {
    return (
      <form
        className="search_form"
        onChange={debounce((e) => {
          this.onTaskChange(e);
        }, 2000)}
      >
        <input
          type="text"
          className="search_input"
          placeholder="Type to search..."
          autoFocus
        />
      </form>
    );
  }
}

//
