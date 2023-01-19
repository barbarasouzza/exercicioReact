import React, { useState } from 'react'
import './styles.css'

const Exercicio18 = () => {
  const [num, setNum] = useState("")
  const [polegadas, setPolegadas] = useState("")  

  const calculo = () => {
    setPolegadas(1000 * num)
  }

  return (
    <div className='container'>

      <div>
        <h1 className='text'>Exercício 18</h1>
        <h3 className='text'>Leia um valor em metros cúbicos apresente-o convertido para Litros</h3>

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

export default Exercicio18

