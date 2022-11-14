import {Component} from 'react'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import 'reactjs-popup/dist/index.css'
import './index.css'

// const CustomGiHamburgerMenu = React.forwardRef(({open, ...props}, ref) => (
// const CustomGiHamburgerMenu = () => (

// )

class Header extends Component {
  state = {}

  render() {
    return (
      <div className="header-container">
        <Link to="/" className="routing-link">
          <button type="button" className="header-brand-button">
            <img
              className="header-brand-img"
              src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
              alt="website logo"
            />
          </button>
        </Link>

        <Popup
          modal
          trigger={
            <button
              // testid="hamburgerIconButton"
              type="button"
              className="header-hamburger-menu-icon-btn"
            >
              <GiHamburgerMenu className="header-hamburger-menu-icon" />
            </button>
          }
          className="popup-content"
        >
          {close => (
            <div className="popup-container">
              <div className="popup-close-btn-container">
                <button
                  //   testid="closeButton"
                  className="popup-close-btn"
                  type="button"
                  onClick={() => close()}
                >
                  <IoMdClose className="close-btn-icon" />
                </button>
              </div>
              <ul className="popup-menu-container">
                <li className="menu-item-container">
                  <AiFillHome className="menu-item-icon" />
                  <Link to="/" className="routing-link">
                    <p className="menu-item-name">Home</p>
                  </Link>
                </li>

                <li className="menu-item-container">
                  <BsInfoCircleFill className="menu-item-icon" />
                  <Link to="/about" className="routing-link">
                    <p className="menu-item-name">About</p>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default Header
