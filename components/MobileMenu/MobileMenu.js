import Link from 'next/link'
import {useState} from 'react'
import { slide as Menu } from 'react-burger-menu'

export const MobileMenu = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const handleStateChange = (state) => {
    setIsMenuOpen(state.isOpen);
  }

  return (
    <Menu 
      right {...props} 
      width={'80%'} 
      isOpen={isMenuOpen} 
      onStateChange={(state) => handleStateChange(state)}
    >
      <Link className="menu-item" href="/"><p onClick={() => closeMenu()}>Home</p></Link>
      <Link className="menu-item" href="/why-genesis"><p onClick={() => closeMenu()}>Why Genesis</p></Link>
      <Link className="menu-item" href="/the-team"><p onClick={() => closeMenu()}>The Team</p></Link>
      <Link className="menu-item" href="/shop"><p onClick={() => closeMenu()}>Shop</p></Link>
      <Link className="menu-item" href="/the-garden"><p onClick={() => closeMenu()}>The Garden</p></Link>
      <Link className="menu-item" href="/connect"><p onClick={() => closeMenu()}>Connect</p></Link>
    </Menu>
  );
};