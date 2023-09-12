import React, { createContext, useContext, useEffect, useState } from 'react'
import {useAutCtx} from './Auth'

export const ThemeContext = createContext({})
export const useThemeCtx = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light')
    const {signed} = useAutCtx();

    useEffect(() => {
        if(signed > 0) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [signed])

    return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
}
