import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Reviews from "./Components/Reviews";
import SignUp from "./Components/Auth/SignUp";
import SignIn from "./Components/Auth/SignIn";
import LogOut from "./Components/Auth/LogOut";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/Navbar", element: <NavBar></NavBar> },
    { path: "/", element: <Home></Home> },
    { path: "/menu", element: <Menu></Menu> },
    { path: "/about", element: <About></About> },
    { path: "/reviews", element: <Reviews></Reviews> },
    { path: "/signup", element: <SignUp></SignUp> },
    { path: "/signin", element: <SignIn></SignIn> },
    { path: "/logout", element: <LogOut></LogOut> },
  ]);

  return (
    <>
    <div>
      <NavBar/>
    </div>
    <main>
      <Home />
      <Menu />
      <About />
      <Reviews />
    </main>

      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
