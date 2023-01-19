import React, { useState } from 'react'
import './styles.css'


const Exercicio02 = () => {
  const [num, setNum] = useState("")

  return (
    <div className='container'>

      <div>
        <h1 className='text'>Exercício 02</h1>
        <h3 className='text'>Faça um programa que leia um número real e o imprima</h3>

      </div>
      <div className='div'>
        <div className='conteiner'>
          <input
            className='input'
            type='number'
            placeholder='Insira o valor aqui'
            onChange={e => setNum(e.target.value)}
          />

          {/* <button className='button' >Calcular</button> */}
        </div>

      </div>
      <div>
        <h2 className='texth4'>Resultado</h2>
        <h4 className='texth'>{num}</h4>

      </div>
    </div>
  )
}

export default Exercicio02