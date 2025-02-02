import { useEffect, useState } from "react"
import 'App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://catfact.ninja/fact'

export function App() {
    const [fact, setFact] = useState('lorem ipsum dolor sit amet, consectetur adipiscing');
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
            const { fact } = data
            setFact(fact) 
            
            const threeFirstWords = fact.split(' ', 3).join('')
            console.log(threeFirstWords)

            fetch(`hhtps://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setImageUrl(url)
            })
        })
    }, [])


    return (
        <main>
            <h1>App de gatitos</h1>
            { fact && <p>{fact}</p>}
            {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the first three word for ${fact}`}/>}
            

        </main>

    )
}
