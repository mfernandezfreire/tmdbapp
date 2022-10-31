const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const getPosterUrl = (posterPath: string) => {
  return `https://image.tmdb.org/t/p/original${posterPath}`;
}

export const getMoviesQuery = (page: number, movieToSearch?: string) => {
  if (movieToSearch && movieToSearch.length > 0) {
    return `search/movie/?api_key=${TMDB_API_KEY}&language=es-ES&query=${movieToSearch}&page=${page}&include-adult=false`
  }
  return `movie/popular/?api_key=${TMDB_API_KEY}&language=es-ES&page=${page}`
}

export const getAuthenticationQuery = () => {
  return `/authentication/guest_session/new?api_key=${TMDB_API_KEY}`
}

export const getRateQuery = (
  movieId: number,
  token?: string,
) => {
  return `/movie/${movieId}/rating?api_key=${TMDB_API_KEY}&guest_session_id=${token}`;
}
