export default class apiService {
  async getResource(page, searchText) {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=84d19048fb3eea3b91e72954a29640ec&query=${searchText}&include_adult=false&language=ru-RU&page=${page}`
    );
    if (!response.ok) {
      throw new Error(`Could not fetch, received ${response.status}`);
    }
    const body = await response.json();
    return body;
  }
  async getAllFilms(page, searchText) {
    const allFilm = await this.getResource(page, searchText);
    return allFilm;
  }
}
