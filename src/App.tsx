import './App.css'


interface ButtonProps {
  texto: string
}

function Button(props: ButtonProps) {
  return <button>{props.texto}</button>
}

export default function App() {

  return (
    <div>
      <Button texto='Clique aqui' />
      <Button texto='Texto 2'/>
      <Button texto='Texto de número 3' />
    </div>
  )
} 