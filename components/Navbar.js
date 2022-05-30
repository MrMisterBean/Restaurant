import Link from 'next/link'
import Divider from './Divider'
import Hamburger from "./hamburger"
import Image from "next/image"
// import chef from '../public/images/chef.png'

export default function Navbar() {
  return (
    <div>
      <nav className="container flex justify-between px-4 pt-8 pb-2 mx-auto ">
        <div className='flex'>
          <Image src='/logo.png' width={40} height={40} />
          {/* <img src="../public/images/logo.jpg" width={200} height={200} /> */}
          <h3 className="text-4xl font-medium font-fancy-italic">L'amour Toujours</h3>
        </div>
        <ul className="hidden space-x-8 lg:flex">
          <Link href="/main/Home">
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
      <Divider />
    </div>
  )
}