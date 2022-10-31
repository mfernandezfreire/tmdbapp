import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { TmdbSlice, rateMovie } from '../../../store';

import { Movie } from '../../../types/movieAPI';

import { getPosterUrl } from '../../../utils/urlHelpers';

import style from './movieCard.css';


interface MovieCardProps {
  movie: Movie;
  voteEnabled: boolean;
}

export const MovieCard = ({ movie, voteEnabled }: MovieCardProps) => {
  const { title, poster_path, id, vote_average, user_rate_value } = movie;
  const dispatch = useDispatch() as ThunkDispatch<TmdbSlice, unknown, AnyAction>;
  const [voteValue, setvoteValue] = useState<string>('0');
  const [error, setErrorMessage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const vote = Number(voteValue);
    if (vote < 1 || vote > 10) return setErrorMessage('Vota de 1 a 10')
    dispatch(rateMovie(id, vote, movie));
    setErrorMessage('')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setvoteValue(e.target.value);
  }

  // TODO: Add styles & Error component
  return (
    <div
      className="card"
      style={{
        border: '1px solid black',
        maxWidth: '15rem',
        margin: '1rem'
      }}
    >
      <img
        className="card-img-top"
        style={{
          maxWidth: '15rem',
        }}
        src={getPosterUrl(poster_path)} alt="Card image cap"
      />
      <div className="card-body">
        <h5
          className="card-title"
          style={{ fontSize: '1.5 rem' }}
        >
          {title}
        </h5>
        {
          voteEnabled
            ? (
              <form onSubmit={(e) => handleSubmit(e)} >
                <input
                  value={voteValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
                  style={{
                    maxWidth: '3rem',
                  }}
                />
                <button type='submit'>Vota</button>
              </form>
            )
            : (
              <>
                <p>voto promedio: {vote_average}</p>
                <p>voto usuario: {user_rate_value}</p>
              </>
            )
        }
        <p style={{ fontSize: '0.75 rem' }}>{error}</p>
      </div>
    </div>
  )
};
