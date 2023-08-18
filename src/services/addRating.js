export default async function addRating(movieId, guestSessionId, rating) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/rating?api_key=84d19048fb3eea3b91e72954a29640ec&guest_session_id=${guestSessionId}`,
    {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json;charset=utf-8",
        // Authorization:
        //   "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGQxOTA0OGZiM2VlYTNiOTFlNzI5NTRhMjk2NDBlYyIsInN1YiI6IjY0Y2YwNTY2NmQ0Yzk3MDBjYjdkZjAwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_RcO3gorq2aFEMHrV3rkW8ajlSz-O28V7lfN9ttvAE",
      },
      body: JSON.stringify({
        value: rating,
      }),
    }
  );
  if (!response.ok) {
    console.log(response);
    throw new Error(`Could not fetch, received ${response}`);
  }
  const body = await response.json();
  return body;
}
