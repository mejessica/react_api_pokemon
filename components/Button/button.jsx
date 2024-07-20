import  React, { useContext } from "react"
import { ThemeContext } from "../../src/contexts/theme-context"
import '../Button/button.css'

export const Button = (props) =>{

    const {theme} = useContext(ThemeContext)

    return (
        <button className="theme" {...props} 
        style={{color: theme.color, backgroundColor: theme.background}}
        />
    )
}