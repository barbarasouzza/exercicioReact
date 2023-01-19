import React, { useState } from 'react'
import './styles.css'

const Exercicio15 = () => {
  const [num, setNum] = useState("")
  const [milhas, setMilhas] = useState("")  

  const calculo = () => {
    setMilhas(num * 180 / Math.PI)
  }

  return (
    <div className='container'>

      <div>
        <h1 className='text'>Exercício 15</h1>
        <h3 className='text'>Leia um ângulo em radianos e apresente-o convertido em graus</h3>

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
        <h4 className='texth'>{milhas}</h4>

      </div>

    </div>
  )
}

export default Exercicio15