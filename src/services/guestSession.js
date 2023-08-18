const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGQxOTA0OGZiM2VlYTNiOTFlNzI5NTRhMjk2NDBlYyIsInN1YiI6IjY0Y2YwNTY2NmQ0Yzk3MDBjYjdkZjAwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p_RcO3gorq2aFEMHrV3rkW8ajlSz-O28V7lfN9ttvAE",
  },
};
export default async function guestSession() {
  const response = await fetch(
    `https://api.themoviedb.org/3/authentication/guest_session/new`,
    options
  );
  if (!response.ok) {
    throw new Error(`Could not fetch, received ${response.status}`);
  }
  const body = await response.json();
  return body;
}
