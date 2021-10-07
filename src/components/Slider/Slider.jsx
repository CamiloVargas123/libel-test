import React from 'react'
import "./Slider.scss"

export default function Slider() {
  return (
    <div className="slider">
      <div className="container">
        <div className="content">
          <p>Coming Soon</p>
          <span>Live starts in 7 days 17 h 58 mn 41 s</span>
          <h2>Rugby Union World Cup</h2>
          <span>LIVE coverage on the 24th of June 2018</span>
        </div>
        <button className="button">
          + GET NOTIFIED
        </button>
        <div className="buttons">
          <span className="selected"></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  )
}
