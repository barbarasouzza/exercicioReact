import React, { useState } from 'react'
import './styles.css'

const Exercicio16 = () => {
  const [num, setNum] = useState("")
  const [polegadas, setPolegadas] = useState("")  

  const calculo = () => {
    setPolegadas(num * 2.54)
  }

  return (
    <div className='container'>

      <div>
        <h1 className='text'>Exercício 16</h1>
        <h3 className='text'>Leia um valor de comprimento em polegadas e apresente-o convertido para centímetros</h3>

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
        <h4 className='texth'>{polegadas}</h4>

      </div>

    </div>
  )
}

export default Exercicio16