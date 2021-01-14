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
    <div id="navbar">
      <div className="navbar-menu-container">
        <div className="navbar-menu">
          <Link href="/"><p>Home</p></Link>
          <div className="about-container">
            <div className="about-link" >
              <Link href="/about"><p onMouseEnter={handleDropDownEnter} onMouseLeave={handleDropDownLeave}>About Us</p></Link>
            </div>
            <div onMouseEnter={handleDropDownEnter} onMouseLeave={handleDropDownLeave}>
              {isDroppedDown &&
                <div className="drop-down">
                  <Link href="/why-genesis"><div className="drop-down-item">Why Genesis?</div></Link>
                  <Link href="/the-team"><div className="drop-down-item">The Team</div></Link>
                  <Link href="/genesis-box-products"><div className="drop-down-item">Genesis Box Products</div></Link>
                </div>
              } 
            </div>
          </div>
          <Link href="/global-community"><p>Global Community</p></Link>
          <Link href="/shop"><p>Shop</p></Link>
          <Link href="/the-garden"><p>The Garden</p></Link>
          <Link href="/connect"><p>Connect</p></Link>
          <img className="search-icon" src="/images/search2.png"/>
          <img className="bag-icon" src="/images/shopping-bag2.png"/>
        </div>
      </div>
    </div>
  )
}