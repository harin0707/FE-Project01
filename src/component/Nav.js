import React,{useState} from 'react'
import { NavContainter, StyledLink } from '../styled/styled' 
import '../styled/button.css'

const Nav = ({jejuDatas}) => {

    const [btnActive, setBtnActive] = useState(false);

    const toggleActive = (e) =>{
        setBtnActive(e.currentTarget.getAttribute('value'))
        
        console.log(btnActive)
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
            {/* <img src={jejuDatas[0].cover} alt='사진'/> */}
        </NavContainter>
    )
}

export default Nav