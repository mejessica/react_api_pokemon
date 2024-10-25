import Router from "./routes/router"
import './App.css'
import { ThemeProvider } from './contexts/theme-context'
import { ThemeTogglerButton } from './components/theme-toggler-button/theme-toggler-button'
import Main from './components/Main/main'

function App() {

  return (  
      <ThemeProvider>  
        <Main />
        <ThemeTogglerButton/>
        <Router/>
      </ThemeProvider>
  )
}

export default App
