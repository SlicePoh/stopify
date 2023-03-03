import React from 'react'
import logo from '../assets/logo2.png'
import s from '../style'
function Navbar() {
  return (
    <div className={`nav ${s.flexBetween} p-5 text-white bg-nav sticky top-0`}>
        <div className={`${s.flexCenter}`}>
            <img className="w-14 h-14 mx-5" src={logo} alt="stopify logo" />
            <div className="naming">
              <h1 className={`${s.heading2}`}>Stopify</h1>
              <p className={`${s.paragraph}`}>Your life....more in tune</p>
            </div>
        </div>
        <div className={`${s.flexCenter}`}>
            <div className={`px-5`}>Home</div>
            <div className={`px-5`}>Search</div>
            <div className={`px-5`}>Favourites</div>
            <div className={`px-5`}>Playlists</div>
        </div>
    </div>
  )
}

export default Navbar