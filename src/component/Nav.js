import React,{useState} from 'react'
import {Link} from "react-router-dom"
import { NavContainter, StyledLink, Header } from '../styled/styled' 
import '../styled/button.css'

const Nav = ({jejuDatas}) => {

    const [btnActive, setBtnActive] = useState(false);

    const toggleActive = (e) =>{
        //돔에서 value 값을 읽어오고 싶을 때
        setBtnActive(e.currentTarget.getAttribute('value'))
        console.log(btnActive)
        console.log(e.target)
    }
    

    return (
        <>
        <Link to="/"><Header> 제주 현대 미술관 작품 전시 </Header></Link>
        <NavContainter>
            
            {jejuDatas.map((pic, num)=> (
                    <StyledLink 
                    to={`/${pic.seq}`} 
                    key={pic.seq}
                    value={pic.seq}
                    onClick={toggleActive}
                    className={(btnActive == pic.seq ? "active" : "btn" )}
                    > 
                        {parseInt(num)+1} 
                    </StyledLink>
            ))}
        </NavContainter>
        </>
    )
}

export default Nav