import React, {useState, useEffect} from 'react'
import "./Content.scss"
import ViewLive from './ViewLive/ViewLive'
import ComingSoon from './ComingSoon/ComingSoon'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleRight} from "@fortawesome/free-solid-svg-icons"

const getLiveNowAPi = [
  {
    img: "https://blog.coursify.me/wp-content/uploads/2015/08/live-online-classes-coursifyme.jpg",
    place: "Racing Motorsports - Le Mans",
    title: "2018 Le Mans 24 Hour - Car GT Onboards, Race Timing and Commentary",
    on: "XTremeSports3",
    viewer: "1.02k"
  },
  {
    img: "https://engineering.jhu.edu/magazine/wp-content/uploads/2021/01/shutterstock_1250202004-1024x631.jpeg",
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
const getCominSoonAPi = [
  {
    hour: "12:00",
    date: "17 June",
    place: "Racing Motorsports - WC",
    title: "Word Cup Endurance, Spain",
    timeleft: "4 mn 12 sec"
  },
  {
    hour: "13:50",
    date: "17 June",
    place: "Racing Motorsports - Le MAns",
    title: "Collage World Series: Texas Tech vs. Florida",
    timeleft: "2 hr 15 mn 47 sec"
  },
  {
    hour: "07:00",
    date: "18 June",
    place: "Racing Motorsports - Le MAns",
    title: "MLB Bseball: Chicago Cubs at St. Louis Cardinals",
    timeleft: " 1 day 10 hr 58 mn 09 sec"
  }
]

export default function Content() {
  const [liveNow, setLiveNow] = useState([])
  const [comingSoon, setComingSoon] = useState([])

  useEffect(() => {
    setLiveNow(getLiveNowAPi)
  }, [liveNow])

  useEffect(() => {
    setComingSoon(getCominSoonAPi)
  }, [comingSoon])

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
        <p className="livenow">COMMING SOON</p>
        {
          comingSoon.map((element, index) => {
            return <ComingSoon key={index} data={element} />
          })
        }
        <p className="viewall">VIEW ALL <FontAwesomeIcon icon={faAngleRight} /></p>
      </div>
    </div>
  )
}
