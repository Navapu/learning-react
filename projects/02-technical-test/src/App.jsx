import { useEffect, useState } from "react"
import { getRandomFact } from "./services/fact"
export function App() {
    const [fact, setFact] = useState()
    const [image, setImage] = useState()
    useEffect(() => {
       getRandomFact().then(setFact)
    }, [])

    useEffect(() => {
        if (fact) {
            const firstsWords = fact.split(' ', 3).join(' ')
            setImage(`https://cataas.com/cat/says/${firstsWords}?size=50&color=red`)
        }

    }, [fact])
    
    const getFact = () => {
        getRandomFact().then(setFact)
    }
    return (
        <main className="catContainer">
            <h1 className="catFact">{fact}</h1>
            <button onClick={getFact}>Get a new Fact</button>
            <img src={image} className="catImage" />
        </main>
    )
}