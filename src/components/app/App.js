import React from "react";
import apiService from "../../services/apiService";
import "./App.css";

import AppHeader from "../appHeader/appHeader";
import RenderAllMovies from "../renderAllMovies/renderAllMovies";
import ButtonFooter from "../footer/footer";

export default class App extends React.Component {
  state = {
    title: [],
    label: "",
    loading: true,
    error: false,
    page: 1,
  };
  search = new apiService();
  onFooterPage = (footPage) => {
    this.setState({
      page: footPage,
    });
  };
  componentDidMount() {
    this.setState({ loading: false });
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.label !== prevState.label ||
      this.state.page !== prevState.page
    ) {
      this.setState({ loading: true });
      this.search
        .getAllFilms(this.state.page, this.state.label)
        .then((res) => {
          this.setState({ title: res, loading: false });
        })
        .catch(this.onError);
    }
  }

  onLabel = (text) => {
    this.setState({
      label: text,
    });
  };
  onError = (err) => {
    this.setState({ error: true, loading: false });
  };
  render() {
    return (
      <div className="app">
        <AppHeader
          onLabel={(text) => {
            this.onLabel(text);
          }}
        />
        <RenderAllMovies
          onError={this.onError}
          title={this.state.title}
          error={this.state.error}
          loading={this.state.loading}
        />
        <ButtonFooter
          onFooterPage={(page) => {
            this.onFooterPage(page);
          }}
          label={this.state.label}
          loading={this.state.loading}
        />
      </div>
    );
  }
}
