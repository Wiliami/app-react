import './App.css'
import { useCounter } from './hooks/useCounter'
import { Users } from './pages/users'

export default function App() {
  // const { count, increment } = useCounter();

  return (
    // <>
    //   <p>{count}</p>
    //   <button onClick={increment}>Adicionar</button>
    // </>

    <Users />
  )
} 