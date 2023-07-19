// import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage';
import NotFoundPage from '../pages/NotFound/NotFoundPage';
import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";

function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/signup' element={<SignupPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>

        </Routes>
    )
}

export default AllRoutes