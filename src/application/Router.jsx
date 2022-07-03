import React from 'react'
import App from '../App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogInPage from '../pages/logInPage/LogInPage'
import Details from '../pages/details/Details'
import FormPage from '../pages/formPage/FormPage'

function Router() {

  return (

    <BrowserRouter>
        <Routes>
                <Route path='/' element={<App />} />
                <Route path="/moment/:id" element={<Details />} />
                <Route path="/logIn" element={<LogInPage />} />
                <Route path="/form" element={<FormPage />} />
                <Route path="/form/:id" element={<FormPage />} />





        </Routes>
    </BrowserRouter>

  )
}

export default Router