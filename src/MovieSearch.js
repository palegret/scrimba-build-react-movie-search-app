import React from "react";

export default function MovieSearch() {
  return (
  <form className="form">
    <label htmlFor="query" className="label">Movie Name</label>
    <input type="text" className="input" name="query" placeholder="Enter movie title, e.g., 'Jurassic Park'" />
    <button type="submit" className="button">Search</button>
  </form>
  )
}
