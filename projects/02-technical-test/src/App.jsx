import { useEffect, useState } from "react"
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
export function App(){
    const [fact, setFact] = useState()
    useEffect(() =>{
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
            const {fact} = data
            setFact(fact)
            
            
            
            const firstsWords = fact.split(' ', 3).join(' ')
            
            //Another way to take the first 3 words 
            // const firstsWords = fact.split(' ').slice(0, 3).join(' ')

            console.log(firstsWords)
        })
    }, [])
    return(
        <p>{fact}</p>
    )
}