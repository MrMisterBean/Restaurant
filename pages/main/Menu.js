import Nav from "../../components/NavBar"
import Image from "next/image"
import { useState } from "react"

export default function Menu() {

  const [menu, setMenu] = useState([
    {
      name: "Hot Dog",
      price: "5.00",
      description: "A hot dog with a variety of toppings",
      image: "https://www.simplyrecipes.com/thmb/DaitMNc4yOixZXKANl36Dn3hou4=/1600x900/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2010__05__chili-dog-horiz-a-1600-1a1f025054124cd886baab5b14d8d5b6.jpg",
      isOpen: false,
      id: 0,
    },
    {
      name: "Fries",
      price: "3.00",
      description: "Fries with a variety of toppings",
      image: "https://upload.wikimedia.org/wikipedia/commons/8/83/French_Fries.JPG",
      isOpen: false,
      id: 1,
    },
    {
      name: "Salad",
      price: "4.00",
      description: "A salad with a variety of toppings",
      image: "https://www.thespruceeats.com/thmb/r83ZPDHz-iy2VjRJMAf6ya3S-7A=/2500x1406/smart/filters:no_upscale()/perfectgreensalad2500-5993ab28c412440011db26df.jpg",
      isOpen: false,
      id: 2,
    },
    {
      name: "Soup",
      price: "3.00",
      description: "A soup with a variety of toppings",
      image: "https://media-cldnry.s-nbcnews.com/image/upload/t_social_share_1200x630_center,f_auto,q_auto:best/newscms/2019_04/1404467/best-chicken-soup-recipe-today-main-190124.jpg",
      isOpen: false,
      id: 3,
    },
    {
      name: "Sandwich",
      price: "5.00",
      description: "A sandwich with a variety of toppings",
      image: "https://life-in-the-lofthouse.com/wp-content/uploads/2020/07/The-Best-Club-Sandwiches2.jpg",
      isOpen: false,
      id: 4,
    },
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
              <div className="relative">
                <img className="border-b-4 border-black" onClick={() => toggleDescription(i)} src={item.image} alt={item.name} width={500} height={500} />
                <div className="absolute top-0 left-0 p-2 m-2 bg-white border-4 border-black font-fancy "> {item.name} </div>
                <p className={`transition-all font-fancy ${item.isOpen ? '' : 'hidden'}`}>
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