import { useState } from "react"

export default function Hamburger() {

  const [hamburgerOpen, setHamburgerOpen] = useState(false)

  const toggleHamburger = () => {
    console.log('Clicked hamburger')
    // setHamburgerOpen(!hamburgerOpen)
  }

  return (
    <div className="flex lg:hidden">
      <ul className={`${hamburgerOpen ? '' : 'hidden'}`}>
        <li>Home</li>
        <li>Menu</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div onClick={() => {
        setHamburgerOpen(!hamburgerOpen)
        console.log('Clicked hamburger', hamburgerOpen)
      }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
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
      </div>
    </div >
  )
}