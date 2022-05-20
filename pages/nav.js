import Hamburger from "./hamburger"

export default function Nav() {
  return (
    <div>
      <nav className="container flex justify-between px-4 py-8 mx-auto bg-white">
        <div>
          <h3 className="text-2xl font-medium text-blue-500">RESTAURANT</h3>
        </div>
        <div className="hidden space-x-8 lg:flex">
          <a href="#">Home</a>
          <a href="#">Menu</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <Hamburger />
      </nav>
    </div>
  )
}