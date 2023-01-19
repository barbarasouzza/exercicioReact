import React, { useState } from 'react'
import './styles.css'

const Exercicio23 = () => {
  const [num, setNum] = useState("")
  const [jardas, setJardas] = useState("")  

  const calculo = () => {
    setJardas(1.094 * num)
  }

  return (
    <div className='container'>

      <div>
        <h1 className='text'>Exercício 23</h1>
        <h3 className='text'>Leia um valor de comprimento em metros e apresente-o convertido para jardas</h3>

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
        <h4 className='texth'>{jardas}</h4>

      </div>
 
    </div>
  )
}

export default Exercicio23

