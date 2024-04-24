
import './promo.css'
import men_newImg from './../../main_menu/new_collection/men_new.png';
import female_newImg from './../../main_menu/new_collection/female_new.png';
import baby_newImg from './../../main_menu/new_collection/baby_new.png';
import { useSelector } from 'react-redux';


const Promo = () => {
    const currentCat = useSelector(state => state.rootReducer.uiSlice.currentCategory)

    return (<section className="promo">
        <div className="container_pr">
            <div className="promo__content">
                <div className="promo_img">
                    {currentCat === 0 ? <img src={female_newImg} alt="men_new" /> : console.log()}
                    {currentCat === 1 ? <img src={men_newImg} alt="female_new" /> : console.log()} 
                    {currentCat === 2 ? <img src={baby_newImg} alt="baby_new" /> : console.log()}
                </div>
            </div> 
        </div>
    </section>);
}
 
export default Promo;
