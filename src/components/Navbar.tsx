import React from 'react'
import logo from '../assets/logo1.png'
import styles from '../style'
function Navbar() {
  return (
    <div className={`nav ${styles.flexBet} h-5 p-5 bg-slate-400`}>
        <div className="logo">
            <img src={logo} alt="stopify logo" />
        </div>
        <div className="items flex">
            <p>Home</p>
            <p>Search</p>
            <p>Favourites</p>
            <p>Playlists</p>
        </div>
    </div>
  )
}

export default Navbar