import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'
import { useEffect, useRef, useState } from 'react'
import { useSearch } from './hooks/useSearch'
function App() {
  const {movies: mappedMovies} = useMovies()
  const inputRef = useRef()
  const {query, setQuery, error} = useSearch()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(inputRef.current.value)
  }
  const handleChange = (event) =>{
    setQuery(event.target.value)
  }

  return (
    <div className="page">
      <header>
        <h1>Search the movie</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={query} ref={inputRef} type="text" placeholder='Fight club, Star Wars, Pulp Fiction...' />
          <button>Search</button>
        </form>
        {error && <p style={{color: 'red'}}>{error}</p>}
      </header>
      <main>
        <Movies movies={mappedMovies} />
      </main>
    </div>
  )
}

export default App
