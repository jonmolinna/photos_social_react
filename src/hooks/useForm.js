import { useState } from 'react';

const useForm = (initialForm, initialFormFocus) => {
    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    return {
        form,
        handleChange,
    }
}

export default useForm;