import { createContext, useContext, useEffect, useState } from 'react';
import Theme from '../interfaces/Theme';
import { useAutCtx } from './Auth';

export const ThemeContext = createContext({} as Theme)
export const useThemeCtx = () => useContext(ThemeContext);

//children tipagem
export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState('light')
    const {signed} = useAutCtx();

    useEffect(() => {
        if(signed) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [signed])

    //useMemo()?
    return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
}
