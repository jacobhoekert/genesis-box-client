import Link from 'next/link'
import { useState } from 'react'

export const Navbar = () => {
  const [isDroppedDown, setIsDroppedDown] = useState(false);
  const [isSearchBlue, setSearchBlue] = useState(false);
  const [isBagBlue, setBagBlue] = useState(false);

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
          <Link href="/">
            <div className="menu-item">
              <p>Home</p>
            </div>
          </Link>
          <div className="about-container">
            <div className="about-link" >
              <div onMouseEnter={handleDropDownEnter} onMouseLeave={handleDropDownLeave} className="menu-item">
                <p >
                  About Us
                </p>
              </div>
            </div>
            <div onMouseEnter={handleDropDownEnter} onMouseLeave={handleDropDownLeave}>
              {isDroppedDown &&
                <div className="drop-down">
                  <Link href="/why-genesis"><div className="drop-down-item">Why Genesis?</div></Link>
                  <Link href="/the-team"><div className="drop-down-item">The Team</div></Link>
                  {/* <Link href="/genesis-photo-album"><div className="drop-down-item">Genesis Photo Album</div></Link> */}
                </div>
              } 
            </div>
          </div>
          <Link href="/global-community">
            <div className="menu-item">
              <p>Global Community</p>
            </div>
          </Link>
          <Link href="/shop">
            <div className="menu-item">
              <p>Shop</p>
            </div>
          </Link>
          <Link href="/the-garden">
            <div className="menu-item">
              <p>The Garden</p>
            </div>
          </Link>
          <Link href="/connect">
            <div className="menu-item">
              <p>Connect</p>
            </div>
          </Link>
          {/* <img 
            onMouseEnter={() => setSearchBlue(true)} 
            onMouseLeave={() => setSearchBlue(false)} 
            className="search-icon" 
            src={isSearchBlue ? "/images/search2-blue.png" : "/images/search2.png"}
          />
          <img 
            onMouseEnter={() => setBagBlue(true)}
            onMouseLeave={() => setBagBlue(false)}
            className="bag-icon"
            src={isBagBlue ? "/images/shopping-bag2-blue.png" : "/images/shopping-bag2.png"}
          /> */}
        </div>
      </div>
    </div>
  )
}