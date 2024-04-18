import logoImg from './../../main_menu/header/logo.png'

import searchImg from './../../main_menu/header/search.png'
import userImg from './../../main_menu/header/user.png'
import lickedImg from './../../main_menu/header/liked.png'
import bagImg from './../../main_menu/header/bag.png'

import './header.css'

function Header (){
    return <header className="header">
         <div className="container_hed">
            <div className="header_row">
                <div className="header_logo">
                    <img src={logoImg} alt='Logo'/>
                    <span>Logo</span>
                </div>
                <nav className="header_nav">
                    <ul>
                        <li><a helf="#!">Женская</a></li>
                        <li><a helf="#!">Мужская</a></li>
                        <li><a helf="#!">Детская</a></li>
                    </ul>
                </nav>
                <user className="header_user">
                    <ul>
                        <li><a helf="#!"><img src={searchImg} alt='Search'/></a></li>
                        <li><a helf="#!"><img src={userImg} alt='User'/></a></li>
                        <li><a helf="#!"><img src={lickedImg} alt='Licked'/></a></li>
                        <li><a helf="#!"><img src={bagImg} alt='Bag'/></a></li>
                    </ul>
                </user>
            </div>
         </div>
      </header>;

}


export default Header;