import './Popular.css';
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";

import breakingBad from '../../assets/filmPosters/breakingBad.png'
import LifeInaYear from '../../assets/filmPosters/LifeInaYear.png'
import ManVsBee from '../../assets/filmPosters/ManVsBee.jpg'
import MoneyHeist from '../../assets/filmPosters/MoneyHeist.png'
import squidGame from '../../assets/filmPosters/squidGame.png'
import TheRain from '../../assets/filmPosters/TheRain.png'


const  filmsImgArray = [
    ManVsBee , breakingBad , TheRain , LifeInaYear , MoneyHeist , squidGame
]

export default function Popular() {

    return (
        <div className="popular">
            <div className="popular__header">
                <p className="popular__title">POPULAR THIS WEEK</p>
                <div className="popular__controls">
                    <button className="popular__button popular__button--prev">
                        <TfiArrowCircleLeft />
                    </button>
                    <button className="popular__button popular__button--next">
                        <TfiArrowCircleRight />
                    </button>
                </div>
            </div>
            <div className="popular__films-wrapper">
                <div className="popular__films">
                    {filmsImgArray.map((item, index) => (
                        <img
                            key={index}
                            className="popular__film"
                            src={item}
                            alt={`Film ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
