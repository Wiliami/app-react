import './App.css'

import { useState, type ChangeEvent } from 'react'

export default function App() {
  const [search, setSearch] = useState('')

  function onSearchInputChanged(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
  }

  return (
    <div>
      <input type="text" onChange={onSearchInputChanged} placeholder='Buscar...'/>
      {search}
    </div>
  )
} 