const url = 'https://api.themoviedb.org/3/';
const apiKey = 'api_key=84d19048fb3eea3b91e72954a29640ec';
export default class ApiService {
  async getResource(page, searchText) {
    const response = await fetch(
      `${url}search/movie?${apiKey}&query=${searchText}&include_adult=false&language=ru-RU&page=${page}`
    );
    if (!response.ok) {
      throw new Error(`Could not fetch, received ${response.status}`);
    }
    const getResource = await response.json();
    return getResource;
  }

  async ratedMovies(guestSessionId, page) {
    const response = await fetch(
      `${url}/guest_session/${guestSessionId}/rated/movies?${apiKey}&language=en-US&page=${page}&sort_by=created_at.asc`
    );
    if (!response.ok) {
      throw new Error(`Could not fetch, received ${response.status}`);
    }
    const ratedMovies = await response.json();
    return ratedMovies;
  }

  async guestSession() {
    const response = await fetch(`${url}authentication/guest_session/new?${apiKey}`);
    if (!response.ok) {
      throw new Error(`Could not fetch, received ${response.status}`);
    }
    const guestSession = await response.json();
    localStorage.setItem('guestSessionId', guestSession.guest_session_id);
    return guestSession;
  }

  async addRating(movieId, guestSessionId, rating) {
    const response = await fetch(`${url}movie/${movieId}/rating?${apiKey}&guest_session_id=${guestSessionId}`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        value: rating,
      }),
    });
    if (!response.ok) {
      throw new Error(`Could not fetch, received ${response.status}`);
    }
    const body = await response.json();
    return body;
  }
}
