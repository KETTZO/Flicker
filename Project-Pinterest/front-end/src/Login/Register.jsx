import { useState } from 'react'
import logo from '../assets/flicker.png'
import {Link as RouterLink } from 'react-router-dom';
import './Login.css'

export function Register(){
    return (
      <div className="cardlogin">
        <div className="loginImage ">
          <img className="image-align" src={logo} alt="" />
          <br />
          <div className="text-align">
            <h1 className="">Bienvenido</h1>
            <h3 className="">Registrar para continuar</h3>
          </div>
          
        </div>
        <form className='loginForm'
        >
          <h2>Registrate</h2>
          <div className='inputs'>
            <input type="text" className='' placeholder='Nombre'/>
            <br />
            <input type="text" className='' placeholder='Apellido'/>
            <br />
            <input type="text" className='' placeholder='Usuario'/>
            <br />
            <input type="text" className='' placeholder='Correo electrónico'/>
            <br />
            <input type="password" className='' placeholder='Contraseña'/>
          </div>

          <RouterLink to='/'>
            <button >Registrar</button>
          </RouterLink>
          <br />
          <RouterLink to='/'>¿Ya tienes cuenta?</RouterLink>
          
        </form>
      </div>
    )
}