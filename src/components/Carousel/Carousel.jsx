import Slider from 'react-slick';
import {useState} from "react";
import {data} from "./data.js"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { useMediaQuery } from 'react-responsive';


const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true,
                arrows: false
            }
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        },
    ]
};

export function Carousel() {

    const [reviews] = useState(data)

    return (
        <div className="carousel">
            <Slider {...settings}>
                {reviews.map((item) => (
                    <div className="review link" key={item.id}>
                        <div className="review__info" >
                            <img src={item.img}/>
                            <div className="review__info-text">
                                <p className="review__title">{item.name}</p>
                                <p className="review__subtitle">{item.city}</p>
                            </div>
                        </div>
                        <p className="review__text">{item.review}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}