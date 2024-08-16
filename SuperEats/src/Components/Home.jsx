import React from "react";

function Home (){
    return (
      <div className="min-h-screen lg:px-32 flex flex-row items-center justify-around">
        <div className=' text-white font-semibold text-5xl'>
          <h2>Welcome to SuperEats</h2>
          <p>Discover the best dining experiences around you</p>
          <button className="border-2 hover:bg-white hover:text-red-500 text-yellow-500 py-2 px-5 rounded-2xl hover:border-red-950">
            Order Now
          </button>
        </div>
      </div>
    );
}
export default Home;