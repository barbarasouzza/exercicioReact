import React, { useState } from 'react'
import './styles.css'

const Exercicio21 = () => {
  const [num, setNum] = useState("")
  const [kg, setKg] = useState("")  

  const calculo = () => {
    setKg(num /  2.2046)
  }

  return (
    <div className='container'>

      <div>
        <h1 className='text'>Exercício 21</h1>
        <h3 className='text'>Leia um valor em massa em libras e apresente-o convertido em kg</h3>

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

export default Exercicio21

