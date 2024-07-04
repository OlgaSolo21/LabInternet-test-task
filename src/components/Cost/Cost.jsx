import cost from "../../assets/cost.jpg"
import costMain from "../../assets/costMain.png"

export function Cost() {
    return (
        <section className="cost" id="сost">
            <div className="cost__info">
                <h2 className="cost__title">Круто, ты дошел до третьего блока</h2>
                <p className="cost__description">63% опрошенных пользовались кредитами из-за того, что не могли покрыть непредвиденные расходы свыше 15 000 ₽.</p>
                <p className="cost__description">Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах.</p>
            </div>
                <img className="cost__img" src={costMain} alt="изображение приложения"/>
                <img src={cost} className="cost__img_prev" alt="изображение грузовика"/>
        </section>
    )
}