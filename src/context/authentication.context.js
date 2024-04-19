import { createContext, useContext, useReducer } from 'react';
import authReducer from './authentication.reducer';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

const initialState = {
    loading: false,
    auth: null,
    errors: false,
    message: null,
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthStateContext.Provider value={dispatch}>
            <AuthDispatchContext.Provider value={state}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthStateContext.Provider>
    )
};

export const useAuthState = () => useContext(AuthStateContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);