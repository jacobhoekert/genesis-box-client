import Link from 'next/link'
import { useState } from 'react'

export const Navbar = () => {
  const [isDroppedDown, setIsDroppedDown] = useState(false);

  const handleDropDownEnter = () => {
    setIsDroppedDown(true);
  }

  const handleDropDownLeave = () => {
    setIsDroppedDown(false);
  }

  return (
    <div className="navbar">
      <Link href="/"><img width="180px" className="logo" src="/images/main-logo.png" /></Link>
      <div className="navbar-right">
        <Link href="/"><p>Home</p></Link>
        <div>
          <div className="about-container" >
            <Link href="/about"><p onMouseEnter={handleDropDownEnter} onMouseLeave={handleDropDownLeave}>About Us</p></Link>
          </div>
          <div onMouseEnter={handleDropDownEnter} onMouseLeave={handleDropDownLeave}>
            {isDroppedDown &&
              <div className="drop-down">
                <div className="drop-down-item"> Menu item 1 </div>
                <div className="drop-down-item"> Menu item 2 </div>
                <div className="drop-down-item"> Menu item 3 </div>
              </div>
            } 
          </div>
        </div>
        <Link href="/shop"><p>Shop</p></Link>
        <Link href="/global-community"><p>Global Community</p></Link>
        <Link href="/the-garden"><p>The Garden</p></Link>
      </div>
    </div>
  )
}