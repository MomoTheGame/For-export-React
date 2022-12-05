import React from 'react'

import { Helmet } from 'react-helmet'

import './business-side.css'

const BusinessSide = (props) => {
  return (
    <div className="business-side-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="business-side-business-side">
        <img
          alt="businessSideWhiteBg13655"
          src="/playground_assets/businesssidewhitebg13655-sfrf-400h.png"
          className="business-side-business-side-white-bg1"
        />
      </div>
    </div>
  )
}

export default BusinessSide
