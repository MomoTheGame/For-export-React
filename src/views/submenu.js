import React from 'react'

import { Helmet } from 'react-helmet'

import './submenu.css'

const Submenu = (props) => {
  return (
    <div className="submenu-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="submenu-submenu">
        <img
          alt="Rectangle181349"
          src="/playground_assets/rectangle181349-q6ha-1000h.png"
          className="submenu-rectangle18"
        />
        <img
          alt="PeblarLogoBlack21341"
          src="/playground_assets/peblarlogoblack21341-301g-200h.png"
          className="submenu-peblar-logo-black2"
        />
        <div className="submenu-submenu-options">
          <span className="submenu-text">
            <span>Support</span>
          </span>
          <span className="submenu-text02">
            <span>Manuals</span>
          </span>
          <span className="submenu-text04">
            <span>Contact Us</span>
          </span>
          <span className="submenu-text06">
            <span>Events</span>
          </span>
          <span className="submenu-text08">
            <span>About Us</span>
          </span>
          <span className="submenu-text10">
            <span>Blog</span>
          </span>
          <span className="submenu-text12">
            <span>Vacancies</span>
          </span>
        </div>
        <span className="submenu-text14">
          <span>Location: NL</span>
        </span>
        <img
          alt="downarrow11402"
          src="/playground_assets/downarrow11402-17eu-200h.png"
          className="submenu-downarrow1"
        />
        <img
          alt="Rectangle171343"
          src="/playground_assets/rectangle171343-71q-1300w.png"
          className="submenu-rectangle17"
        />
        <img
          alt="close111404"
          src="/playground_assets/close111404-mx3w-200h.png"
          className="submenu-close11"
        />
      </div>
    </div>
  )
}

export default Submenu
