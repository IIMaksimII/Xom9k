
import React, { useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import crosImg from './../../main_menu/bater_swaper/cros.png'


import { useSelector } from 'react-redux';
import './baerswaper.css'; 



const Banerswaper = () => {
  const currentCat = useSelector(state => state.rootReducer.uiSlice.currentCategory);

    if (currentCat === 0) {
        return <Slider1 />;
    }
}


const Slider1 = () => {
  const images = [
    { src: crosImg, alt: "women_new1", caption: "Image 1" },
    { src: crosImg, alt: "women_new2", caption: "Image 2" },
    { src: crosImg, alt: "women_new3", caption: "Image 3" },
    { src: crosImg, alt: "women_new1", caption: "Image 1" },
    { src: crosImg, alt: "women_new2", caption: "Image 2" },
    { src: crosImg, alt: "women_new3", caption: "Image 3" },
    { src: crosImg, alt: "women_new1", caption: "Image 1" },
    { src: crosImg, alt: "women_new2", caption: "Image 2" },
    { src: crosImg, alt: "women_new3", caption: "Image 3" },
    { src: crosImg, alt: "women_new1", caption: "Image 1" },
    { src: crosImg, alt: "women_new2", caption: "Image 2" },
    { src: crosImg, alt: "women_new3", caption: "Image 3" },
    { src: crosImg, alt: "women_new1", caption: "Image 1" },
    { src: crosImg, alt: "women_new2", caption: "Image 2" },
    { src: crosImg, alt: "women_new3", caption: "Image 3" },
    { src: crosImg, alt: "women_new1", caption: "Image 1" },
   
    
    // Добавьте любое количество изображений с разными src, alt и подписями
  ];
  const sliderRef = useRef(null); // Ссылка на слайдер
let intervalId; // Определение переменной для идентификатора интервала

// Функция для прокрутки слайдера вправо при наведении курсора на правую кнопку
const handleMouseEnterRight = () => {
  intervalId = setInterval(() => { // Присвоение идентификатора интервала
    const slider = sliderRef.current;
    if (slider) {
      slider.go('+1', true); // Прокрутка влево на один слайд
    }
  }, 500); // Задержка 100 мс
};

// Функция для остановки прокрутки при уходе курсора с кнопки
const handleMouseLeave = () => {
  clearInterval(intervalId);
};

// Функция для прокрутки слайдера влево при наведении курсора на левую кнопку
const handleMouseEnterLeft = () => {
  intervalId = setInterval(() => { // Присвоение идентификатора интервала
    const slider = sliderRef.current;
    if (slider) {
      slider.go('-1', true); // Прокрутка вправо на один слайд
    }
  }, 500); // Задержка 100 мс
};

return (
  <div className="splide-container">
    <Splide
      ref={sliderRef}
      options={{
        perPage: 9, // Отображать две фотографии одновременно
        gap: 10, // Расстояние между фотографиями
        type: 'slide', // Тип прокрутки
        autoplay: false, // Отключить автопрокрутку
        rewind: false, // Отключить перемотку на начало после конца
        focus: 'center', // Фокусировка на центральном слайде
        pagination: false, // Отключить пагинацию
        arrows: false, // Отключить стрелки
      }}
    >
      {images.map((image, index) => (
        <SplideSlide key={index} className="image">
          <img src={image.src} alt={image.alt}  />
          <div className="caption">{image.caption}</div>
        </SplideSlide>
      ))}
    </Splide>
    <button
      className="scroll-button left"
      onMouseEnter={handleMouseEnterLeft}
      onMouseLeave={handleMouseLeave}
    >
      &lt;
    </button>
    <button
      className="scroll-button right"
      onMouseEnter={handleMouseEnterRight}
      onMouseLeave={handleMouseLeave}
    >
      &gt;
    </button>
  </div>
);
};


export default Banerswaper;