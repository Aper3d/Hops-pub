import "./Header.css"
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleClassMenu = () => {
        isOpen ? setIsOpen(false) : setIsOpen(true);
    }
    const scrollMenu = () => {
        setIsOpen(false);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
    const menuOpen = (
        `nav ${isOpen ? 'nav_visible' : ''}`
    );
    const titleHidden = (
        `header__container ${isOpen ? 'header__container_hidden' : ''}`
    )
    const buttonClick = (
        `header__button ${isOpen ? 'header__button_open' : ''}`
    )

    return (
        <header className="header">
            <div className={titleHidden}>
                <NavLink to="/" className="header__title">HOPS/</NavLink>
                <button className={buttonClick} onClick={toggleClassMenu}>+</button>
            </div>
            <nav className={menuOpen}>
                <NavLink className="nav__link" to="/beer" onClick={scrollMenu} end>1. Пиво</NavLink>
                <NavLink className="nav__link" to="/burger" onClick={scrollMenu}>2. Бургеры</NavLink>
                <NavLink className="nav__link" to="/snack" onClick={scrollMenu}>3. Закуски</NavLink>
            </nav>
        </header>
    )
}
export default Header