import Nav from "../../components/NavBar"
import Image from "next/image"

export default function Menu() {
  return (
    <div>
      <Nav />
      <div className="grid grid-cols-2 place-items-center">
        <p className="item-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
        {/* <Image src="https://content.time.com/time/daily/2007/0706/360_arat_0618.jpg" alt="Chef guy" width={500} height={500} /> */}
        <img className="item-image" src='https://content.time.com/time/daily/2007/0706/360_arat_0618.jpg' alt="Chef guy" width={500} height={500} />
        {/* <Image src="https://content.time.com/time/daily/2007/0706/360_arat_0618.jpg" alt="Chef guy" width={500} height={500} /> */}
        <img className="item-image" src='https://content.time.com/time/daily/2007/0706/360_arat_0618.jpg' alt="Chef guy" width={500} height={500} />
        <p className="item-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
    </div>
  )
}