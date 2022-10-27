export interface MovieSearchApiResult {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface AuthenticationApiResult {
  success: boolean;
  guest_session_id: string;
  expires_at: string;
}

export interface RateApiResult {
  success: boolean;
  status_code: number;
  status_message: string;
}
