
import { useSelector } from 'react-redux';
import  './subtitle.css'

import React, { useState } from 'react';

function Subtitle() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    const currentCategory = useSelector(state => state.rootReducer.uiSlice.currentCategory)

    const renderComp = () => {
    if (currentCategory === 0) {
      return(
        <ul className="dropdown-menu">
            <li>Балетки</li>
            <li>Ботильоны</li>
            <li>Ботинки</li>
            {/* Добавьте дополнительные пункты меню здесь */}
          </ul>
      );
    }
    else if (currentCategory === 1) {
      return(
        <ul className="dropdown-menu">
            <li>Куртки</li>
            <li>Ботинки</li>
            <li>Кроссовки</li>
            {/* Добавьте дополнительные пункты меню здесь */}
          </ul>
      )
    }
    else if (currentCategory === 2) {}
    }

    return ( 
      <div className="dropdown">
        <button className="dropdown-button" onClick={toggleOpen}>
          Одежда
        </button>
        
        {isOpen && (
          renderComp()
        )}
      </div>
    );
  }  
/*const Subtitle = () => {
    return ( <section className= "subtitle">
    <div className="container_sub">
        <div className="subtitle_row">
            <nav className="subtitle_nav">
                <ul>
                    <li><a helf="#!">НОВИНКИ</a></li>
                    <li><a helf="#!">ОДЕЖДА</a></li>
                    <li><a helf="#!">ОБУВЬ</a></li>
                    <li><a helf="#!">АКСЕССУАРЫ</a></li>
                </ul>
            </nav>
        </div>
    </div>

</section> );
}*/
 
export default Subtitle;