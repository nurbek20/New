import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DetailPage from './Pages/Main/DetailPage'
import PersonalPage from './Pages/Main/PersonalPage'
import PageNotFound from './Pages/PageNotFound'

export default function Main() {
    return (
       <Routes>
           <Route path='*' element={<PageNotFound />} />
           <Route path='/' element={<PersonalPage />}/>
           <Route path='/detail/:id' element={<DetailPage/>}/>
       </Routes>
    )
}
