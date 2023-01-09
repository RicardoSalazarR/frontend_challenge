import React, { useState } from 'react';
import 'boxicons'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeName } from '../store/slices/username.slice'
import { useForm } from 'react-hook-form'
import Navbar from './NavBar'

const Login = () => {
    const { handleSubmit } = useForm()
    const [showPass, setShowPass] = useState(false)
    const [username, setUsername] = useState('')
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const enterName = () => {
        if (username) {
            dispatch(changeName(username))
            navigate('/Home')
        }else{
            alert('Por favor introduzca un usuario')
        }
    }

    const change = () => {
        setShowPass(!showPass)
    }


    return (
        <div>
            <Navbar />
            <div className='login-container'>
                <img src="" alt="logo" className='green' />
                <p className='green'>Hola, por favor ingresa tus datos</p>
                <form action="" className='login-form' onSubmit={handleSubmit(enterName)}>
                    <input
                        type="text"
                        placeholder='Usuario ó email'
                        className='form-input'
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                    />
                    <div className='wrapp-input'>
                        <span className='show-icon' onClick={change}><box-icon name={showPass ? 'hide' : 'show'}></box-icon></span>
                        <input type={showPass ? 'text' : 'password'} placeholder='Contraseña' className='form-input' />
                    </div>
                    <button className='login-button primary-button'>Iniciar sesion</button>
                </form>
                <hr />
                <p className='gray'>¿Aun no tienes cuenta con nosotros?</p>
                <button className='signup-button secundary-button' onClick={() => navigate('signup')}>Registrate aqui</button>

            </div>
        </div>
    );
};

export default Login;