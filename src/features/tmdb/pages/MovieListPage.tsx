import { useState } from 'react';

import { useGetMoviesListQuery } from '../../../store';

import { useCounter } from '../hooks/useCounter';

import MainContainer from '../../../components/MainContainer/MainContainer';
import { SearchBar, MovieList } from '../components';
import { Movie } from '../../../types/movieAPI';

import { getMoviesQuery } from '../../../utils/urlHelpers';


const MovieListPage = () => {

  const [searchValue, setsearchValue] = useState<string>('');
  const { counter: page, addValueToCounter: setNewPage, resetCounter: resetPageCounter } = useCounter();


  const {
    data: movieList,
    isError: isErrorGetMovieList,
    error: errorMovieList,
    isLoading: isLoadingMovieList
  } = useGetMoviesListQuery(getMoviesQuery(page, searchValue));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setsearchValue(e.target.value);
    resetPageCounter();
  }

  const handlePageChange = (value: number): void => {
    const maxPageResult = movieList?.total_pages;
    if (maxPageResult && value > 0 && page >= maxPageResult) return;
    setNewPage(value)
  }


  return (
    <MainContainer>
      <SearchBar
        searchValue={searchValue}
        handleChangeValue={handleChange}
        resetSearchValue={setsearchValue}
      />
      {
        /** TODO: Create a generic Loader && Error Component */
      }
      {
        isLoadingMovieList
          ? (<p>Is Loading</p>)
          : isErrorGetMovieList
            ? (<pre>{JSON.stringify(errorMovieList)}</pre>)
            : <MovieList movieList={movieList?.results as Movie[]} voteEnabled={true} />
      }
      <button onClick={() => handlePageChange(-1)}>Previous</button>
      <button onClick={() => handlePageChange(1)}>Next</button>
    </MainContainer>
  );
}
export default MovieListPage;
