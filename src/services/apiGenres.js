const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGQxOTA0OGZiM2VlYTNiOTFlNzI5NTRhMjk2NDBlYyIsInN1YiI6IjY0Y2YwNTY2NmQ0Yzk3MDBjYjdkZjAwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_RcO3gorq2aFEMHrV3rkW8ajlSz-O28V7lfN9ttvAE",
  },
};

async function getMovieList() {
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=ru",
    options
  );
  if (!response.ok) {
    throw new Error(`Could not fetch, received ${response.status}`);
  }
  const body = await response.json();
  return body;
}

async function listOfGenres() {
  const genres = await getMovieList();
  return genres.genres;
}
let genres = await listOfGenres();
export { genres };
