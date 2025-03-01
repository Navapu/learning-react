const ListOfMovies = ({ movies }) => {
    return (
        <ul>
            {movies.map(movie => (
                <li key={movie.id}>
                    <h3>{movie.title}</h3>
                    <p>{movie.year}</p>
                    <img src={movie.poster} alt={movie.title} />
                </li>
            ))}
        </ul>
    )
}

const RenderNoResults = () => {
    return (
        <p>No results found</p>
    )
}

export function Movies({ movies }) {
    const hasMovies = movies?.length > 0
    return (
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <RenderNoResults />
    )
}