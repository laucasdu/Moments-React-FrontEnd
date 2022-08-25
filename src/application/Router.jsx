import React from 'react'
import App from '../App'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import LogInPage from '../pages/logInPage/LogInPage'
import Details from '../pages/details/Details'
import FormPage from '../pages/formPage/FormPage'
import Home from '../pages/home/Home'
import { localAuthService } from '../services/localAuthService'

function Router() {


  const AuthRoute = ({children}) => {
    if(localAuthService.getAuthUser().token){
        return <Navigate to="/"/>;
    }
    return children;
};

  const NotAuth = ({children}) => {
    if(!localAuthService.getAuthUser().token){
        return <Navigate to="/login"/>;
    }
    return children;
};


  return (

    <BrowserRouter>
        <Routes>

              <Route path='/' element={<App />} />
              <Route path='/home' element={<Home />} />
              <Route path="/moments/:id" element={<Details/>} />

                <Route path="/form" element={
                         <NotAuth>
                          <FormPage/>
                        </NotAuth>}
                />

                <Route path="/form/:id" element={
                         <NotAuth>
                          <FormPage/>
                        </NotAuth>}
                />

                <Route path="/login" element={
                         <AuthRoute>
                          <LogInPage/>
                        </AuthRoute>}
                />

                <Route path="/signup" element={
                          <AuthRoute>
                          <LogInPage/>
                         </AuthRoute>}
                />

        </Routes>
    </BrowserRouter>

  )
}

export default Router






// return (

//   <BrowserRouter>
//       <Routes>
//               <Route path='/' element={<App />} />
//               <Route path='/moments' element={<Home />} />
//               <Route path="/moments/:id" element={<Details />} />
//               <Route path="/form" element={<FormPage />} />
//               <Route path="/form/:id" element={<FormPage />} />
//               <Route path="/login" element={<LogInPage />} />
//               <Route path="/signup" element={<LogInPage />} />


//       </Routes>
//   </BrowserRouter>

// )
// }

// export default Router