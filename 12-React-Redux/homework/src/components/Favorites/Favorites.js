import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import s from './Favorites.module.css';
import MovieList from "../Buscador/Movies";

export class ConnectedList extends Component {

  render() {
    return (
      <>
        <h2>Películas Favoritas</h2>
        <div className={s.container}>
          {this.props.favoritesMovies.map (movie => {
          return (
            <MovieList 
              id={movie.id} 
              key={movie.id} 
              img={movie.img} 
              title={movie.title}
            />
          )})
          }
        </div>
      </>
    );
  }
}

function mapsStateToProps (state){
  return {
    favoritesMovies: state.favoritesMovies
  }
}

export default connect (mapsStateToProps, null) (ConnectedList);
