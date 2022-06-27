import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import { BtCreate, BtLogin } from '../components/navbar/Navbar.styled'
import Moment from '../pages/momentInfo/Moment'

function Router() {

  return (

    <BrowserRouter>
        <Routes>
                <Route path='/' element={<App />} />
                <Route path="/moment/:id" element={<Moment />} />
                <Route path="/" element={<BtCreate />} />
                <Route path="/" element={<BtLogin />} />

        </Routes>
    </BrowserRouter>

  )
}

export default Router