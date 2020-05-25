import React from "react";

import config from './config';

const handleError = (errorMessage, errorData) => {
  const { status_code, status_message } = errorData;
  const message = `\n\t💥 ${errorMessage} 💥 → (${status_code}) ${status_message}`;
  throw new Error(message);
};

const searchMovies = async (e) => {
  e.preventDefault();

  const query = "Jurassic Park";
  
  const { apiUrl, apiKey } = config;  
  const url = `${apiUrl}/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`;

  try {
    const response = await fetch(url);
    const data  = await response.json();    

    if (!response.ok)
      handleError('Unable to search for movies', data);

    console.dir(data.results);
  } catch (error) {
    console.error(error);
  }
}

export default function MovieSearch() {
  return (
  <form className="form" onSubmit={searchMovies}>
    <label htmlFor="query" className="label">Movie Name</label>
    <input type="text" className="input" name="query" placeholder="Enter movie title, e.g., 'Jurassic Park'" />
    <button type="submit" className="button">Search</button>
  </form>
  )
}
