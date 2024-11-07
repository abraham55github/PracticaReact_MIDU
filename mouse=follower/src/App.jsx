import { useEffect, useState } from "react"

function App() {

  const [enable, setEnable] = useState(false);

  useEffect(() => {
    const handlemoved = (e) -> {
      const {clientX, clientY} = e
    }
  }, [])

  const handleClick = () => {
    setEnable(!enable)
  }

  return (

    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={handleClick}>{enable ? 'Desactivar' : 'Activar'} seguir puntero</button>

    </main >
  )
}

export default App
