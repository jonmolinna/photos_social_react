import React from 'react'
import InputField from '../components/InputField'
import useForm from '../hooks/useForm';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import useFormInputValid from '../hooks/useFormInputValid';

const initialForm = {
    email: '',
    password: '',
};

const initialFormFocus = {
    email: false,
    password: false,
};

const emailRegex = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const passwordRegex = /^[A-Za-z0-9!@#$%]{5,12}$/;

const Login = () => {
    const { form, handleChange, formFocus, handleFocus, handleBlur, creanForm } = useForm(initialForm, initialFormFocus);
    const [isValidEmail] = useFormInputValid(form.email, emailRegex);
    const [isValidPassword] = useFormInputValid(form.password, passwordRegex);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('YOOO', form)
    }

    return (
        <div className='mt-10 w-full max-w-sm mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow'>
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
                    value={form.emal}
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
    )
}

export default Login;