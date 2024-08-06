import { createContext, useContext, useReducer } from 'react';
import profileReducer from './profile.reducer';

const ProfileStateContext = createContext();
const ProfileDispatchContext = createContext();

const initialState = {
    profile: null,
    posts: null,
    likes: null,
    saved: null,
};

export const ProfileProvider = ({ children }) => {
    const [state, dispatch] = useReducer(profileReducer, initialState);

    return (
        <ProfileDispatchContext.Provider value={dispatch}>
            <ProfileStateContext.Provider value={state}>
                {children}
            </ProfileStateContext.Provider>
        </ProfileDispatchContext.Provider>
    )
};

export const useProfileState = () => useContext(ProfileStateContext);
export const useProfileDispatch = () => useContext(ProfileDispatchContext);