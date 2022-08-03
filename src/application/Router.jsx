import React from 'react'
import App from '../App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LogInPage from '../pages/logInPage/LogInPage'
import Details from '../pages/details/Details'
import FormPage from '../pages/formPage/FormPage'
import Home from '../pages/home/Home'

function Router() {

  return (

    <BrowserRouter>
        <Routes>
                <Route path='/' element={<App />} />
                <Route path='/moments' element={<Home />} />
                <Route path="/moments/:id" element={<Details />} />
                <Route path="/form" element={<FormPage />} />
                <Route path="/form/:id" element={<FormPage />} />
                <Route path="/login" element={<LogInPage />} />

        </Routes>
    </BrowserRouter>

  )
}

export default Router