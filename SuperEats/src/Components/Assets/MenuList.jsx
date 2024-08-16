import React from "react";
import Purchase from "./Purchase";

function MenuList ({ image, title, price }){
    return (
      <div className="w-full lg:h-1/4 text-lg rounded-lg py-4 flex flex-cols border items-center px-4">
        <div>
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-md mb-3"
          />
          <figcaption className="font-semibold mb-2 ">{title}</figcaption>
          <div>
            <h3 className="mb-4">{price}</h3>
            <Purchase title="Purchase"/>
          </div>
        </div>
      </div>
    );
}

export default MenuList;