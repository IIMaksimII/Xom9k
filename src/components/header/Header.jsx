

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
    
    const [activeButton, setActiveButton] = useState(null);

    const categorise = useSelector(state => state.rootReducer.uiSlice.categories)
    const dispatch = useDispatch()
    const handleClick = (el) => {
        setActiveButton(el.id);
        dispatch(changeCurrentCategory(el.id));
      };


    
    return <header className="header">
         <div className="container_hed">
            <div className="header_row">
                <div className="header_logo">
                    <button className='bt-logo' onClick={null}> 
                    <span>Logo</span>
                    </button>
                </div>
                <div className="header_nav">
                    <ul>
                    {categorise.map(el => (
                <li key={el.id}>
                  <button 
                    className={`bt ${activeButton === el.id ? 'active' : ''}`} 
                    onClick={() => handleClick(el)}
                  >
                    {el.text}
                  </button>
                </li>
                        )
                      )
                    }
                    </ul>
                </div>
                  
      

                <user className="header_user">
                <div className='input-wrapper'>
                    <input className='input' tupe="text" placeholder='Поиск'></input>
                    <svg viewBox='0 0 24 24'></svg>
                  </div>
                        <button className="button" onClick={toggleOpen}>
                            <img src={userImg} alt='User' className='img' />
                        </button>
                        <button className="button" onClick={toggleOpen}>
                            <img src={lickedImg} alt='Licked' className='img'/>
                        </button>
                        <button className="button" onClick={toggleOpen}>
                        <img src={bagImg} alt='Bag' className='img'/>
                        </button>
                </user>
            </div>
         </div>
      </header>;

}

export default Header;