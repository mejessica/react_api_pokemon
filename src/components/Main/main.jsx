import { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import videoBgLight from '../../assets/backgroundLight.mp4'
import videoBgDark from '../../assets/backgroundDark.mp4'
import styled from 'styled-components';

const Main = () => {
    const { theme} = useContext(ThemeContext)

    const getVideoSource = () => {
        return theme === themes.dark ? videoBgDark : videoBgLight;
    }


    return (
        <div className="main">
            <Video src={getVideoSource()} autoPlay loop muted></Video>
        </div>
    )
}

export default Main

const Video = styled.video`
  height: 100%;
  width: 100%;
  top: 0;
  padding: none;
  object-fit: cover;
  z-index: -1; 
  position: fixed;
  filter: brightness(0.85);
`

