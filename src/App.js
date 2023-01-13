import React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Main from './pages/main';
import './App.css';
class index extends React.Component {
    state = {
       
    }
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />}></Route>
                    <Route path='/home' element={<Home />}></Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default index;
