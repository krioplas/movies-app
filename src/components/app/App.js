import React from "react";
import apiService from "../../services/apiService";
import "./App.css";

import AppHeader from "../appHeader/appHeader";
import RenderAllMovies from "../renderAllMovies/renderAllMovies";
import ButtonFooter from "../footer/footer";
import { genres } from "../../services/apiGenres";
import { ApiGenresProvider } from "../context/context";

export default class App extends React.Component {
  state = {
    title: [],
    ratedTitle: [],
    genres: {},
    label: "",
    loading: true,
    error: false,
    page: 1,
    rate: 0,
    totalRes: 0,
    ratedTitleTotal: 0,
    guest_session_id: "",
    tabs: "1",
  };
  services = new apiService();
  titleMovies;
  ratedTitleTotal;
  onFooterPage = (footPage) => {
    this.setState({
      page: footPage,
    });
  };
  onTabs = (value) => {
    this.setState({
      tabs: value,
    });
  };
  componentDidMount() {
    this.setState({ loading: false });
    if (!localStorage.getItem("guestSessionId")) {
      this.services.guestSession().catch(this.onError);
    }
    this.setState({ guest_session_id: localStorage.getItem("guestSessionId") });
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.state.label !== prevState.label ||
      this.state.page !== prevState.page ||
      this.state.tabs !== prevState.tabs
    ) {
      console.log(this.state.title);
      this.setState({ loading: true });
      this.services
        .getResource(this.state.page, this.state.label)
        .then((res) => {
          this.setState({
            title: res.results,
            loading: false,
            totalRes: res.total_results,
          });
        })
        .catch(this.onError);
      if (this.state.guest_session_id !== "") {
        this.services
          .ratedMovies(this.state.guest_session_id, this.state.page)
          .then((res) => {
            this.setState({
              ratedTitle: res.results,
              ratedTitleTotal: res.total_results,
            });
          })
          .catch(this.onError);
      }
    }
  }

  onLabel = (text) => {
    this.setState({
      label: text,
    });
  };
  onRate = (grade) => {
    this.setState({ rate: grade });
  };
  onError = (err) => {
    this.setState({ error: true, loading: false });
  };
  render() {
    if (this.state.tabs !== "1") {
      this.titleMovies = this.state.ratedTitle;
      this.ratedTitleTotal = this.state.ratedTitleTotal;
    } else {
      this.titleMovies = this.state.title;
      this.ratedTitleTotal = this.state.totalRes;
    }

    return (
      <ApiGenresProvider value={genres}>
        <div className="app">
          <AppHeader
            onLabel={(text) => {
              this.onLabel(text);
            }}
            onTabs={(value) => {
              this.onTabs(value);
            }}
          />
          <RenderAllMovies
            onError={this.onError}
            title={this.titleMovies}
            error={this.state.error}
            loading={this.state.loading}
            onRate={(grade) => {
              this.onRate(grade);
            }}
            tabs={this.state.tabs}
            guestSessionId={this.state.guest_session_id}
          />
          <ButtonFooter
            onFooterPage={(page) => {
              this.onFooterPage(page);
            }}
            label={this.state.label}
            loading={this.state.loading}
            totalRes={this.ratedTitleTotal}
          />
        </div>
      </ApiGenresProvider>
    );
  }
}
