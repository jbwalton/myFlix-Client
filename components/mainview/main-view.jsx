import React from 'react';
import { MovieCard } from '../moviecard/movie-card';
import { MovieView } from '../movieview/movie-view';
export class MainView extends React.Component {

    constructor(){
        super();
        this.state={
            movies: [
                {_id:1, Title:'Inception', Description:'desc1...', ImagePath: '...'},
                {_id:2, Title:'The Shawshank Redemption', Decription:'desc2...', ImagePath: '...'},
                {_id:3, Title:'Gladiator', Description:'desc3...', ImagePath: '...'}
            ],
            selectedMOvie: null
            };
        }
         setSelectedMovie(newSelectedMovie) {
             this.setState({
             selectedMovie: newSelectedMovie
            });
        }
            
        
    
    render() {
        const {movies, selectedMovie} = this.state;

        if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
        
        return (
            <div className="main-view">
                {selectedMovie
                  ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>
                : movies.map(movie => (
                <MovieCard key={movie._id} movie={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }}/>
                ))
                }
            </div>
        );
    }
}
