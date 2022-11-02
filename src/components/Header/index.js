import React from 'react'
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import 'reactjs-popup/dist/index.css'
import './index.css'

const CustomGiHamburgerMenu = React.forwardRef(({open, ...props}, ref) => (
  <button type="button" className="header-hamburger-menu-icon-btn">
    <GiHamburgerMenu
      className="header-hamburger-menu-icon"
      ref={ref}
      {...props}
    />
  </button>
))

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
      trigger={open => <CustomGiHamburgerMenu open={open} />}
      // className="popup-content"
      closeOnDocumentClick
    >
      {close => (
        <div className="popup-container">
          <div className="popup-close-btn-container">
            <button
              className="popup-close-btn"
              type="button"
              onClick={() => close()}
            >
              <IoMdClose className="close-btn-icon" />
            </button>
          </div>
          <div className="popup-menu-container">
            <Link to="/" className="menu-item-container">
              <AiFillHome className="menu-item-icon" />
              <p className="menu-item-name">Home</p>
            </Link>

            <Link to="/about" className="menu-item-container">
              <BsInfoCircleFill className="menu-item-icon" />
              <p className="menu-item-name">About</p>
            </Link>
          </div>
        </div>
      )}
    </Popup>
  </div>
)

export default Header
