import { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import React from "react"
import { Button } from "../Button/button"

export const ThemeTogglerButton = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <>
            <Button onClick={()=>setTheme(theme === themes.light ? themes.dark : themes.light)}>☀</Button>
        </>  
    )
}