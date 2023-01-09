import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import Navbar from './NavBar'

const SignUp = () => {
    const [showPass, setShowPass] = useState(false)
    const [showPass2, setShowPass2] = useState(false)
    const [acepted, setAcepted] = useState(false)
    const change = () => {
        setShowPass(!showPass)
    }
    const change2 = () => {
        setShowPass2(!showPass2)
    }
    const navigate = useNavigate()
    const { handleSubmit, register, reset } = useForm()

    const defaultValues = {
        email: "",
        first_pass: "",
        second_pass: ""
    }
    const validatePass = (pass) => {
        if(pass){
            if (pass.length < 8) {
                alert('La contraseña es demasiado corta')
            } else if (pass.search(/^(?=.*[a-z])/) < 0) {
                alert('La contraseña debe contener por lo menos una minuscula')
            } else if (pass.search(/^(?=.*[A-Z])/) < 0) {
                alert('La contraseña debe contener por lo menos una mayuscula')
            } else if (pass.search(/^(?=.*[!@#$%^&*?~])/) < 0) {
                alert('La contraseña debe contener por lo menos un caracter especial')
            }
        }else{
            alert('Por favor introduzca una contraseña')
        }
    }
    const submit = (data) => {
        if (data.email) {
            if (data.first_pass === data.second_pass) {
                validatePass(data.first_pass)
            }else{
                alert('Las contraseñas no coinciden')
            }
        }else{
            alert('Por favor ingresar un nombre de usuario o correo electronico')
        }

    }
    useEffect(() => { reset(defaultValues) }, [])

    return (
        <div>
            <Navbar/>
            <div className='signup-container'>
            <img src="" alt="logo" className='green' />
            <p className='green'>Hola, por favor ingresa tus datos</p>
            <form action="" className='signup-form' onSubmit={handleSubmit(submit)}>
                <input type="text" {...register('email')} placeholder='Usuario ó email' className='form-input' />
                <div className='wrapp-input'>
                    <span className='show-icon' onClick={change}><box-icon name={showPass ? 'hide' : 'show'} color='gray'></box-icon></span>
                    <input
                        {...register('first_pass')}
                        type={showPass ? 'text' : 'password'}
                        placeholder='Contraseña'
                        className='form-input'
                    />
                </div>
                <div className='wrapp-input'>
                    <span className='show-icon' onClick={change2}><box-icon name={showPass2 ? 'hide' : 'show'} color='gray'></box-icon></span>
                    <input
                        {...register('second_pass')}
                        type={showPass2 ? 'text' : 'password'}
                        placeholder='Confirmar contraseña'
                        className='form-input'
                    />
                </div>
                <div className='terms-container'>
                    <input
                        // {...register('accepted')}
                        value={acepted}
                        onChange={() => setAcepted(!acepted)}
                        type="checkbox"
                        name="terms"
                        id="checkbox" />
                    <p>Acepto y he leido los <a href="">Terminos y condiciones</a> y la <a href="">Politica de privacidad</a></p>
                </div>
                <button className='signup-button primary-button' disabled={acepted?false:true}>Registrar</button>
            </form>
            <hr />
            <p className='gray'>¿Ya tienes cuenta con nosotros?</p>
            <button className='login-button secundary-button' onClick={() => navigate('/')}>Iniciar sesion</button>



        </div>
        </div>
    );
};

export default SignUp;


