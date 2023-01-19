import React, { useState } from 'react'
import './styles.css'

const Exercicio07 = () => {
  const [num, setNum] = useState("")
  const [graus, setGraus] = useState("")

  const calculo = () => {
    setGraus((num - 32) * (5 / 9)) 
  }

  return (
    <div className='container'>

      <div>
        <h1 className='text'>Exercício 07</h1>
        <h3 className='text'>Leia uma temperatura em graus Fahrenheit e apresente-a convertida em graus Celsius</h3>

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
        <h4 className='texth'>{graus}</h4>

      </div>
    </div>
  )
}

export default Exercicio07