import {data} from "./data.js"
import {useState} from "react";

export function About() {

    const [dataAbout] = useState(data)

    return (
        <section className="about" id="about">
            <h2 className="heading">Как это работает</h2>
            <div className="about__content">
                {dataAbout.map((item) => (
                    <div className="about__info" key={item.id}>
                        <img src={item.img} alt="иконка компонента" className="about__img"/>
                        <div className="about__info-text">
                            <h3 className="title">{item.title}</h3>
                            <p className="subtitle">{item.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}