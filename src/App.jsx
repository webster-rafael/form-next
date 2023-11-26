import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div className="container">
      <h1>Formulário</h1>
      <form action="http://localhost:3000/enviar-email" method="POST" encType="multipart/form-data">
        {/* Seus campos de formulário */}
        <input type="text" name="Name" placeholder="Nome Completo" required />
        <input type="email" name="Email" placeholder="Email" required />
        <input type="file" name="Documento" id="file" accept="image/*" />
        <p>Selecione seu documento de identificação CNH/RG</p>
        <label htmlFor="file" id="label-file">
          <p>Carregar Documento</p> <span className="material-icons"></span>
        </label>
        <label htmlFor="Adotar" id="label-porte">
          <p>Pets para Adoção:</p>
          <select name="Adotar">
            <option>Selecione um Pet</option>
            <option>Jhenny</option>
            <option>Cigana</option>
            <option>Kiara</option>
            <option>Rubi</option>
            <option>Esperança</option>
            <option>Nega</option>
            <option>Marry</option>
            <option>Livia</option>
            <option>Filhote</option>
            <option>Shitaraa</option>
            <option>Agina</option>
            <option>Lili Caramelo</option>
            <option>Baby</option>
            <option>Florinda</option>
            <option>Yana</option>
            <option>Narcisa.</option>
          </select>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
    </>
  )
}

export default App
