import '../Page/MainPage.css'
import Header from "../Components/Header/Header.jsx";
import AboutFilm from "../Components/AboutFilm/AboutFilm.jsx";
import Background from "../Components/Background.jsx";
import Popular from "../Components/Popular/Popular.jsx";

export default function MainPage(){
    return <div className={'backGround'}>
        <Background/>
        <Header/>
        <AboutFilm/>
        <Popular/>
    </div>
}