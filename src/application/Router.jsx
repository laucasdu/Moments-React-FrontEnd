import React from 'react'
import App from '../App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogInPage from '../pages/logInPage/LogInPage'
import Moment from '../pages/InfoMoment/Moment'
import MomentForm from '../pages/form/MomentForm'

function Router() {

  return (

    <BrowserRouter>
        <Routes>
                <Route path='/' element={<App />} />
                <Route path="/moment/:id" element={<Moment />} />
                <Route path="/log-in" element={<LogInPage />} />
                <Route path="/create" element={<MomentForm />} />

        </Routes>
    </BrowserRouter>

  )
}

export default Router