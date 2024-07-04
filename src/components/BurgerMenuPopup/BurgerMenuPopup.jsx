import arrow from "../../assets/small-right.svg"

export default function BurgerMenuPopup({isOpen, onClose}) {

    return (
        <header>
            <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
                <div className="popup__container">
                    <div className="popup__logo">
                        <svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="25" cy="12" r="12" fill="#ECEFF2"/>
                            <circle cx="12" cy="12" r="12" fill="#2A6CEA"/>
                        </svg>
                        <p className="popup__logo-text">testLab</p>
                        <button
                            type="button"
                            aria-label="Close"
                            className="popup__buttonClose"
                            onClick={onClose}
                        />
                    </div>
                    <div className="popup__navigation">
                        <nav className="popup__links">
                            <a href="#about"
                               className="popup__link link"
                               onClick={onClose}>Как это работает
                                <img className="popup__img" src={arrow} alt="Стрелка навигации"/>
                            </a>
                            <a href="#сost"
                               className="popup__link link"
                               onClick={onClose}>3-й блок
                                <img className="popup__img" src={arrow} alt="Стрелка навигации"/>
                            </a>
                            <a href="#faq"
                               className="popup__link link"
                               onClick={onClose}>Вопросы и ответы
                                <img className="popup__img" src={arrow} alt="Стрелка навигации"/>
                            </a>
                            <a href="#orderForm"
                               className="popup__link link"
                               onClick={onClose}>Форма
                                <img className="popup__img" src={arrow} alt="Стрелка навигации"/>
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}