import React, { useState, useContext } from 'react'

import Router from "../router"
import './App.css'
import { ThemeProvider } from './contexts/theme-context'
import { ThemeTogglerButton } from '../components/theme-toggler-button/theme-toggler-button'
import { GlobalStyle } from './styles/GlobalStyleComponent'
import styled from 'styled-components';
import { ThemeContext} from "./contexts/theme-context"
function App() {

  const {theme} = useContext(ThemeContext)

  return (  
      <ThemeProvider>
        <ThemeTogglerButton/>
        <Router/>
      </ThemeProvider>
  )
}

export default App

const Video = styled.div`
  height: 100%;
  width: 100%;
  float: left;
  top: 0;
  padding: none;
`