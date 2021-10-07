import React from 'react'
import "./Header.scss"
import MenuTop from './MenuTop/MenuTop'
import MenuTopSecund from './MenuTopSecund/MenuTopSecund'
import InfoUser from './InfoUser/InfoUser'
export default function Header() {
  return (
    <div className="bck-color">
      <div className="container header">
        <div className="header_logo">
          <h1>Logo</h1>
        </div>
        <MenuTop />
        <MenuTopSecund />
        <InfoUser />
      </div>
    </div>
  )
}
