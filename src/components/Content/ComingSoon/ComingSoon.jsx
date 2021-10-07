import React from 'react'
import "./ComingSoon.scss"

export default function ComingSoon(props) {
  const {date, hour, place, timeleft, title} = props.data

  return(
    <div className="comingsoon">
      <div className="comingsoon_date">
        <p>{hour}</p>
        <p>{date}</p>
      </div>
      <div className="comingsoon_info">
        <div className="place">
          <span className="live">LIVE</span>
          <p>{place}</p>
        </div>
          <h3>{title}</h3>
        <div className="timeleft">
          <span>time left</span>
          <p>{timeleft}</p>
        </div>
      </div>
    </div>
  )
}
