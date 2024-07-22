import { createContext, useState } from "react";

export const themes = {
    light: {
        color: '#000000',
        background: '#ffffff',
        moves: '#ddd',
    },
    dark: {
        color: '#eeedec',
        background: '#353432',
        moves: '#1e1e1e',
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.light)
    return (
       
            <ThemeContext.Provider value={{ theme, setTheme }} >
                {props.children}
            </ThemeContext.Provider>
   

    )
}