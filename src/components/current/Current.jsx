import React from 'react';
import './current.css'; // Подключаем файл стилей

import { useSelector } from 'react-redux';
import currImg from './../../main_menu/current/curr.png'
import currImg2 from './../../main_menu/current/curr2.png'
import currImg3 from './../../main_menu/current/curr3.png'

const ImageGallery = () => {
 
    const currentCat = useSelector(state => state.rootReducer.uiSlice.currentCategory);

    if (currentCat === 0) {
        return <Cont />;
    }
};


const Cont = () => {
    const image_men = [
      { src: currImg, alt: "women_new1", captions: "Puma" },
      { src: currImg2, alt: "women_new2", captions: "Reebok" },
      { src: currImg3, alt: "women_new3", captions: "Aeronautica Militare" },

     
      
      // Добавьте любое количество изображений с разными src, alt и подписями
    ];
    return (
        <div className="containers-men">
          <div className="headers-men">
            <h2>Актуально</h2>
          </div>
          <div className="images-container-men">
            {image_men.map((image, index) => (
              <div key={index} className="image-men">
                <img src={image.src} alt={image.alt} />
                <div className="caption-men">{image.captions}</div>
              </div>
            ))}
          </div>
        </div>
      );
    };
export default ImageGallery;