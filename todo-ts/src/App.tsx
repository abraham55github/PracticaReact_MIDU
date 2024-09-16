import { useState } from "react"
import { Todos } from "./components/Todos"

const mockTodos = [
  {
    id: '1',
    title: 'Primer tarea',
    completed: false,
  },
  {
    id: '2',
    title: 'segunda tarea',
    completed: false,
  },
  {
    id: '3',
    title: 'tercera tarea',
    completed: false,
  }
]

//JSX.Element para retornar todo en jsx elementos

const App = (): JSX.Element => {
  const [todos] = useState(mockTodos)
  
  return (
    <>
      <Todos todos={todos} />

    </>
  )
}

export default App
