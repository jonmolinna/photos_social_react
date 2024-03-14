import React from 'react'
import InputField from '../components/InputField'
import useForm from '../hooks/useForm';
import Button from '../components/Button';

const initialForm = {
    email: '',
    password: '',
};

const Login = () => {
    const { form, handleChange } = useForm(initialForm);

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

                />
                <InputField
                    type="password"
                    name="password"
                    value={form.password}
                    placeholder="••••••••"
                    label="Contraseña"
                    onChange={handleChange}
                />
                <Button
                    type='submit'
                    text='Iniciar sesión'
                />
                <div className='text-sm font-medium text-gray-500'>
                    ¿No registrado?
                    <a href="index.html" className='text-pink-700 hover:underline ml-1'>
                        Crear una cuenta
                    </a>
                </div>
            </form>

        </div>
    )
}

export default Login