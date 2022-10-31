import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

import MainContainer from '../../../components/MainContainer/MainContainer';
import { MovieList } from '../components/MovieList';

import { Movie } from '../../../types/movieAPI';

const MoviesRated = () => {
  const moviesRated = useSelector<RootState>((store) => store.guestUserSlice.moviesRated);
  return (
    <MainContainer>
      <MovieList movieList={moviesRated as Movie[]} voteEnabled={false} />
    </MainContainer>)
};

export default MoviesRated;
