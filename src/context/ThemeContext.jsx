'use client'
import { drugReducer, initialDrugState } from '@/reducer/DrugReducer'
import React, { createContext, useContext, useReducer, useState } from 'react'


const Theme = createContext()
const ThemeContext = ({ children }) => {
    const [theme, setTheme] = useState('light')
    // const [store, setStore] = useState({
    //     paracetamol: 20,
    //     flagea: 10,
    //     zincTablet: 5
    // })
    const [store, dispatch] = useReducer(drugReducer, initialDrugState)
    return (
        <Theme.Provider value={{ theme, setTheme, store, dispatch }}>
            {children}
        </Theme.Provider>
    )
}

export default ThemeContext


export const useThemeContext = () => {
    const { theme, setTheme, dispatch, store } = useContext(Theme)
    return { theme, setTheme, store, dispatch }
}