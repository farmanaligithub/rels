import React from 'react'
import './Footer.css'
import disc from '../icons/disc.png'
export default function Footer({channel, description, audio}) {
  return (
    <footer>
        <div className="text">
            <h3>@{channel}</h3>
            <p>{description}</p>
        </div>
        <div className="audio-text">
            <marquee>{audio}</marquee>
            <img src={disc} />
        </div>
    </footer>
  )
}
