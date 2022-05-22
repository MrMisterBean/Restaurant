import { useState } from "react"
import Link from 'next/link'

export default function Hamburger() {

  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleHamburger = () => {
    console.log('Clicked hamburger')
    // setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <div className="flex lg:hidden">

      {/* <ul className={`NAVIGATION-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px] ${hamburgerOpen ? 'hidden' : ''}`}>
        <li className="my-8 uppercase border-b border-gray-400">
          <a href="/about">About</a>
        </li>
        <li className="my-8 uppercase border-b border-gray-400">
          <a href="/portfolio">Portfolio</a>
        </li>
        <li className="my-8 uppercase border-b border-gray-400">
          <a href="/contact">Contact</a>
        </li>
      </ul> */}

      {/* <ul className={`bg-blue-200 w-screen h-screen z-0 p-8 ${hamburgerOpen ? 'hidden' : ''}`}>
        <li>Home</li>
        <li>Menu</li>
        <li>About</li>
        <li>Contact</li>
      </ul> */}

      {/* <div onClick={() => {
        setHamburgerOpen(!hamburgerOpen)
        console.log('Clicked hamburger', hamburgerOpen)
      }}> */}
      <Link href="/accordian" >

        <a>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

        </a>
      </Link>
    </div>
    // </div >
  )
}