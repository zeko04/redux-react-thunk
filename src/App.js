import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { fetchingMovies } from './actions/moviesAction';

class App extends Component {

  componentDidMount(){
      this.props.onApiRequest('vik');
  }

  moviesList = (movies) => (
    movies.map( movie => (
      <div key={movie.imdbID}>
        <h4>{movie.Title}</h4>
        <p>Year of relese: {movie.Year}</p>
      </div>
    ))
  )

  fetchMovies = e => {
    this.props.onApiRequest(e.target.value);
  }

  render() {
    const { movies, massage } = this.props.movies;
    console.log(movies, massage)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h3>New movie db</h3>
        <input onChange={this.fetchMovies} />
        <h3>{massage}</h3>
        {this.moviesList(movies)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    movies: state.movies
  }

}

const mapActionsToProps = {
  onApiRequest: fetchingMovies
}

export default connect( mapStateToProps, mapActionsToProps)(App)

// const mapActionsToProps = (dispatch, props) => {
//   console.log(props)
//   return bindActionCreators( {
//     onUpdateUser: updateUser
//   }, dispatch )
// }

// const mergeProps = ( propsFromTheState, propsFromDispatch, ownProps ) => {
//   console.log(propsFromTheState, propsFromDispatch, ownProps)
//   return {};
// }

// export default connect( mapStateToProps, mapActionsToProps, mergeProps )(App);

