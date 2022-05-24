import { ADD_FAVORITE_MOVIE } from "../actions";
import { REMOVE_FAVORITE_MOVIE } from "../actions";
import { GET_MOVIES } from "../actions";
import { GET_MOVIE_DETAIL } from "../actions";


const initialState = {
    favoritesMovies: [],
    loadedMovies: [],
    movieDetail: {}
};

export default function rootReducer (state = initialState, action){
    switch (action.type) {
        case ADD_FAVORITE_MOVIE:
            if (state.favoritesMovies[0]) {
            const other = state.favoritesMovies.filter ( movie => action.payload.id !== movie.id)
            return {
                    ...state,
                    favoritesMovies: [...other, action.payload]
            }} else{
                return {
                    ...state,
                    favoritesMovies: [...state.favoritesMovies, action.payload]
            }}
        case REMOVE_FAVORITE_MOVIE:
            return {
                ...state,
                favoritesMovies: state.favoritesMovies.filter ( m => m.id !==action.payload.id)
            }
        case GET_MOVIES:
            return {
                ...state,
                loadedMovies: action.payload.Search
            }
        case GET_MOVIE_DETAIL:
            return {
                ...state,
                movieDetail: action.payload
            }
        default:
            return state;
    }
}