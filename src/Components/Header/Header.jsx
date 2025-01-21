import logo from '../../assets/logo.png'
import profilePicture from '../../assets/profilePicture.png'
import searchIcon from '../../assets/searchIcon.png'
import './Header.css'
import './HeaderMedia.css'

export default function Header() {
    return (
        <div className="header">
            <div className="header__logo-section">
                <img src={logo} alt="logo" className="header__logo" />
                <div className="header__divider"></div>
                <p className="header__announcement">Friday, July 8th </p>
            </div>
            <div className="header__profile-section">
                <button className="header__search-button">
                    <img src={searchIcon} alt="searchIcon" className="header__search-icon" />
                </button>
                <img src={profilePicture} alt="profilePicture" className="header__profile-picture" />
            </div>
        </div>
    );
}
