import React from 'react'
import "./ViewLive.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons"

export default function ViewLive(props) {
  const {img, place, title, on, viewer} = props.data

  return(
    <div className="viewlive">
      <div className="viewlive_img">
        <img src={img} alt="imagne.png" />
      </div>
      <div className="infolive">
        <div className="place">
          <span className="live">LIVE</span>
          <p>{place}</p>
        </div>
        <div className="title">
          <h3>{title}</h3>
          <button>
            <FontAwesomeIcon icon={faPlayCircle} />
            Watch now!
          </button>
        </div>
        <div className="on">
          <span>on</span>
          <p>{on}</p>
        </div>
        <p className="viewers">{`${viewer} Viewers`}</p>
      </div>
    </div>
  )
}
