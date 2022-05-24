import React, { Component } from "react";
import { connect } from "react-redux";
import s from './Buscador.module.css';
import { getMovies } from "../../actions";
import MovieList from './Movies'



export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies (this.state.title)
    this.setState({title: ''})
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className={s.formContainer} onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className={s.label} htmlFor="title">Película: </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <div className={s.container} >
          {this.props.movies.map (movie => 
            <MovieList 
              title={movie.Title} 
              img={movie.Poster} 
              id={movie.imdbID} 
              key={movie.imdbID} 
            />
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.loadedMovies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovies: title => dispatch(getMovies(title))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador)
