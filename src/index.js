import React from 'react';
import ReactDOM from 'react-dom';

// import config from './config';

import MovieSearch from './MovieSearch';


class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <MovieSearch />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
