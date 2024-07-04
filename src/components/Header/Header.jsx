
export function Header({openBurger}) {

    const anchors = [].slice.call(document.querySelectorAll('a[href*="#"]'))
    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            const blockID = anchor.getAttribute('href').split('#')[1]
            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        })
    }

    return (
        <header className="header">
            <div className="header__logo">
                <svg width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="25" cy="12" r="12" fill="#ECEFF2"/>
                    <circle cx="12" cy="12" r="12" fill="#2A6CEA"/>
                </svg>
                <p className="header__logo-text">testLab</p>
            </div>
            <div className="header__links">
                <a href="#about" className="header__links-link link">Как это работает</a>
                <a href="#сost" className="header__links-link link">3-й блок</a>
                <a href="#faq" className="header__links-link link">Вопросы и ответы</a>
                <a href="#orderForm" className="header__links-link link">Форма</a>
            </div>

            <div className="burger">
                <button className="burger__button" type="button" onClick={openBurger}/>
            </div>
        </header>
    )
}