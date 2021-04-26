import React from 'react';
import { LaoutBg } from './components/laout-bg/index'
import './App.css';
class index extends React.Component {
    state = {
        form:{
            name: '',
            doing: ''
        },
        toastTitle: ''
    }
    clickNum = this.timeout()
    time = null
    componentWillUnmount(){
        this.clickNum = null
    }
    componentDidMount() {
        this.getList()
        this.getList1()
    }
    change(event, type){
        this.setState(
            {
                form: {
                    ...this.state.form,
                    [type]:event.target.value
                }
            }
        )
    }
    timeout(){
        this.n = 0;
        return () => {
            this.n ++
            return this.n
        }
    }
    Toast (title) {
        if(!this.state.toastTitle) {
            this.time = setTimeout(()=>{
                this.setState({
                    toastTitle: ''
                })
                clearTimeout(this.time)
            },5000)
        }
        this.setState({
            toastTitle: title
        })
    }
    getList = () => {
        this.a = 111
        console.log(this, 11);
    }
    getList1() {
        this.a = 111
        console.log(this, 22);
    }
    handleClick () {
        const {name, doing} = this.state.form
        if(!name) {
            this.Toast('请填写您的大名！')
            return false
        }
        if(!doing) {
            this.Toast('你干啥的')
            return false
        }
        if(this.clickNum() === 5){
            this.Toast("程序代码错误。")
            return false
        }
        if(this.clickNum() >= 6) {
            this.Toast("咦，都说了代码错误了？你咋还点？")
            return false
        }
    }
    render() {
        const { name, doing } = this.state.form;
        const { toastTitle } =this.state
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
                                placeholder="你干啥的？"
                                onChange={(event)=>{this.change(event, 'doing')}}
                            />    
                        </div>
                        <div
                            className="main-form-btn"
                            onClick={()=>{this.handleClick()}}
                        >
                            点一下试试 {">"}
                        </div>
                    </div>
                </div>
                {toastTitle ? <div className="toast">
                    {toastTitle}
                </div>:null}
            </LaoutBg>
        );
    }
}

export default index;
