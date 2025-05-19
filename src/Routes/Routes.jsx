import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Errorelement from "../Errorelement/Errorelement";
import Blogs from "../Blogs/Blogs";

import Login from "../Login/Login";
import Regester from "../Regester/Regester";
import Privateroutes from "../Privateroutes/Privateroute"
import Profile from "../Profile/Profile";

import Details from "../Details/Details";





export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorelement></Errorelement>,
    children: [
      {
        index: true,
        loader:()=>fetch('/events.json'),
       
        Component: Home,
         
      },
      {
        path: "blogs",
         element: <Privateroutes><Blogs></Blogs></Privateroutes>
      },
      {
        path: "profile",
       element:<Privateroutes><Profile></Profile></Privateroutes>
        
      },
      {
        path:"details",
        loader:()=> fetch('/events.json'),
        HydrateFallback:<span className="loading loading-bars loading-xl justify-center items-centerml lg:ml-150 "></span>,
        element:<Privateroutes><Details></Details></Privateroutes>
      },
      {
        path:"login",
        Component:Login,
      } ,
      {
        path:"Regester",
        Component: Regester,
      },


    ],
  },
]);
