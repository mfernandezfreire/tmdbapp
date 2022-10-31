import { Movie } from '../../../types/movieAPI';
import { MovieCard } from './MovieCard';

interface MovieListProps {
  movieList: Movie[];
  voteEnabled: boolean,
}

export const MovieList = ({ movieList, voteEnabled }: MovieListProps) => {
  const movieListLenght = (movieList || []).length;
  // TODO: Add styles & No result Component
  return (
    <div
      style={
        {
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          minWidth: '100%',
        }
      }
    >
      {
        movieListLenght > 0
          ? (movieList || []).map((movie) => <MovieCard movie={movie} key={movie.id} voteEnabled={voteEnabled} />)
          : (
              <p>No existen resultados</p>
          )
      }

    </div>
  )
}

