export const getRandomFact = async () => {
    const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
    const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await res.json()
    const { fact } = data
    return fact
}
