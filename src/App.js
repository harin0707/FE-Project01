import React from 'react'
import {BrowserRouter as Router} from "react-router-dom";
import {Container, Header} from './styled/styled.js'
import Nav from './component/Nav';
import Transition from './component/Transition.js'
import jejuData from './data/picture.json'
import GlobalStyled from './styled/GlobalStyled.js';
import {ThemeProvider} from 'styled-components'
import { theme } from './styled/theme.js';

const App = () => {
  const jejuDatas= jejuData.jejunetApi.items.item
  

  return (
    <>
    <GlobalStyled/>
    <ThemeProvider theme={{...theme}}>
      <Router>
          <Container> 
            <Header> 제주 현대 미술관 작품 전시 </Header>
            <Nav jejuDatas={jejuDatas}/>
            <Transition jejuDatas={jejuDatas}/>
          </Container>
      </Router> 
    </ThemeProvider>
    </>
          


    
  )
}

export default App