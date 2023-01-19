import React, { useState } from 'react'
import './styles.css'


const Exercicio04 = () => {
  const [num, setNum] = useState("")

  const [calcNum, setCalcNum] = useState("")

  const calculo = () => {
    setCalcNum(num ** 2)
  }

  return (
    <div className='container'>

      <div>
        <h1 className='text'>Exercício 04</h1>
        <h3 className='text'>Leia um número real e imprima o resultado do quadrado desse número</h3>

      </div>
      <div className='div'>
        <div className='conteiner'>
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
        <h2 className='texth4'>Resultado</h2>
        <h4 className='texth'>{calcNum}</h4>

      </div>
    </div>
  )
}

export default Exercicio04