import React, { useState } from 'react'
import './styles.css'

const Exercicio24 = () => {
  const [num, setNum] = useState("")
  const [acres, setAcres] = useState("")  

  const calculo = () => {
    setAcres(num * 0.000247)
  }

  return (
    <div className='container'>

      <div>
        <h1 className='text'>Exercício 24</h1>
        <h3 className='text'>Leia um valor de comprimento em metros quadrados e apresente-o convertido para acres</h3>

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
        <h4 className='texth'>{acres}</h4>

      </div>
 
    </div>
  )
}

export default Exercicio24

