const apiKey = "api_key=84d19048fb3eea3b91e72954a29640ec";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
  },
};

async function getMovieList() {
  const response = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=ru&${apiKey}`,
    options
  );
  if (!response.ok) {
    throw new Error(`Could not fetch, received ${response.status}`);
  }
  console.log(response.ok);
  const body = await response.json();
  return body;
}

async function listOfGenres() {
  const genres = await getMovieList();
  return genres.genres;
}
let genres = await listOfGenres();
export { genres };
