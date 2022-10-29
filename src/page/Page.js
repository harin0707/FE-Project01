import React from 'react'
import {PageContainer, Img, Desc} from '../styled/styled.js'

const Page = ({image, author, name, material, year}) => {
    return (
        <PageContainer>
            <Img src={image} alt="img"/>
            <Desc>
                <div>{name}</div>
                <div>{author}</div>
                <div>{year}</div>
                <div>{material}</div>
            </Desc>
        </PageContainer>
    )
}

export default Page