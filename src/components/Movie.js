
const Movie = ({name, children}) => {
    return (
        <>
            <h4>{name}</h4>
            <p>{children}</p>
        </>
    );
};

export default Movie;