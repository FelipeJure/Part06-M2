import apikey from '../apikey'

export const ADD_FAVORITE_MOVIE = 'ADD_FAVORITE_MOVIE'
export const GET_MOVIES = 'GET_MOVIES'
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL'
export const REMOVE_FAVORITE_MOVIE = 'REMOVE_FAVORITE_MOVIE'


export function addFavoriteMovie(movie) {
    return { type: ADD_FAVORITE_MOVIE, payload: movie };
}

export function removeFavoriteMovie(movie) {
    return { type: REMOVE_FAVORITE_MOVIE, payload: movie };
}

export function getMovies(titulo) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=${apikey}&s=${titulo}`)
        .then(response => response.json())
        .then(json => {
          if (json.Search){
          dispatch({ type: GET_MOVIES, payload: json });
          } else { alert('Movie not found')}
        })
        .catch (error => console.log(error));
    };
}

export function getMovieDetail (idMovie){
    return function (dispatch) {
        return fetch (`https://www.omdbapi.com/?apikey=${apikey}&i=${idMovie}`)
        .then(res => res.json())
        .then(movie => {
          dispatch({ type: GET_MOVIE_DETAIL, payload: movie });
        })
        .catch (error => console.log (error));
    }
}