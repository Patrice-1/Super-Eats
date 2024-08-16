import React from "react";
import MenuList from "./Assets/MenuList";
import order1 from "../assets/order1.png";

const menuItems = [
  {
    image: order1,
    title: "Crunchy",
    price: "$4.99",
  },
  {
    image: order1,
    title: "Spicy",
    price: "$5.99",
  },
  {
    image: order1,
    title: "Veggie",
    price: "$4.49",
  },
  {
    image: order1,
    title: "Meat Lover",
    price: "$6.99",
  },
  {
    image: order1,
    title: "Seafood",
    price: "$7.99",
  },
  {
    image: order1,
    title: "Vegan",
    price: "$5.49",
  },
];

function Menu() {
  return (
    <div className="grid px-8 items-center grid-cols-3 min-h-screen gap-12 text-white">
      {menuItems.map((menuItem, index) => (
        <MenuList
          key={index}
          image={menuItem.image}
          title={menuItem.title}
          price={menuItem.price}
        />
      ))}
    </div>
  );
}

export default Menu;
