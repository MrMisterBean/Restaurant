import Nav from "../../components/NavBar"
import Image from "next/image"
import { useState } from "react"

export default function Menu() {

  const [menu, setMenu] = useState([
    {
      name: "Hot Dogs",
      price: "5.00",
      description: "A hot dog with a variety of toppings",
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      isOpen: false,
      id: 0,
    },
    {
      name: "Fries",
      price: "3.00",
      description: "Fries with a variety of toppings",
      image: "https://i.pinimg.com/originals/eb/f0/02/ebf002d6348c3ae432649da4418fce40.jpg",
      isOpen: false,
      id: 1,
    }
  ])

  const toggleDescription = (i) => {
    const newMenu = [...menu]
    newMenu[i].isOpen = !newMenu[i].isOpen
    setMenu(newMenu)
    console.log(menu)
    // console.log(i)
  }

  return (
    <div>
      <Nav />
      {/* <div>
        <img className="w-full h-full bg-black item-image" onClick={() => toggleDescription()} src='https://i.pinimg.com/originals/eb/f0/02/ebf002d6348c3ae432649da4418fce40.jpg' alt="Chef guy" width={500} height={500} />
        <p className="item-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div> */}
      <div>
        {
          menu.map((item, i) => {
            return (
              <div>
                <img onClick={() => toggleDescription(i)} src={item.image} alt={item.name} width={500} height={500} />
                <p className={`item-description ${item.isOpen ? '' : 'hidden'}`}>
                  {item.description}
                </p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}