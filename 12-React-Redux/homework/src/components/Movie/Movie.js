import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import s from './Movie.module.css';



class Movie extends React.Component {

    componentDidMount (){
        const movieId = this.props.match.params.id
        this.props.getMovieDetail (movieId)
    }
    
    render() {
        return (
            <div className={s.container}>
                <img src={this.props.movieDetail.Poster} alt='imagen' />
                <div>
                    <h1>{this.props.movieDetail.Title}</h1>
                    <p>Año {this.props.movieDetail.Year}</p>
                    <p>Duracion: {this.props.movieDetail.Runtime}</p>
                    <p>Idiomas: {this.props.movieDetail.Language}</p>

                    <p>Resumen:</p>
                    <p> {this.props.movieDetail.Plot}</p>
                </div>
            </div>
        );
    }
}

function mapsStateToProps (state){
    return {
        movieDetail: state.movieDetail
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMovieDetail: movie => dispatch(getMovieDetail(movie)),
    };
}

export default connect(mapsStateToProps, mapDispatchToProps)(Movie)

