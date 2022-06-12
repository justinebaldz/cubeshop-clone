import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick.css";
import img_1 from "./1.jpg";
import img_2 from "./2.jpg";
import img_3 from "./3.jpg";
import img_4 from "./4.jpg";
import img_5 from "./5.jpg"; 

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            // add this : , background: "gray", borderRadius: "50%" if you want to show arrow on slider and change display to "block"
            style={{ ...style, display: "none"}}
            onClick={onClick}
        />
    );
}

export default class Fade extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 3000,
            swipeToSlide: true,
            pauseOnHover: true,
            prevArrow: <Arrow/>,
            nextArrow: <Arrow/>
        };
        return (
            <div className="w-full place-items-center m-auto mb-[2.5rem]">
                <Slider {...settings}>
                    <div>
                        <img src={img_1} />
                    </div>
                    <div>
                        <img src={img_2} />
                    </div>
                    <div>
                        <img src={img_3} />
                    </div>
                    <div>
                        <img src={img_4} />
                    </div>
                    <div>
                        <img src={img_5} />
                    </div>
                </Slider>
            </div>
        );
    }
}