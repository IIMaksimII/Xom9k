
import './promo.css'
import men_newImg from './../../main_menu/new_collection/men_new.png';
import female_newImg from './../../main_menu/new_collection/female_new.png';
import baby_newImg from './../../main_menu/new_collection/baby_new.png';


const Promo = () => {
    return (<section className="promo">
        <div className="container_pr">
            <div className="promo__content">
                <div className="promo_img">
                    <img src={men_newImg} alt="men_new" />
                </div>
                <div className="promo_img">
                    <img src={female_newImg} alt="female_new" />
                </div>
                <div className="promo_img">
                    <img src={baby_newImg} alt="baby_new" />
                </div>
            </div>
        </div>
    </section>);
}
 
export default Promo;
