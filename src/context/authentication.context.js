import { createContext, useContext, useReducer } from 'react';
import authReducer from './authentication.reducer';

const AuthStateContext = createContext();
const AuthDispatchContext = createContext();

const initialState = {
    loading: false,
    auth: null,
    token: null,
    errors: false,
    message: null,
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    return (
        <AuthDispatchContext.Provider value={dispatch}>
            <AuthStateContext.Provider value={state}>
                {children}
            </AuthStateContext.Provider>
        </AuthDispatchContext.Provider>
    )
};

export const useAuthState = () => useContext(AuthStateContext);
export const useAuthDispatch = () => useContext(AuthDispatchContext);