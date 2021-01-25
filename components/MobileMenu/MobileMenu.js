import Link from 'next/link'
import {useState} from 'react'
import { slide as Menu } from 'react-burger-menu'

export const MobileMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  }

  return (
    <Menu right {...props} width={'100%'}>
      <Link onClick={closeMenu} className="menu-item" href="/"><p>Home</p></Link>
      <Link onClick={closeMenu} className="menu-item" href="/why-genesis"><p>Why Genesis</p></Link>
      <Link onClick={closeMenu} className="menu-item" href="/the-team"><p>The Team</p></Link>
      <Link onClick={closeMenu} className="menu-item" href="/shop"><p>Shop</p></Link>
      <Link onClick={closeMenu} className="menu-item" href="/the-garden"><p>The Garden</p></Link>
      <Link onClick={closeMenu} className="menu-item" href="/connect"><p>Connect</p></Link>
    </Menu>
  );
};