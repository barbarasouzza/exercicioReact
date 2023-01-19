import React, { useState } from 'react'
import './styles.css'

const Exercicio20 = () => {
  const [num, setNum] = useState("")
  const [kg, setKg] = useState("")  

  const calculo = () => {
    setKg(num * 0.45)
  }

  return (
    <div className='container'>

      <div>
        <h1 className='text'>Exercício 20</h1>
        <h3 className='text'>Leia um valor em massa em kg e apresente-o convertido em libras</h3>

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
        <h4 className='texth'>{kg}</h4>

      </div>
 
    </div>
  )
}

export default Exercicio20

