import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

export const NavContainter = styled.ul`
display: flex;
justify-content: center;
align-items: center;
`

export const Header = styled.button`
margin: 3vw;
color: ${props => props.theme.maincolor};
background-color: transparent;
border: 0vw transparent;
cursor: pointer;
font-size: 1.5vw
`

export const StyledLink = styled(Link)`
margin: 0vw 1vw;
text-decoration: none;
/* color: ${props => props.theme.mediumseagreen}; */
`


export const PageContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 1000px;
`

export const Img = styled.img`
vertical-align: middle;
`

export const Desc=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 2vw;

`
