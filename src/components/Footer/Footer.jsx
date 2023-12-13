import "./Footer.css"

function Footer() {
    return (
        <footer id="footer">
            <address className="footer">
                <a className="footer__place" target="_blank" href="https://yandex.ru/maps/-/CDep7ZmA">Сургут, ул. Маяковского, 8 </a>
                <div className="footer__container">
                    <div className="footer__work-container">
                        <p className="footer__work-title">Время работы:</p>
                        <ul className="footer__list">
                            <li><p className="footer__day">Вт - Чт</p></li>
                            <li><p className="footer__time">17:00 - 23:00</p></li>
                            <li><p className="footer__day">Пт -Сб</p></li>
                            <li><p className="footer__time">17:00 - 02:00</p></li>
                            <li><p className="footer__day">Вс</p></li >
                            <li><p className="footer__time">17:00 - 23:00</p></li >
                        </ul>
                    </div>
                    <div>
                        <a className="footer__link" target="_blank" href="tel:+73462608504" >+7(3462)608-504</a>
                        <a className="footer__link" target="_blank" href="https://t.me/hopspub" >telegram</a>
                    </div>
                </div>
            </address>
        </footer >
    )
}
export default Footer
