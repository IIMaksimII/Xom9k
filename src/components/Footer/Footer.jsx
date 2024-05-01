
import React from 'react';

import './footer.css';

const Footer = () => {
    return (
        <footer className="dark-footer">
          <div className="container">
            <div className="column">
              <h3>Скидки и акции</h3>
              {/* Добавьте здесь ваш контент для контейнера "Скидки и акции" */}
            </div>
            <div className="column">
              <h3>Помощь</h3>
              {/* Добавьте здесь ваш контент для контейнера "Помощь" */}
            </div>
            <div className="column">
              <h3>О нас</h3>
              {/* Добавьте здесь ваш контент для контейнера "О нас" */}
            </div>
          </div>
          <hr /> {/* Разделительная линия */}
          <div className="horizontal-container">
            <div className="social-media">
              <span>VK</span>
              <span>Telegram</span>
              <span>YouTube</span>
            </div>
            <div className="payment-systems">
              <span>Visa</span>
              <span>Мир</span>
            </div>
          </div>
        </footer>
      );
    };
  
  export default Footer;