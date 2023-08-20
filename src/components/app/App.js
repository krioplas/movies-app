import React from 'react';

import ApiService from '../../services/apiService';
import './App.css';
import AppHeader from '../appHeader/appHeader';
import RenderAllMovies from '../renderAllMovies/renderAllMovies';
import ButtonFooter from '../footer/footer';
import genres from '../../services/apiGenres';
import { ApiGenresProvider } from '../context/context';

export default class App extends React.Component {
  titleMovies;

  ratedTitleTotal;

  services = new ApiService();

  constructor() {
    super();
    this.state = {
      title: [],
      ratedTitle: [],
      label: '',
      loading: true,
      error: false,
      page: 1,
      totalRes: 0,
      ratedTitleTotal: 0,
      guestSessionId: '',
      tabs: '1',
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
    if (!localStorage.getItem('guestSessionId')) {
      this.services.guestSession().catch(this.onError);
    }
    this.setState({ guestSessionId: localStorage.getItem('guestSessionId') });
  }

  componentDidUpdate(prevProps, prevState) {
    const { label, page, tabs, guestSessionId } = this.state;
    if (label !== prevState.label || page !== prevState.page || tabs !== prevState.tabs) {
      this.setState({ loading: true });
      this.services
        .getResource(page, label)
        .then((res) => {
          this.setState({
            title: res.results,
            loading: false,
            totalRes: res.total_results,
          });
        })
        .catch(this.onError);
      if (guestSessionId !== '') {
        this.services
          .ratedMovies(guestSessionId, page)
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

  onTabs = (value) => {
    this.setState({
      tabs: value,
    });
  };

  onFooterPage = (footPage) => {
    this.setState({
      page: footPage,
    });
  };

  onLabel = (text) => {
    this.setState({
      label: text,
    });
  };

  onError = () => {
    this.setState({ error: true, loading: false });
  };

  render() {
    const { tabs, ratedTitleTotal, ratedTitle, title, totalRes, error, loading, guestSessionId } = this.state;
    if (tabs !== '1') {
      this.titleMovies = ratedTitle;
      this.ratedTitleTotal = ratedTitleTotal;
    } else {
      this.titleMovies = title;
      this.ratedTitleTotal = totalRes;
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
            error={error}
            loading={loading}
            tabs={tabs}
            guestSessionId={guestSessionId}
          />
          <ButtonFooter
            onFooterPage={(page) => {
              this.onFooterPage(page);
            }}
            totalRes={this.ratedTitleTotal}
          />
        </div>
      </ApiGenresProvider>
    );
  }
}
