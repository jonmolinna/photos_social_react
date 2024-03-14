import React from 'react';
import useForm from '../hooks/useForm';
import InputField from '../components/InputField';
import Button from '../components/Button';

const initialForm = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const Register = () => {
    const { form, handleChange } = useForm(initialForm);

    const handleSubmit = async (e) => {
        e.preventDefault();
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
                />
                <InputField
                    type="email"
                    name="email"
                    value={form.email}
                    placeholder="name@dallase.pe"
                    label='Correo Electronico'
                    onChange={handleChange}
                />
                <InputField
                    type="password"
                    name="password"
                    value={form.password}
                    placeholder="••••••••"
                    label="Contraseña"
                    onChange={handleChange}
                />
                <InputField
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    placeholder="••••••••"
                    label="Confirma tu Contraseña"
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    text="Crea tu Cuenta"
                />
                <div className='text-sm font-medium text-gray-500'>
                    ¿Tienes una cuenta?
                    <a href="index.html" className='text-pink-700 hover:underline ml-1'>
                        Inicia sesión
                    </a>
                </div>
            </form>
        </div>
    )
};

export default Register;