import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import Moment from '../pages/momentInfo/Moment'

function Router() {

  return (

    <BrowserRouter>
        <Routes>
                <Route path='/' element={<App />} />
                <Route path='/' element={<Moment />} />
        </Routes>
    </BrowserRouter>

  )
}

export default Router