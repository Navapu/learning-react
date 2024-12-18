import { useEffect, useState } from "react"
import { getRandomFact } from "./services/fact"
export function App() {

    function useCatImage({fact}) {
        const [image, setImage] = useState()

        useEffect(() => {
            if (fact) {
                const firstsWords = fact.split(' ', 3).join(' ')
                setImage(`https://cataas.com/cat/says/${firstsWords}?size=50&color=red`)
            }
    
        }, [fact])
        return image
    }

    const [fact, setFact] = useState()

    useEffect(() => {
        getRandomFact().then(setFact)
    }, [])

    

    const getFact = () => {
        getRandomFact().then(setFact)
    }

    const imageUrl = useCatImage({fact})
    return (
        <main className="catContainer">
            <h1 className="catFact">{fact}</h1>
            <button onClick={getFact}>Get a new Fact</button>
            <img src={imageUrl} className="catImage" />
        </main>
    )
}