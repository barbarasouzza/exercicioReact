import React, { useState } from 'react'
import './styles.css'


const Exercicio03 = () => {
  const [num, setNum] = useState("")
  const [num2, setNum2] = useState("")
  const [num3, setNum3] = useState("")

  const [calcNum, setCalcNum] = useState("")

  const calculo = () => {
    setCalcNum(Number(num) + Number(num2) + Number(num3))
  }

  return (
    <div className='container'>

      <div>
        <h1 className='text'>Exercício 03</h1>
        <h3 className='text'>Um programa que faça a soma de 3 valores inteiros e imprima a soma deles</h3>

      </div>
      <div className='div'>
        <div className='conteiner'>
          <input
            className='input'
            type='number'
            placeholder='Insira o valor 1 aqui'
            onChange={e => setNum(e.target.value)}
          />
          <input
            className='input'
            type='number'
            placeholder='Insira o valor 2 aqui'
            onChange={e => setNum2(e.target.value)}
          />
          <input
            className='input'
            type='number'
            placeholder='Insira o valor 3 aqui'
            onChange={e => setNum3(e.target.value)}
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

export default Exercicio03