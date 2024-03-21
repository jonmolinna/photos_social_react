import { useEffect, useState } from 'react';

const useFormInputValid = (inputName, regex) => {
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
        const result = regex.test(inputName);
        setInputValid(result);
    }, [inputName, regex]);

    return [inputValid]
};

export default useFormInputValid;