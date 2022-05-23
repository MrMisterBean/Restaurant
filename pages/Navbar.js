import Link from 'next/link'
import Hamburger from "../components/hamburger"

export default function Navbar() {
  return (
    <div >
      <nav className="container flex justify-between px-4 py-8 mx-auto border-b-2 border-black">
        <div>
          <h3 className="text-4xl font-medium font-fancy-italic">L'amour Toujours</h3>
        </div>
        <ul className="hidden space-x-8 lg:flex">
          <Link href="/home">
            <li className="desktop-nav-tab">
              <a>Home</a>
            </li>
          </Link>
          <Link href="/menu">
            <li className="desktop-nav-tab">
              <a>Menu</a>
            </li>
          </Link>
          <Link href="/about">
            <li className="desktop-nav-tab">
              <a>About</a>
            </li>
          </Link>
          <Link href="/contact">
            <li className="desktop-nav-tab">
              <a>Contact</a>
            </li>
          </Link>
        </ul>
        <Hamburger />
      </nav>
    </div>
  )
}