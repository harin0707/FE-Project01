import React from 'react'
import {PageContainer, Img, Desc} from '../styled/styled.js'
import jeju from '../data/jeju.JPG';

// val(버튼 눌렀는지 여부)==false -> main 페이지
// val == true -> 그림이미지와 설명

const Page = ({image, author, name, material, year, val}) => {

    return (
        <PageContainer>
            {val === false 
            ? 
            <>
                <img src={jeju} alt='제주사진'/>
                <div> 🏝환영합니다🏝 </div>
            </>
            :
            <>
            <Img src={image} alt="img"/>
                <Desc>
                <div>{name}</div>
                <div>{author}</div>
                <div>{year}</div>
                <div>{material}</div>
            </Desc>

            
            </>

            }
        
        </PageContainer>
    )

}

export default Page