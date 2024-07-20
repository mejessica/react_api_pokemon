import { createContext, useState } from "react";

export const themes = {
    light: {
        color: '#000000',
        background: '#ffffff',
        moves: '#ddd'
    },
    dark: {
        color: '#eeedec',
        background: '#4f4f4f',
        backgroundPage: '#808080',
        moves: '#363636'
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = (props) => {

    const [theme, setTheme] = useState(themes.light)
    return (
        <div  style={{backgroundColor: themes.backgroundPage}}>
            <ThemeContext.Provider value={{ theme, setTheme }} >
                {props.children}
            </ThemeContext.Provider>
        </div>

    )
}