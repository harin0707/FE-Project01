import React from 'react'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {Route, Routes, useLocation} from 'react-router-dom'
import Page from '../page/Page'
import '../styled/Transition.css'


const Transition = ({jejuDatas}) => {
    const location = useLocation();

    return (
        <TransitionGroup className='transition-group'>
            <CSSTransition key={location.pathname} classNames='fade' timeout={1000}>
                <Routes location={location}>
                    <Route exact path='/' element={<Page/>}/>
                    {jejuDatas.map((pic)=> (
                        <Route 
                        path={`/${pic.seq}`}
                        element={
                            <Page 
                            image={pic.cover}
                            author={pic.author}
                            name={pic.name}
                            year={pic.year}
                            material={pic.material}
                            />}/>
                    ))} 
                </Routes>
                
            </CSSTransition>
        </TransitionGroup>
    )
}

export default Transition