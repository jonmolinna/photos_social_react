import React from 'react'

const InputField = ({ value, label, name, placeholder, type, onChange }) => {
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
                type={type}
                value={value}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
                id={name}
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md outline-pink-500 focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5'
            />
        </div>
    )
}

export default InputField;