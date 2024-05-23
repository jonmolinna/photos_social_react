import { createContext, useContext, useReducer } from 'react';
import postReducer from './post.reducer';

const PostStateContext = createContext();
const PostDispatchContext = createContext();

const initialState = {
    posts: null,
};

export const PostProvider = ({ children }) => {
    const [state, dispatch] = useReducer(postReducer, initialState);

    return (
        <PostDispatchContext.Provider value={dispatch}>
            <PostStateContext.Provider value={state}>
                {children}
            </PostStateContext.Provider>
        </PostDispatchContext.Provider>
    )
};

export const usePostState = () => useContext(PostStateContext);
export const usePostDispatch = () => useContext(PostDispatchContext);