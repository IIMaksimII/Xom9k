import React, { useState, useEffect } from 'react';
import './promo.css'
import men_newImg from './../../main_menu/new_collection/men_new.png';
import female_newImg from './../../main_menu/new_collection/female_new.png';
import baby_newImg from './../../main_menu/new_collection/baby_new.png';
import newImg from './../../main_menu/new_collection/ban.png';

import { useSelector } from 'react-redux';





const Slider1 = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        { src: newImg, alt: "women_new", url: "/women" },
        { src: newImg, alt: "men_new", url: "/men" },
        { src: newImg, alt: "baby_new", url: "/baby" }
    ];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextImage();
        }, 3100); // Каждые 5,1 секунды (5100 мс)

        return () => clearInterval(intervalId);
    }, );

    return (
        <section className="promo">
            <div className="container_pr">
                <div className="promo__content">
                    <div className="promo_img">
                        
                        <img className='slider-image' src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} />
                        
                    </div>
                    
                    <div className="slider-controls">
                        <button onClick={prevImage}>&#8249;</button> {/* Стрелка влево */}
                        <button onClick={nextImage}>&#8250;</button> {/* Стрелка вправо */}
                    </div>
                </div>
            </div>
        </section>
    );
};
const Slider2 = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        { src: men_newImg, alt: "men_new", url: "/men" },
        { src: female_newImg, alt: "women_new", url: "/women" },
        { src: baby_newImg, alt: "baby_new", url: "/baby" }
    ];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextImage();
        }, 3100); // Каждые 5,1 секунды (5100 мс)

        return () => clearInterval(intervalId);
    }, );

    return (
        <section className="promo">
            <div className="container_pr">
                <div className="promo__content">
                    <div className="promo_img">
                        <img className='slider-image' src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} />
                    </div>
                    <div className="slider-controls">
                        <button onClick={prevImage}>&#8249;</button>
                        <button onClick={nextImage}>&#8250;</button> 
                    </div>
                </div>
            </div>
        </section>
    );
};
const Slider3 = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        { src: baby_newImg, alt: "baby_new", url: "/baby" },
        { src: men_newImg, alt: "men_new", url: "/men" },
        { src: female_newImg, alt: "women_new", url: "/women" },
        
    ];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextImage();
        }, 3100); // Каждые 5,1 секунды (5100 мс)

        return () => clearInterval(intervalId);
    }, );

    return (
        <section className="promo">
            <div className="container_pr">
                <div className="promo__content">
                    <div className="promo_img">
                        <img className='slider-image' src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} />
                    </div>
                    <div className="slider-controls">
                        <button onClick={prevImage}>&#8249;</button>
                        <button onClick={nextImage}>&#8250;</button> 
                    </div>
                </div>
            </div>
        </section>
    );
};
const Promo = () => {
    const currentCat = useSelector(state => state.rootReducer.uiSlice.currentCategory);

    if (currentCat === 0) {
        return <Slider1 />;
    } else if (currentCat === 1) {
        return <Slider2 />;
    } else if (currentCat === 2) {
        return <Slider3 />;
    }
    else{
        return null;
    }
};
 
export default Promo;
