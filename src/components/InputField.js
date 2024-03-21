import React from 'react'

const InputField = ({ value, label, name, placeholder, type, onChange, onFocus, onBlur, error, message }) => {

    return (
        <div>
            {label && (
                <label
                    htmlFor={name}
                    className='block mb-2 text-sm font-medium text-gray-900'
                >
                    {label}
                </label>
            )}
            <input
                id={name}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-pink-500 focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5'
            />
            {
                error && (
                    <span className='text-sm text-red-700 font-medium'>
                        {message}
                    </span>
                )
            }
        </div>
    )
}

export default InputField;