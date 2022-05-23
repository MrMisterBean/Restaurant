import Link from 'next/link'

export default function Hamburger() {
  return (
    <div className="flex lg:hidden">
      <Link href="/navigation/NavPage" >
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
  )
}