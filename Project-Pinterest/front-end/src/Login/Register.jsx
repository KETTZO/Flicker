import { useState } from 'react'
import logo from '../assets/flicker.png'
import {Link as RouterLink } from 'react-router-dom';
import './Login.css'

export function Register(){
    return (
      <>
        <div className="loginImage">
          <img src={logo} alt="" />
          <br />
          <h1>Bienvenido</h1>
          <h3>Registrate para continuar</h3>
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
            <input type="text" className='' placeholder='correo electrónico'/>
            <br />
            <input type="password" className='' placeholder='contraseña'/>
          </div>

          <RouterLink to='/'>
            <button >Registrar</button>
          </RouterLink>
          <br />
          <RouterLink to='/'>¿Ya tienes cuenta?</RouterLink>
          
        </form>
      </>
    )
}