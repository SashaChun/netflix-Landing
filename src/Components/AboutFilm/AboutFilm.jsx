import './AboutFilm.css'
import './AboutFilmMedia.css'
import { CSSTransition } from "react-transition-group";


import starActive from '../../assets/starActive.png'
import starPassive from '../../assets/starPassive.png'
import {useState} from "react";
import {useEffect} from "react";

export default function AboutFilm() {

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <div className="AboutFilm">
            <CSSTransition in={show} timeout={1000} classNames="fade" unmountOnExit>
                <div>
                    <div className="AboutFilm__genres">
                        <p>Drama</p>
                        <span className={'AboutFilm__divider'}></span>
                        <p>Thriller</p>
                        <span className={'AboutFilm__divider'}></span>
                        <p>Supernatural</p>
                    </div>

                    <div className="AboutFilm__info">
                        <h1 className="AboutFilm__title">Stranger Things</h1>
                        <div className="AboutFilm__details">
                            <p className="AboutFilm__year">2019</p>
                            <span className="AboutFilm__divider"></span>
                            <span className="AboutFilm__director">
                    <p className="AboutFilm__director-label">DIRECTOR: </p>
                    <p className="AboutFilm__director-name"> Shawn Levy</p>
                </span>
                            <span className="AboutFilm__divider"></span>
                            <span className="AboutFilm__seasons">
                    <p className="AboutFilm__seasons-label">SEASONS:</p>
                    <p className="AboutFilm__seasons-count">3 (5 Episodes)</p>
                </span>
                        </div>
                        <div className="AboutFilm__description">
                            <p className="AboutFilm__description-text">
                                In 1980s Indiana, a group of young friends witness supernatural forces and secret government
                                exploits. As they search for answers, the children unravel a series of extraordinary mysteries.
                            </p>
                        </div>
                    </div>
                </div>
            </CSSTransition>
            <div className={'AboutFilm__star'}>
                <img src={starActive} alt=""/>
                <img src={starActive} alt=""/>
                <img src={starActive} alt=""/>
                <img src={starPassive} alt=""/>
                <img src={starPassive} alt=""/>
            </div>
            <div className={'AboutFilm__buttons'}>
                <button className={'AboutFilm__button-stream'}>
                    <p>STREAM NOW</p>
                    <div>
                        <span></span>
                    </div>
                </button>
                <button className={'AboutFilm__button-episodes'}>
                    <p>ALL EPISODES</p>
                </button>
            </div>
        </div>
    );
}
