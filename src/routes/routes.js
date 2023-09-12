import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from '../pages/signin/Signin'
import Home from '../pages/home/Home'
import Signup from '../pages/signup/Signup'
import { useAutCtx } from '../context/Auth'
import { useThemeCtx } from '../context/Theme'

const Private = ({ Item, theme }) => {
    const { signed } = useAutCtx()
   
    return signed > 0 ? <Item theme={theme}/> : <Signin theme={theme}/>
}

const RoutesApp = () => {
    const {theme} = useThemeCtx()
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<Private theme={theme} Item={Home} />}></Route>
                <Route path="/" element={<Signin theme={theme}/>}></Route>
                <Route path="/signup" element={<Signup theme={theme}/>}></Route>
                <Route path="*" element={<Signin theme={theme}/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp