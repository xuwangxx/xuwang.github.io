import React, { useEffect } from 'react';
import './index.css';
export const LaoutBg = (props) => {
    useEffect(()=>{
        console.log(props)
    },[])
    return (
        <div className="laout-bg">
            <div className="laout-bg-item"></div>
            <div className="laout-bg-item"></div>
            <div className="laout-bg-item"></div>
            <div className="laout-bg-item"></div>
            <div className="laout-bg-item"></div>
            <div className="laout-bg-item"></div>
            {props.children}
        </div>
    )
}
    