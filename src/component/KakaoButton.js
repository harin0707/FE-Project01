import React from 'react'
import styled from 'styled-components'

export const KakaoButton = () => {
    

    const KakaoLink = ()=>{
        //자바스크립트 SDK로 카카오 api 호출

        //카카오 api가 정상적으로 넘어온 것을 확인 가능
        const kakao = window.Kakao;
        console.log(kakao);

        //중복 initialization 방지
        if (!kakao.isInitialized()){
            kakao.init('1665569fb1877b599992ac86809857fc');
        }

        kakao.Link.sendDefault({
            objectType: "feed",
            content:{
                title:"카카오톡 링크 보내기 test",
                description: "...",
                // imageUrl:''
                link:{
                    mobileWebUrl:"https://harin0707.github.io/FE-Project01/",
                    webUrl:"https://harin0707.github.io/FE-Project01/",
                }
            }
        })

    }


    return (
    <>
    <Button onClick={KakaoLink}>
        공유 버튼
    </Button>
    </>
    )
}

const Button = styled.button`
`

const Img = styled.img`
`

