export default async function ratedMovies(guestSessionId, page) {
  const response = await fetch(
    `https://api.themoviedb.org/3/guest_session/${guestSessionId}/rated/movies?api_key=84d19048fb3eea3b91e72954a29640ec&page=${page}language=en-US&page=1&sort_by=created_at.asc`
  );
  if (!response.ok) {
    throw new Error(`Could not fetch, received ${response.status}`);
  }
  const body = await response.json();
  return body;
}
