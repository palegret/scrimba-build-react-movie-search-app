import React from 'react';
import ReactDOM from 'react-dom';

import MovieSearch from './MovieSearch';

// Note: 
// See the following on dealing with 'Uncaught ReferenceError: 
// regeneratorRuntime is not defined' error when using async/await in code  
// while using Parcel. Needs appropriate browserslist property in package.json 
// or the .browserslistrc file.
//   
// Parcel: https://github.com/parcel-bundler/parcel/issues/2128
// Browserslist: https://github.com/browserslist/browserslist
// 
// package.json:
// "browserslist": [
//   "> 1%",
//   "last 2 versions",
//   "not ie <= 11",
//   "not dead"
// ],

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
