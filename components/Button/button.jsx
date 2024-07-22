import  React, { useContext } from "react"
import { ThemeContext, themes } from "../../src/contexts/theme-context"
import '../Button/button.css'

export const Button = (props) =>{

    const {theme} = useContext(ThemeContext)

    return (
        <button className="theme" {...props} 
        style={(theme === themes.light ? themes.dark : themes.light)}
        />
    )
}