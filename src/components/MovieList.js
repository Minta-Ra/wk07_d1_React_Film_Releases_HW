import Movie from './Movie';

// These {movies} is destructured, comes from ReleaseBox.js
// const MovieList = (props) =>
const MovieList = ({movies}) => {
    // const moviesNodes = props.movies.map((movie) =>
    const moviesNodes = movies.map((movie) => {
        return (
            // each child in a list should have a uniqule "key" prop
            <Movie key={movie.id} name={movie.name} url={movie.url}>{movie.name}</Movie>
        )
    });

    return (
        <>
            {moviesNodes}
        </>
    );
};

export default MovieList;