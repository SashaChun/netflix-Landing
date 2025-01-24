import { useRef, useState, useEffect } from "react";
import "./Popular.css";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

import breakingBad from "../../assets/filmPosters/breakingBad.png";
import LifeInaYear from "../../assets/filmPosters/LifeInaYear.png";
import ManVsBee from "../../assets/filmPosters/ManVsBee.jpg";
import MoneyHeist from "../../assets/filmPosters/MoneyHeist.png";
import squidGame from "../../assets/filmPosters/squidGame.png";
import TheRain from "../../assets/filmPosters/TheRain.png";

const filmsImgArray = [
    ManVsBee, breakingBad, TheRain, LifeInaYear, MoneyHeist, squidGame,
    TheRain, LifeInaYear, MoneyHeist, squidGame, TheRain, LifeInaYear, MoneyHeist, squidGame
];

export default function Popular() {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    useEffect(() => {
        checkScroll();
    }, []);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
        }
    };

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 300;
            current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
            setTimeout(checkScroll, 300);
        }
    };

    return (
        <div className="popular">
            <div className="popular__header">
                <p className="popular__title">POPULAR THIS WEEK</p>
                <div className="popular__controls">
                    <button
                        className={`popular__button popular__button--prev ${!canScrollLeft ? 'disabled' : ''}`}
                        onClick={() => scroll("left")}
                        disabled={!canScrollLeft}
                    >
                        <TfiArrowCircleLeft />
                    </button>
                    <button
                        className={`popular__button popular__button--next ${!canScrollRight ? 'disabled' : ''}`}
                        onClick={() => scroll("right")}
                        disabled={!canScrollRight}
                    >
                        <TfiArrowCircleRight />
                    </button>
                </div>
            </div>
            <div className="popular__films-wrapper" ref={scrollRef} onScroll={checkScroll}>
                <div className="popular__films">
                    {filmsImgArray.map((item, index) => (
                        <img key={index} className="popular__film" src={item} alt={`Film ${index + 1}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}
