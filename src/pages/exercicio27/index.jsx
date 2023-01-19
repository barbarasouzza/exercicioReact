import React, { useState } from 'react'
import './styles.css'

const Exercicio27 = () => {
  const [num, setNum] = useState("")
  const [hectares, setHectares] = useState("")  

  const calculo = () => {
    setHectares(num * 10000)
  }

  return (
    <div className='container'>

      <div>
        <h1 className='text'>Exercício 27</h1>
        <h3 className='text'>Leia um valor de comprimento em hectares s e apresente-o convertido para metros quadrado</h3>

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
        <h4 className='texth'>{hectares}</h4>

      </div>
 
    </div>
  )
}

export default Exercicio27

