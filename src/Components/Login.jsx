import React, { useState } from 'react'
import { FaUser , FaLock } from 'react-icons/fa'

import "./login.css"

const Login = () => {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        alert(`Enviando os dados: Nome -> ${name} - ${password}`) 
        setName('')
        setPassword('')    
    }

  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Acesse o Sistema</h1>
            <div className='input-field'>
                <input type="email" placeholder='E-mail'
                    required
                    onChange={(e)=> setName(e.target.value)}/>
                <FaUser className='icon'/>
            </div>
            <div  className='input-field'>
                <input type="password" placeholder='Senha'
                onChange={(e)=> setPassword(e.target.value)}/>
                <FaLock className='icon'/>
            </div>

            <div className="recall_forget">
                <label>
                    <input type="checkbox"
                    />
                    Lembrar de mim
                </label>
                <a href="#"> Esqueceu a senha?</a>
            </div>

            <button>Entrar</button>

            <div className="signup-link">
                <p>Não tem uma conta? <a href="#">Registrar</a></p>
            </div>
        </form>
    </div>
  )
}

export default Login