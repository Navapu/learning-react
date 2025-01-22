import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useRef } from 'react'

function App() {
  const {movies: mappedMovies} = useMovies()
  const inputRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(inputRef.current.value)
  }
  return (
    <div className="page">
      <header>
        <h1>Search the movie</h1>
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} type="text" placeholder='Fight club, Star Wars, Pulp Fiction...' />
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
