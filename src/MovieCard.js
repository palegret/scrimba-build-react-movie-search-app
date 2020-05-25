import React from 'react';

import config from './config';

export default function MovieSearch(props) {
  const { movie } = props;  
  const { moviePosterUrl } = config;

  return (
    <div className="card">
      <img className="card--image"
        src={`${moviePosterUrl}/${movie.poster_path}`}
        alt={`Movie poster for '${movie.title}'`}
      />
      <div className="card--content">
        <h3 className="card--title">{movie.title}</h3>
        <p><small>RELEASE DATE: {movie.release_date}</small></p>
        <p><small>RATING: {movie.vote_average}</small></p>
        <p className="card--desc">{movie.overview}</p>
      </div>
    </div>
  )
}
