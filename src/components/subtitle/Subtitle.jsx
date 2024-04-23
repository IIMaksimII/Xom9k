
import  './subtitle.css'

import React, { useState } from 'react';


function Subtitle() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
  
    return (
      <div className="dropdown">
        <button className="dropdown-button" onClick={toggleOpen}>
          Одежда
        </button>
        
        {isOpen && (
          <ul className="dropdown-menu">
            <li>Балетки</li>
            <li>Ботильоны</li>
            <li>Ботинки</li>
            {/* Добавьте дополнительные пункты меню здесь */}
          </ul>
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