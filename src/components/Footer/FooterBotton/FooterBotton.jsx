import React from 'react'
import "./FooterBotton.scss"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook, faTwitter, faGooglePlus, faDribbble} from "@fortawesome/free-brands-svg-icons"

export default function FooterBotton() {
  return (
    <div className="footer_botton">
      <div className="footer_botton_contact">
        <div className="social-media">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faGooglePlus} />
          <FontAwesomeIcon icon={faDribbble} />
        </div>
        <div className="menu">
          <li>About Us</li>
          <li>Adversite</li>
          <li>Sports Jobs</li>
          <li>Termn of Use</li>
          <li>My Account</li>
          <li>FAQ</li>
          <li>Watch on TV</li>
          <li>Help Center</li>
          <li>Contact</li>
        </div>
        <div className="copyright">
          <p>Copyright © 2018, Vodi Platform, INC. All Rights Reserved</p>
          <div>
            <li>Privacy Policy</li>
            <li>Add Choice</li>
            <li>Term of Use</li>
            <li>Mobile</li>
            <li>User Agreement</li>
            <li>Careers</li>
          </div>
        </div>
      </div>
      <div className="newsletter">
        <div>
          <h2>Watch Vodi. Anytime.</h2>
          <h2>Anywhere.</h2>
        </div>
        <p>Subcribe to our newsletter and get unique alerts.</p>
        <button>SIGN UP</button>
      </div>
    </div>
  )
}
