import { useEffect, useState } from "react"


export const FollowMouse = () => {
  const [enable, setEnable] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handlemoved = (e) => {
      const { clientX, clientY } = e
      console.log({ clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }

    if (enable) {
      window.addEventListener('mousemove', handlemoved)
    }

    return () => {
      window.removeEventListener('mousemove', handlemoved)
    }

  }, [enable])

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enable)

    return () => {
        document.body.classList.remove('no-cursor')
    }
  }, [enable])

  const handleClick = () => {
    setEnable(!enable)
  }

  return (
    <>
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
    </>
  )

}
