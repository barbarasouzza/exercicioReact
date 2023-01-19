import React, { useState } from 'react'
import './styles.css'

const Exercicio25 = () => {
  const [num, setNum] = useState("")
  const [acres, setAcres] = useState("")  

  const calculo = () => {
    setAcres(num * 4048.58)
  }

  return (
    <div className='container'>

      <div>
        <h1 className='text'>Exercício 25</h1>
        <h3 className='text'>Leia um valor de comprimento em acres e apresente-o convertido para metros quadrados</h3>

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

export default Exercicio25

