import Link from 'next/link'
import {useState} from 'react'
import { slide as Menu } from 'react-burger-menu'

export const MobileMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <Menu right {...props} isOpen={isOpen}>
      <Link onClick={closeMenu} className="menu-item" href="/"><p>Home</p></Link>
      <Link onClick={closeMenu} className="menu-item" href="/about"><p>About</p></Link>
      <Link onClick={closeMenu} className="menu-item" href="/features"><p>Global Community</p></Link>
      <Link onClick={closeMenu} className="menu-item" href="/pricing"><p>The Garden</p></Link>
      <Link onClick={closeMenu} className="menu-item" href="/faq"><p>Shop</p></Link>
      <Link onClick={closeMenu} className="menu-item" href="/mobileprivacypolicy"><p>Contact</p></Link>
    </Menu>
  );
};