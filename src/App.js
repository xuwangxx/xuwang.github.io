import React from 'react';
import { LaoutBg } from './components/laout-bg/index'
import './App.css';
class index extends React.Component {
    state = {
        form:{
            name: '',
            doing: ''
        }
    }
    change(event, type){
        console.log(event.target.value);    //获取修改后的值
        this.setState(
            {
                form: {
                    ...this.state.form,
                    [type]:event.target.value
                }
            }
        )
    }
    render() {
        const { name, doing } = this.state.form;
        return (
            <LaoutBg>
                <div className="main">
                    <div className="main-header">
                        超级耍你系统
                    </div>
                    <div className="main-form">
                        <div className="main-form-input">
                            <input
                                value={name}
                                type="text"
                                placeholder="请输入你的大名"
                                onChange={(event)=>{this.change(event, 'name')}}
                            />    
                        </div>
                        <div className="main-form-input">
                            <input
                                value={doing}
                                type="text"
                                placeholder="你来干什么的？"
                                onChange={(event)=>{this.change(event, 'doing')}}
                            />    
                        </div>
                        <div
                            className="main-form-btn"
                            onClick={()=>{console.log(222)}}
                        >
                            点一下试试 {">"}
                        </div>
                    </div>
                </div>
            </LaoutBg>
        );
    }
}

export default index;
