import React from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import {Container} from './styled/styled.js'
import Nav from './component/Nav';
import Transition from './component/Transition.js'
import jejuData from './data/picture.json'
import GlobalStyled from './styled/GlobalStyled.js';
import {ThemeProvider} from 'styled-components'
import { theme } from './styled/theme.js';
import {KakaoButton} from './component/KakaoButton.js'

const App = () => {
  const jejuDatas= jejuData.jejunetApi.items.item
  

  return (
    <>
    <GlobalStyled/>
    <ThemeProvider theme={{...theme}}>
      <Router>
          <Container> 
            <Nav jejuDatas={jejuDatas}/>
            <Transition jejuDatas={jejuDatas}/>

            <KakaoButton/>
          </Container>
          

          
      </Router> 
    </ThemeProvider>
    </>
          


    
  )
}

export default App