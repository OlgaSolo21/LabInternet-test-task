import {Header} from "../Header/Header.jsx";

export function Head({openBurger}) {
    return (
        <section className="head">
            <Header openBurger={openBurger}/>
            <div className="head__container">
                <div className="head__content">
                    <h1 className="head__title">Говорят, никогда не поздно сменить профессию</h1>
                    <p className="head__description">Сделай круто тестовое задание и у тебя получится</p>
                </div>
                <button className="head__button link"
                        onClick={() => {}} type="button">Проще простого!</button>
            </div>
        </section>
    )
}