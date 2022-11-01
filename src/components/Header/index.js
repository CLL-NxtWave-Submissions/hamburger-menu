import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="header-container">
    <button type="button" className="header-brand-button">
      <img
        className="header-brand-img"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </button>

    <Popup
      modal
      trigger={<GiHamburgerMenu className="header-hamburger-menu-icon" />}
      className="popup-content"
      closeOnDocumentClick
    >
      <>
        <Link to="/" className="menu-item-container">
          <AiFillHome className="menu-item-icon" />
          <p className="menu-item-name">Home</p>
        </Link>

        <Link to="/about" className="menu-item-container">
          <BsInfoCircleFill className="menu-item-icon" />
          <p className="menu-item-name">About</p>
        </Link>
      </>
    </Popup>
  </div>
)

export default Header
