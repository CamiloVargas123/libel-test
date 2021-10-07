import React from 'react'
import "./InfoUser.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch, faBell, faUserCircle, faAngleDown} from "@fortawesome/free-solid-svg-icons"

export default function InfoUser() {
  return (
    <div className="infouser">
      <div><FontAwesomeIcon icon={faSearch} /></div>
      <div className="notification">
        <div className="number"><span>3</span></div>
        <FontAwesomeIcon icon={faBell} />
      </div>
      <div className="infouser_profile">
        <FontAwesomeIcon icon={faUserCircle} />
        <FontAwesomeIcon icon={faAngleDown} size={"xs"} />
      </div>
    </div>
  )
}
