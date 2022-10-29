import React,{useState} from 'react'
import { NavContainter, StyledLink } from '../styled/styled' 
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
    )
}

export default Nav