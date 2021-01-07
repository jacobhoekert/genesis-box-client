import Link from 'next/link';

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link href="/"><img width="200px" className="logo" src="/images/logo-main.png" /></Link>
      <div className="navbar-right">
        <Link href="/about"><p>About</p></Link>
        <Link href="/global-community"><p>Global Community</p></Link>
        <Link href="/garden"><p>The Garden</p></Link>
        <Link href="/shop"><p>Shop</p></Link>
      </div>
    </div>
  )
}