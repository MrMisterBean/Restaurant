import Link from 'next/link'

export default function NavPage() {
  return (
    <div className="">
      <ul className={`flex flex-col text-[7vw] md:text-[5vw] lg:text-[3vw] items-center justify-evenly h-screen `}>
        <Link href="/main/Home">
          <li className="nav-tab">
            <a>Home</a>
          </li>
        </Link>
        <Link href="/main/Menu">
          <li className="nav-tab">
            <a>Menu</a>
          </li>
        </Link>
        <Link href="/main/About">
          <li className="nav-tab">
            <a>About</a>
          </li>
        </Link>
        <Link href="/main/Contact">
          <li className="nav-tab">
            <a>Contact</a>
          </li>
        </Link>
      </ul>
    </div>
  )
}