
export default function Hamburger() {
  return (
    <div>
      <ul className={`flex flex-col sm text-[7vw] md:text-[5vw] lg:text-[3vw] items-center justify-evenly h-screen `}>
        <li className="my-10 uppercase border-b border-gray-400 ">
          <a href="/about">Home</a>
        </li>
        <li className="my-10 uppercase border-b border-gray-400 ">
          <a href="/portfolio">Menu</a>
        </li>
        <li className="my-10 uppercase border-b border-gray-400">
          <a href="/contact">About</a>
        </li>
        <li className="my-10 uppercase border-b border-gray-400">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  )
}