import React from 'react'
import "./Footer.scss"
import FooterBotton from './FooterBotton/FooterBotton'
export default function Footer() {
  return (
    <div className="bck-color">
      <div className="container footer">
        <div className="footer_top">
          <h1>Logo</h1>
          <div>
            <p>ONLY PAY FOR</p>
            <span>SPORTS YOU LOVE</span>
          </div>
          <button className="button">UPGRADE NOW</button>
        </div>
        <ul className="footer_list">
          <li>NFL</li>
          <li>NHL</li>
          <li>NBA</li>
          <li>Soccer</li>
          <li>NASCAR </li>
          <li>Golf</li>
          <li>Olympics</li>
          <li>Motors</li>
          <li>Boxing</li>
          <li>Cycling</li>
          <li>Atheletics</li>
        </ul>
        <FooterBotton />
      </div>
    </div>
  )
}
