import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import PageNotFound from './Pages/PageNotFound'
import HomePage from './Pages/Main/HomePage'

export default function Auth() {
    return (
        <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path='/' element={<HomePage/>}/>
            <Route path='/auth' element={<Login/>}/>
            <Route path='/reg' element={<Register/>}/>
        </Routes>
    )
}

