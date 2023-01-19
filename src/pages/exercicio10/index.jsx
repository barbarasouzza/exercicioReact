import React, { useState } from 'react'
import './styles.css'

const Exercicio10 = () => {
  const [num, setNum] = useState("")
  const [metros, setMetros] = useState("")  

  const calculo = () => {
    setMetros(num / 3.6)
  }

  return (
    <div className='container'>

      <div>
        <h1 className='text'>Exercício 10</h1>
        <h3 className='text'>Leia uma velocidade em km/h e apresente-a convertida em m/s</h3>

      </div>
      <div className='div'>
        <div className='container6'>
          <input
            className='input'
            type='number'
            placeholder='Insira o valor aqui'
            onChange={e => setNum(e.target.value)}
          />

          <button
            className='button'
            onClick={calculo}
          >
            Calcular
          </button>

        </div>

      </div>
      <div>
        <h2 className='text6'>Resultado</h2>
        <h4 className='texth'>{metros}</h4>

      </div>
    </div>
  )
}

export default Exercicio10