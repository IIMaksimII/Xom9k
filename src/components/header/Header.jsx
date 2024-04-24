import logoImg from './../../main_menu/header/logo.png'

import userImg from './../../main_menu/header/user.png'
import lickedImg from './../../main_menu/header/liked.png'
import bagImg from './../../main_menu/header/bag.png'
import React, { useState } from 'react';


import './header.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentCategory } from '../../store/reducers/uiSlice';

function Header (){
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    const categorise = useSelector(state => state.rootReducer.uiSlice.categories)
    const dispatch = useDispatch()

    const handleClick = (el) => {
        toggleOpen()

        dispatch(changeCurrentCategory(el.id))
    }

    return <header className="header">
         <div className="container_hed">
            <div className="header_row">
                <div className="header_logo">
                    <img src={logoImg} alt='Logo'/>
                    <span>Logo</span>
                </div>
                <div className="header_nav">
                    <ul>
                        {categorise.map(el => {
                            return(
                                <button className="bt" onClick={() => handleClick(el)}>
                                    {el.text}
                                </button>
                            );
                        })}
                        {/* <button className="bt1" onClick={toggleOpen}>
                                Женская
                        </button>
                        <button className="bt2" onClick={toggleOpen}>
                                Мужская
                        </button>
                        <button className="bt3" onClick={toggleOpen}>
                                Детская
                        </button> */}
                    </ul>
                </div>
                <user className="header_user">
                    <ul >
                        
                        <button className="button" onClick={toggleOpen}>
                            <img src={userImg} alt='User' className='img' />
                        </button>
                        <button className="button2" onClick={toggleOpen}>
                            <img src={lickedImg} alt='Licked' className='img'/>
                        </button>
                        <button className="button3" onClick={toggleOpen}>
                        <img src={bagImg} alt='Bag' className='img'/>
                        </button>
                    
                    </ul>
                </user>
            </div>
         </div>
      </header>;

}


export default Header;