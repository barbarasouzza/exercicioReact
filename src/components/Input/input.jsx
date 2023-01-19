import React from 'react'
import './styles.css'

const input = () => {
    return (
        <div className='div'>
            <div className='conteiner'>
                <input className='input' type='text' placeholder='Insira o valor aqui'></input>
                <button className='button' >Calcular</button>
            </div>

        </div>
    )
}

export default input