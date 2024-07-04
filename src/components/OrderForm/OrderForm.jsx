
export function OrderForm({onSubmitData}) {

    function handleSubmit(e) {
        e.preventDefault()
        onSubmitData({
            name: values.name,
            tel: values.tel
        })
    }
    return (
        <section id="orderForm" className="orderForm">
            <h3 className="heading">Отправь форму</h3>
            <form className="orderForm__form" noValidate>
                <div className="orderForm__container">
                    <input
                        id="name"
                        className="orderForm__input"
                        type="text"
                        placeholder=" "
                        minLength="2"
                    />
                    <span className="form__error">Минимальная длина имени 2 символа</span>
                    {/*{errors && <p className="error">Введите имя</p>}*/}
                    <label
                        htmlFor="name"
                        className="orderForm__label">Имя</label>
                </div>
                <div className="orderForm__container">
                    <input
                        id="phone"
                        className="orderForm__input"
                        type="tel"
                        placeholder=" "
                        pattern="[789][0-9]{10}"
                    />
                    <span className="form__error">Это поле должно содержать телефон в формате 71234567890</span>
                    {/*{errors && <p className="error">Неверный формат номера телефона</p>}*/}
                    <label
                        htmlFor="phone"
                        className="orderForm__label">Телефон</label>
                </div>
                <label className="orderForm__check link">Согласен, отказываюсь
                    <input type="checkbox" className="orderForm__check-input"/>
                    </label>
                <button className="orderForm__check-button link"
                        type="submit"
                        onClick={handleSubmit}
                >Отправить</button>
            </form>
        </section>
    )
}