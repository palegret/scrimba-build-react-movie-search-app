import React, {useState} from 'react';

import config from './config';

const handleError = (errorMessage, errorData) => {
  const { status_code, status_message } = errorData;
  const message = `\n\t💥 ${errorMessage} 💥 → (${status_code}) ${status_message}`;
  throw new Error(message);
};

// =============================================================================
// React useState hook
// https://reactjs.org/docs/hooks-state.html
//
// Hooks "...are a new addition in React 16.8. They let you use state and other 
// React features without writing a class."
// 
// Usage:
// const [query, setQuery] = useState('');
// 
// Breakdown:
// - useState(''): passes in default value for `query`, returns array
// - [query, setQuery]: destructured state variable and updater function
// =============================================================================

export default function MovieSearch() {
  const { apiUrl, apiKey, moviePosterUrl } = config;  

  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `${apiUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const response = await fetch(url);
      const data  = await response.json();    

      if (!response.ok)
        handleError('Unable to search for movies', data);

      setMovies(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">Movie Name</label>
        <input 
          type="text" 
          className="input" 
          name="query" 
          placeholder="Enter movie title, e.g., 'Jurassic Park'" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">Search</button>
      </form>
      <div className="card-list">
          {movies.filter(movie => movie.poster_path).map(movie => (
            <div className="card" key={movie.id}>
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
          ))}
      </div>
    </>
  )
}
