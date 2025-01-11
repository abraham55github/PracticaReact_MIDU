import { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMAGE_URL = 'https://catfact.ninja/fact'

export function App() {
    const [fact, setFact] = useState('lorem ipsum dolor sit amet, consectetur adipiscing');

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => setFact(data.fact))
    }, [])


    return (
        <main>
            <h1>App de gatitos</h1>
            <p>{fact}</p>

        </main>

    )
}
