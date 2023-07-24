import React from 'react'
import './Header.css'
import logo from '../icons/logo.png'
import profileImage from '../icons/profile.png'


export default function Header() {
  return (
    <header>
        <div className="logo"><img src={logo}/></div>
        <div className="profile"><img src={profileImage} /></div>
    </header>
  )
}
