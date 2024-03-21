import React from 'react';
import useForm from '../hooks/useForm';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import useFormInputValid from '../hooks/useFormInputValid';

const initialForm = {
    name: '',
    email: '',
    password: '',
};

const initialFormFocus = {
    name: false,
    email: false,
    password: false,
}

const nameRegex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{3,17}$/;
const emailRegex = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const passwordRegex = /^[A-Za-z0-9!@#$%]{5,12}$/;

const Register = () => {
    const { form, handleChange, formFocus, handleFocus, handleBlur, creanForm } = useForm(initialForm, initialFormFocus);
    const [isValidName] = useFormInputValid(form.name, nameRegex);
    const [isValidEmail] = useFormInputValid(form.email, emailRegex);
    const [isValidPassword] = useFormInputValid(form.password, passwordRegex);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log('YOOO', form)
            creanForm();
        } catch (error) {

        }
    };

    return (
        <div className='mt-10 w-full max-w-sm mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow'>
            <form
                onSubmit={handleSubmit}
                className='space-y-6'
            >
                <h5 className='text-center text-xl font-normal text-gray-900'>
                    Crea tu cuenta
                </h5>
                <InputField
                    type="text"
                    name="name"
                    value={form.name}
                    placeholder='Kendra Contreras'
                    label="Nombres"
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    error={!isValidName && formFocus.name && form.name}
                    message='Solo se permiten lentras y espacios de 3 a 17 caracteres'
                />
                <InputField
                    type="email"
                    name="email"
                    value={form.email}
                    placeholder="name@dallase.pe"
                    label='Correo Electronico'
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
                    message='Solo acepta de 5 a 12 caracteres.'
                />
                <Button
                    type="submit"
                    text="Crea tu Cuenta"
                    disabled={!isValidName || !isValidEmail || !isValidPassword}
                />
                <div className='text-sm font-medium text-gray-500'>
                    ¿Tienes una cuenta?
                    <Link to="/login" className='text-pink-700 hover:underline ml-1'>
                        Inicia sesión
                    </Link>
                </div>
            </form>
        </div>
    )
};

export default Register;