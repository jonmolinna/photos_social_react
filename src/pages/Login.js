import React from 'react'
import InputField from '../components/InputField'
import useForm from '../hooks/useForm';
import Button from '../components/Button';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useFormInputValid from '../hooks/useFormInputValid';
import { useAuthDispatch, useAuthState } from '../context/authentication.context';
import axios from '../utils/axios';
import Alerts from '../components/Alerts';

const initialForm = {
    email: '',
    password: '',
};

const initialFormFocus = {
    email: false,
    password: false,
};

const emailRegex = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const passwordRegex = /^[A-Za-z0-9!@#$%]{5,120}$/;

const Login = () => {
    const { form, handleChange, formFocus, handleFocus, handleBlur, creanForm } = useForm(initialForm, initialFormFocus);
    const [isValidEmail] = useFormInputValid(form.email, emailRegex);
    const [isValidPassword] = useFormInputValid(form.password, passwordRegex);
    const dispatch = useAuthDispatch();
    const { errors, message } = useAuthState();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/';

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            dispatch({ type: 'LOGIN_START' });
            let options = {
                method: 'POST',
                headers: {
                    "Content-type": "application/json; charset=utf-8",
                },
                data: JSON.stringify(form),
            };
            const res = await axios('auth/login', options);
            dispatch({ type: 'LOGIN_SUCCESS', payload: { auth: res.data.access_token, message: 'Authentication Success' } })
            creanForm();
            navigate(from, { replace: true });
        } catch (err) {
            console.log('Error', err)
            dispatch({ type: 'LOGIN_FAILURE', payload: 'Credenciales incorrectas' });
        }
    }

    return (
        <div className='mt-10 space-y-4'>
            {
                errors && (
                    <div className='w-full max-w-sm mx-auto'>
                        <Alerts
                            message={message}
                            textColor='text-red-800'
                            bgColor='bg-red-50'
                        />
                    </div>
                )
            }
            <div className='w-full max-w-sm mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow'>
                <form
                    onSubmit={handleSubmit}
                    className='space-y-6'
                >
                    <h5 className='text-center text-xl font-normal text-gray-900'>
                        Iniciar sesión
                    </h5>
                    <InputField
                        type="email"
                        name='email'
                        value={form.email}
                        placeholder="name@dallase.pe"
                        label="Correo Electronico"
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        error={!isValidEmail && formFocus.email && form.email}
                        message='Ingrese un correo electrónico válido.'
                    />
                    <InputField
                        type="password"
                        name="password"
                        value={form.password}
                        placeholder="••••••••"
                        label="Contraseña"
                        onChange={handleChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        error={!isValidPassword && formFocus.password && form.password}
                    />
                    <Button
                        type='submit'
                        text='Iniciar sesión'
                        disabled={!isValidEmail || !isValidPassword}
                    />
                    <div className='text-sm font-medium text-gray-500'>
                        ¿No registrado?
                        <Link to="/register" className='text-pink-700 hover:underline ml-1'>
                            Crear una cuenta
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;