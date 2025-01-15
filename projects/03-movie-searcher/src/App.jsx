import './App.css'
import responseMovies from './mocks/with-results.json'
import { Movies } from './components/Movies'
function App() {
  const movies = responseMovies.Search

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
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
