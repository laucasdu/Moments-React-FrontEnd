import React from 'react'
import App from '../App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogInPage from '../pages/logInPage/LogInPage'
import Moment from '../pages/InfoMoment/Moment'

function Router() {

  return (

    <BrowserRouter>
        <Routes>
                <Route path='/' element={<App />} />
                <Route path="/moment/:id" element={<Moment />} />
                <Route path="/log-in" element={<LogInPage />} />
        </Routes>
    </BrowserRouter>

  )
}

export default Router