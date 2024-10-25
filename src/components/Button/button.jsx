import  { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import './button.css'

export const Button = (props) =>{

    const {theme} = useContext(ThemeContext)

    return (
        <button className="theme" {...props} 
        style={(theme === themes.light ? themes.dark : themes.light)}
        />
    )
}