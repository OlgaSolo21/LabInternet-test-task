const contentInfo = 'Не могли покрыть внезапные траты свыше 7000 ₽. ' +
    'Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги ' +
    'на процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к ' +
    'заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах' +
    ' и штрафахНе могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным ' +
    'деньгам помогает отказаться от кредитов и экономить деньги на процентах и штрафах'

const contentInfoSmall = 'Не могли покрыть внезапные траты свыше 7000 ₽. Доступ ' +
    'к заработанным деньгам помогает отказаться от кредитов и экономить деньги на ' +
    'процентах и штрафах Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к ' +
    'заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах' +
    'и штрафах'

const title = 'Опрошенных пользовались микрокредитами'

export function InfoService() {
    return (
        <section className="infoService">
            <div className="infoService__info">
                <div className="infoService__content">
                    <h3 className="infoService__title">{title}</h3>
                    <p className="infoService__description">{contentInfoSmall}</p>
                </div>
                <div className="infoService__content">
                    <h3 className="infoService__title">{title}</h3>
                    <p className="infoService__description">{contentInfo}</p>
                </div>
            </div>
            <div className="infoService__info infoService__info_reverse">
                <div className="infoService__content">
                    <h3 className="infoService__title">{title}</h3>
                    <p className="infoService__description">{contentInfoSmall}</p>
                </div>
                <div className="infoService__content">
                    <h3 className="infoService__title">{title}</h3>
                    <p className="infoService__description">{contentInfo}</p>
                </div>
            </div>
        </section>
    )
}