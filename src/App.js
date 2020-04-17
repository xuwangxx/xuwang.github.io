import React, { Component } from 'react';
import './App.css';
class index extends React.Component {
    render() {
        return (
            <div className="Error-Component">
                <img src={require('./error.png')} width="100%" alt="" />
            </div>
        );
    }
}

export default index;
