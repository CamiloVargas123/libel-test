import React, {useState, useEffect} from 'react'
import "./Content.scss"
import ViewLive from './ViewLive/ViewLive'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleRight} from "@fortawesome/free-solid-svg-icons"

const getAPi = [
  {
    img: "https://blog.coursify.me/wp-content/uploads/2015/08/live-online-classes-coursifyme.jpg",
    place: "Racing Motorsports - Le Mans",
    title: "2018 Le Mans 24 Hour - Car GT Onboards, Race Timing and Commentary",
    on: "XTremeSports3",
    viewer: "1.02k"
  },
  {
    img: "https://icegateinstitute.s3.ap-south-1.amazonaws.com/wp-content/uploads/2018/05/26123311/Live-Class.jpg",
    place: "Rugby - Africa",
    title: "Rugby Africa Gold Cup/2019 Qualifiers - Namibia vs Uganda",
    on: "KweseRug",
    viewer: "21k"
  },
  {
    img: "https://www.practically.com/web/assets/images/practically/coding_image.png",
    place: "Rugby - Africa",
    title: "National Cup 2018: Fans Eye View",
    on: "RTower1989",
    viewer: "944"
  }
]

export default function Content() {
  const [liveNow, setLiveNow] = useState([])

  useEffect(() => {
    setLiveNow(getAPi)
  }, [liveNow])
  return (
    <div className="liveclass container">
      <div>
        <p className="livenow">LIVE NOW</p>
          {liveNow.map((element, index) => {
            return <ViewLive key={index} data={element} />
          })}
        <p className="viewall">VIEW ALL <FontAwesomeIcon icon={faAngleRight} /></p>
      </div>

      <div>

      </div>
    </div>
  )
}
