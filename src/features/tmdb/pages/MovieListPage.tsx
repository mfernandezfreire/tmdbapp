import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import MainContainer from '../../../components/MainContainer/MainContainer';
import { useGetMoviesListQuery, RootState, setNewPage } from '../../../store';
import { Movie } from '../../../types/movieAPI';

const MovieListPage = () => {

  const dispatch = useDispatch();
  const { page } = useSelector((state: RootState) => state.tmdb)
  const { data: movieList, isError, error, isLoading } = useGetMoviesListQuery(page);

  const handlePageChange = (value: number) => {
    let newPageValue = page + value;
    dispatch(setNewPage(Math.max(newPageValue, 1)));
  }

  const list = (movieList?.results || [])
    .map((movie: Movie) => <li>
      {movie.title}
    </li>)

  return (
    <MainContainer>
      {
        isLoading
          ? (<p>Is Loading</p>)
          : isError
            ? (<pre>{JSON.stringify(error)}</pre>)
            : <ul>{list}</ul>
      }
      <button onClick={() => handlePageChange(-1)}>Previous</button>
      <button onClick={() => handlePageChange(1)}>Next</button>
    </MainContainer>
  );
}
export default MovieListPage;
