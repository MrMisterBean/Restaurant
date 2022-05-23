import Link from 'next/link'

export default function Hamburger() {
  return (
    <div className="">
      <ul className={`flex flex-col text-[7vw] md:text-[5vw] lg:text-[3vw] items-center justify-evenly h-screen `}>
        <Link href="/home">
          <li className="nav-tab">
            <a>Home</a>
          </li>
        </Link>
        <Link href="/menu">
          <li className="nav-tab">
            <a>Menu</a>
          </li>
        </Link>
        <Link href="/about">
          <li className="nav-tab">
            <a>About</a>
          </li>
        </Link>
        <Link href="/contact">
          <li className="nav-tab">
            <a>Contact</a>
          </li>
        </Link>
      </ul>
    </div>
  )
}