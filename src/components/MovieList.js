import Movie from './Movie';

// These {movies} is destructured, comes from ReleaseBox.js
// const MovieList = (props) =>
const MovieList = ({movies}) => {
    // const moviesNodes = props.movies.map((movie) =>
    const moviesNodes = movies.map((movie) => {
        return (
            // each child in a list should have a uniqule "key" prop
            <li key={movie.id}>
                <a href={movie.url}>{movie.name}</a>
            </li>
        )
    });

    return (
        <>
            {moviesNodes}
        </>
    );
};

export default MovieList;