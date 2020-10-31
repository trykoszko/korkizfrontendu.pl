import React, { useReducer, createContext } from 'react'

export const GlobalStateContext = createContext()
export const GlobalDispatchContext = createContext()

const initialState = {
    isNewsletterModalOpen: false
}

function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_NEWSLETTER_MODAL':
            return {
                ...state,
                isNewsletterModalOpen: !state.isNewsletterModalOpen
            }
        default:
            throw new Error('Bad action type')
    }
}

const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    )
}

export default GlobalContextProvider
