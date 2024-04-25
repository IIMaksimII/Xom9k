
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
        <div className="centered-container">
          <div className="container">
            <div className="column">
              <ul className="category-list">
                <li><a href="/all-clothing">Вся оджеда</a></li>
                <li><a href="/t-shirts">• Блузы и рубашки</a></li>
                <li><a href="/hoodies">• Брюки</a></li>
                <li><a href="/t-shirts">• Джемперы и кардиганы</a></li>
                <li><a href="/hoodies">• Джинсы</a></li>
                <li><a href="/t-shirts">• Футболки и поло</a></li>
                <li><a href="/hoodies">• Худи и свитшоты</a></li>
              </ul>
            </div>
            <div className="column">
                <ul className="brand-list">
                <li><a href="/brand">Все бренды</a></li>
                <li><a href="/nike">• Nike</a></li>
                <li><a href="/puma">• Puma</a></li>
                <li><a href="/nike">• Adidas</a></li>
                <li><a href="/puma">• Reebok</a></li>
              </ul>
            </div>
          </div>
        </div>
        );
      case 'shoes':
        return (
          <div className="centered-container">
          <div className="container">
            <div className="column">
              <ul className="category-list">
                <li><a href="/all-clothing">Вся обувь</a></li>
                <li><a href="/t-shirts">• Балетки</a></li>
                <li><a href="/hoodies">• Ботинки</a></li>
                <li><a href="/t-shirts">• Кроссовки и кеды</a></li>
                <li><a href="/hoodies">• Туфли</a></li>
                <li><a href="/t-shirts">• Угги и унты</a></li>
              </ul>
            </div>
            <div className="column">
                <ul className="brand-list">
                <li><a href="/brand">Все бренды</a></li>
                <li><a href="/nike">• Nike</a></li>
                <li><a href="/puma">• Puma</a></li>
                <li><a href="/nike">• Adidas</a></li>
                <li><a href="/puma">• Reebok</a></li>
              </ul>
            </div>
          </div>
        </div>
        );
      case 'accessories':
        return (
          <div className="centered-container">
          <div className="container">
            <div className="column">
              <ul className="category-list">
                <li><a href="/all-clothing">Все аксессуары</a></li>
                <li><a href="/t-shirts">• Головные уборы</a></li>
                <li><a href="/hoodies">• Зонты</a></li>
                <li><a href="/t-shirts">• Кошельки и визитницы</a></li>
                <li><a href="/hoodies">• Очки</a></li>
                <li><a href="/t-shirts">• Рюкзаки</a></li>
              </ul>
            </div>
            <div className="column">
                <ul className="brand-list">
                <li><a href="/brand">Все бренды</a></li>
                <li><a href="/nike">• Guess</a></li>
                <li><a href="/puma">• David Jones</a></li>
                <li><a href="/nike">• Labbra</a></li>
                <li><a href="/puma">• Tommi Hilfiger</a></li>
              </ul>
            </div>
          </div>
        </div>
        );
      default:
        return null;
    }
    
    }
    else if (currentCategory === 1) {
      switch (selectedCategory) {
        
        case 'clothing':
        return (
        <div className="centered-container">
          <div className="container">
            <div className="column">
              <ul className="category-list">
                <li><a href="/all-clothing">Вся оджеда</a></li>
                <li><a href="/t-shirts">• Брюки</a></li>
                <li><a href="/hoodies">• Рубашки</a></li>
                <li><a href="/t-shirts">• Джемперы</a></li>
                <li><a href="/hoodies">• Джинсы</a></li>
                <li><a href="/t-shirts">• Футболки и поло</a></li>
                <li><a href="/hoodies">• Худи и свитшоты</a></li>
              </ul>
            </div>
            <div className="column">
                <ul className="brand-list">
                <li><a href="/brand">Все бренды</a></li>
                <li><a href="/nike">• Nike</a></li>
                <li><a href="/puma">• Puma</a></li>
                <li><a href="/nike">• Adidas</a></li>
                <li><a href="/puma">• Reebok</a></li>
              </ul>
            </div>
          </div>
        </div>
        );
      case 'shoes':
        return (
          <div className="centered-container">
          <div className="container">
            <div className="column">
              <ul className="category-list">
                <li><a href="/all-clothing">Вся обувь</a></li>
                <li><a href="/t-shirts">• Ботинки</a></li>
                <li><a href="/t-shirts">• Кроссовки и кеды</a></li>
                <li><a href="/hoodies">• Туфли</a></li>
                <li><a href="/t-shirts">• Угги и унты</a></li>
              </ul>
            </div>
            <div className="column">
                <ul className="brand-list">
                <li><a href="/brand">Все бренды</a></li>
                <li><a href="/nike">• Nike</a></li>
                <li><a href="/puma">• Puma</a></li>
                <li><a href="/nike">• Adidas</a></li>
                <li><a href="/puma">• Reebok</a></li>
              </ul>
            </div>
          </div>
        </div>
        );
      case 'accessories':
        return (
          <div className="centered-container">
          <div className="container">
            <div className="column">
              <ul className="category-list">
                <li><a href="/all-clothing">Все аксессуары</a></li>
                <li><a href="/t-shirts">• Головные уборы</a></li>
                <li><a href="/hoodies">• Зонты</a></li>
                <li><a href="/t-shirts">• Кошельки и визитницы</a></li>
                <li><a href="/hoodies">• Очки</a></li>
                <li><a href="/t-shirts">• Рюкзаки</a></li>
                <li><a href="/t-shirts">• Ремни</a></li>
              </ul>
            </div>
            <div className="column">
                <ul className="brand-list">
                <li><a href="/brand">Все бренды</a></li>
                <li><a href="/nike">• Guess</a></li>
                <li><a href="/puma">• Lacoste</a></li>
                <li><a href="/nike">• Casio</a></li>
                <li><a href="/puma">• Tommi Hilfiger</a></li>
                <li><a href="/puma">• Mango Man</a></li>
              </ul>
            </div>
          </div>
        </div>
        );
      default:
        return null;
    }
    }
    else if (currentCategory === 2) {
      switch (selectedCategory) {
        
        case 'girls':
        return (
        <div className="centered-container">
          <div className="container">
            <div className="column">
              <ul className="category-list">
                <li><a href="/all-clothing">Вся оджеда</a></li>
                <li><a href="/t-shirts">• Блузы и рубашки</a></li>
                <li><a href="/hoodies">• Брюки</a></li>
                <li><a href="/t-shirts">• Джемперы и кардиганы</a></li>
                <li><a href="/hoodies">• Джинсы</a></li>
                <li><a href="/t-shirts">• Футболки и поло</a></li>
                <li><a href="/hoodies">• Худи и свитшоты</a></li>
              </ul>
            </div>
            <div className="column">
                <ul className="brand-list">
                <li><a href="/brand">Все бренды</a></li>
                <li><a href="/nike">• Nike</a></li>
                <li><a href="/puma">• Puma</a></li>
                <li><a href="/nike">• Adidas</a></li>
                <li><a href="/puma">• Reebok</a></li>
              </ul>
            </div>
            <div className="column">
              <ul className="accessories-list">
                <li><a href="/bags">• Сумки</a></li>
                <li><a href="/hats">• Головные уборы</a></li>
                <li><a href="/scarves">• Шарфы</a></li>
              </ul>
            </div>
          </div>
          
           
        </div>
        );
      case 'boys':
        return (
          <div className="centered-container">
          <div className="container">
            <div className="column">
              <ul className="category-list">
                <li><a href="/all-clothing">Вся обувь</a></li>
                <li><a href="/t-shirts">• Балетки</a></li>
                <li><a href="/hoodies">• Ботинки</a></li>
                <li><a href="/t-shirts">• Кроссовки и кеды</a></li>
                <li><a href="/hoodies">• Туфли</a></li>
                <li><a href="/t-shirts">• Угги и унты</a></li>
              </ul>
            </div>
            <div className="column">
                <ul className="brand-list">
                <li><a href="/brand">Все бренды</a></li>
                <li><a href="/nike">• Nike</a></li>
                <li><a href="/puma">• Puma</a></li>
                <li><a href="/nike">• Adidas</a></li>
                <li><a href="/puma">• Reebok</a></li>
              </ul>
            </div>
          </div>
        </div>
        );
      case 'kids':
        return (
          <div className="centered-container">
          <div className="container">
            <div className="column">
              <ul className="category-list">
                <li><a href="/all-clothing">Все аксессуары</a></li>
                <li><a href="/t-shirts">• Головные уборы</a></li>
                <li><a href="/hoodies">• Зонты</a></li>
                <li><a href="/t-shirts">• Кошельки и визитницы</a></li>
                <li><a href="/hoodies">• Очки</a></li>
                <li><a href="/t-shirts">• Рюкзаки</a></li>
              </ul>
            </div>
            <div className="column">
                <ul className="brand-list">
                <li><a href="/brand">Все бренды</a></li>
                <li><a href="/nike">• Guess</a></li>
                <li><a href="/puma">• David Jones</a></li>
                <li><a href="/nike">• Labbra</a></li>
                <li><a href="/puma">• Tommi Hilfiger</a></li>
              </ul>
            </div>
          </div>
        </div>
        );
      default:
        return null;
      }
    }
  }

    if (currentCategory === 0){
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
    else if (currentCategory === 1){
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
    else if (currentCategory === 2){
      return (
        <div className="center-container">
        <div className="dropdown-button">
          <div className="buttons">
            <button onClick={() => { setSelectedCategory('girls'); toggleOpen(); }}>Девочкам</button>
            <button onClick={() => { setSelectedCategory('boys'); toggleOpen(); }}>Мальчикам</button>
            <button onClick={() => { setSelectedCategory('kids'); toggleOpen(); }}>Малышам</button>
          </div >

          {isOpen && (
            renderComp()
          )}
          </div>
        </div>
      );
    }
  }
  
  export default Subtitle;

 
