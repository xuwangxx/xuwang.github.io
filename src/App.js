import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/home';
import Main from './pages/main';
class index extends React.Component {
    state = {
       
    }
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/home' element={<Home />}></Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default index;
