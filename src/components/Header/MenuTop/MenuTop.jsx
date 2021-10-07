import React from 'react'
import "./MenuTop.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleDown} from "@fortawesome/free-solid-svg-icons"
export default function MenuTop() {
  return (
    <ul className="menutop">
      <li className="selected">Watch</li>
      <li>NFL</li>
      <li>NHL</li>
      <li>NBA</li>
      <li>Soccer</li>
      <li>NASCAR </li>
      <li>Golf</li>
      <li className="more">MORE <FontAwesomeIcon icon={faAngleDown} /></li>
    </ul>
  )
}
