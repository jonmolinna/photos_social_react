import { createContext, useContext, useReducer } from 'react';
import photoReduce from './photo.reduce';

const PhotoStateContext = createContext();
const PhotoDispatchContext = createContext()

const initialState = {
    photo: null
}

export const PhotoProvider = ({ children }) => {
    const [state, dispatch] = useReducer(photoReduce, initialState)

    return (
        <PhotoDispatchContext.Provider value={dispatch}>
            <PhotoStateContext.Provider value={state}>
                {children}
            </PhotoStateContext.Provider>
        </PhotoDispatchContext.Provider>
    )
};

export const usePhotoState = () => useContext(PhotoStateContext);
export const usePhotoDispatch = () => useContext(PhotoDispatchContext);

