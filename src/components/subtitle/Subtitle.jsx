
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import  './subtitle.css'



function Subtitle() {
    
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

    const currentCategory = useSelector(state => state.rootReducer.uiSlice.currentCategory)
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    
    const renderComp = () => {
      
        
      
    if (currentCategory === 0) {
      switch (selectedCategory) {
        
        case 'clothing':
        return (
          <ul className="dropdown-menu">
            <li>Рубашка</li>
            <li>Куртка</li>
          </ul>
        );
      case 'shoes':
        return (
          <ul className="dropdown-menu">
            <li>Ботинки</li>
            <li>Кроссовки</li>
          </ul>
        );
      case 'accessories':
        return (
          <ul className="dropdown-menu">
             <li>Очки</li>
            <li>Зонты</li>
          </ul>
        );
      default:
        return null;
    }
    
    }
    else if (currentCategory === 1) {
      return(
        <ul className="dropdown-menu">
            
          </ul>
      )
    }
    else if (currentCategory === 2) {}
    }

    return (
      <div className="center-container">
      <div className="dropdown-button">
        <div className="buttons">
          <button onClick={() => { setSelectedCategory('clothing'); toggleOpen(); }}>Одежда</button>
          <button onClick={() => { setSelectedCategory('shoes'); toggleOpen(); }}>Обувь</button>
          <button onClick={() => { setSelectedCategory('accessories'); toggleOpen(); }}>Аксессуары</button>
        </div >
      
      
        {isOpen && (
          renderComp()
         
        )}
        </div>
      </div>
    );
  }
  
  export default Subtitle;

 
