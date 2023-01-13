import React, { useState } from 'react';
import './index.css';

const initList = [
    {
        name: 'ELS14460120S ',
        img: require('../../img/20230113215316.jpg'),
        c: '600*1200mm',
        pay: '360',
    },
    {
        name: 'ELU29780S ',
        img: require('../../img/20230113215413.jpg'),
        c: '800*800mm',
        pay: '266',
    },
    {
        name: 'ENP142380 ',
        img: require('../../img/20230113215435.jpg'),
        c: '800*800mm',
        pay: '266',
    },
    {
        name: 'ELM14380S ',
        img: require('../../img/20230113215453.jpg'),
        pay: '266',
        c: '800*800mm'
    },
    {
        name: 'ELR19480S ',
        img: require('../../img/20230113215513.jpg'),
        pay: '266',
        c: '800*800mm'
    },
];

const Home = () => {
    const [name, setName] = useState('');
    const [list, setList] = useState(initList);
    const [selImg, setSelImg] = useState('');

    window.document.title = '欧神诺产品列表'

    const handleClick = () => {
        const newList = initList.filter((row) => row.name.includes(name));
        setList(newList)
    }
    
    return (
        <div className='layout'>
            <div className='home' style={{overflow: selImg ? 'hidden' : 'auto'}}>
                <div className='home-header'>
                    <div className='home-header-input'>
                        <input type="text" onChange={(e) => {
                            setName(e.target.value);
                        }} placeholder='请输入型号/名称/颜色' />
                    </div>
                    <div className='home-header-btn' onClick={() => {
                        handleClick()
                    }}>搜索</div>
                </div>
                <div className='home-tips'>
                    符合条件的产品共<span>{list.length}</span>款
                </div>
                <div className='home-content'>
                    {list.map((item, idx) => (
                        <div className='home-content-item' key={idx} onClick={() => {setSelImg(item.img)}}>
                            <div className='home-content-item-top'>
                                <span>{item.c}</span>
                            </div>
                            <div className='home-content-item-bg'>
                                <div className='home-content-item-center'>
                                    <img src={item.img} alt="" />
                                </div>
                            </div>
                            <div className='home-content-item-color'>
                                <span>{item.name}</span>
                            </div>
                            <div className='home-content-item-pay'>售价：￥{item.pay || 0}</div>
                        </div>
                    ))}
                </div>
                {selImg ? (
                    <div className='home-fl' onClick={()=>{setSelImg('')}}>
                        <div className='home-fl-content'>
                            <img src={selImg} alt="" />
                        </div>
                    </div>
                ) : null
                }
            </div>
        </div>
    )
}

export default Home