import React, { useState } from 'react'
import './styles.css'

const Exercicio05 = () => {
  const [num, setNum] = useState("")

  return (
    <div className='container'>

      <div>
        <h1 className='text'>Exercício 05</h1>
        <h3 className='text'>Leia um numero real com 5 dígitos. Imprima o 5 digito deste número</h3>

      </div>
      <div className='div'>
        <div className='conteiner'>
          <input
            className='input'
            type='number'
            placeholder='Insira o valor aqui'
            onChange={e => setNum(e.target.value)}
          />
          {/* 
          <button
            className='button'
            onClick={numbers[4]}
          >
            Calcular
          </button> */}
        </div>

      </div>
      <div>
        <h2 className='texth4'>Resultado</h2>
        <h4 className='texth'>{num[4]}</h4>

      </div>
    </div>
  )
}

export default Exercicio05