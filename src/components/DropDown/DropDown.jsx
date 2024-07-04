import {useState} from "react";
import {data} from "./data.js"

export function DropDown({isOpen, onToggle}) {

    const [dropDownList] = useState(data)

    return (
        <div className="dropDown">
            {dropDownList.map((item) => (
                <details className="details" key={item.id}>
                    <summary className="details__title">{item.title}</summary>
                    <div className="details__content">{item.description}</div>
                </details>
                ))}
        </div>
    )
}