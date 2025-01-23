import { useEffect, useState } from 'react'

export function useSearch (){
  const [query, setQuery] = useState('')
  const [error, setError] = useState(null)

  useEffect(() =>{
    if(query == ''){
      setError("Can't search for an empty movie")
      return
    }

    if(query.match(/^\d+$/)){
      setError("Can't search for a movie with a number")
      return
    }
    if(query.length < 3 ){
      setError("The search must be at least 3 characters")
      return
    }

    setError(null)
  }, [query])
  return {query, setQuery, error}
}