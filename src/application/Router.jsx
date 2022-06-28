import React from 'react'
import App from '../App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogInPage from '../pages/logInPage/LogInPage'
import Moment from '../pages/InfoMoment/Moment'
import MomentCreate from '../pages/create/MomentCreate'
import Update from '../components/update/Update'

function Router() {

  return (

    <BrowserRouter>
        <Routes>
                <Route path='/' element={<App />} />
                <Route path="/moment/:id" element={<Moment />} />
                <Route path="/log-in" element={<LogInPage />} />
                {/* <Route path="/create" element={<MomentCreate />} /> */}
                <Route path="/create" element={<Update />} />


        </Routes>
    </BrowserRouter>

  )
}

export default Router