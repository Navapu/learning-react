import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'


function App() {
  const {movies: mappedMovies} = useMovies()
  return (
    <div className="page">
      <header>
        <h1>Search the movie</h1>
        <form action="">
          <input type="text" placeholder='Fight club, Star Wars, Pulp Fiction...' />
          <button>Search</button>
        </form>
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
