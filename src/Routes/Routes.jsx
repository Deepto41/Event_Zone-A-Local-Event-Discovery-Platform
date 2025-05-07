import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Errorelement from "../Errorelement/Errorelement";
import Blogs from "../Blogs/Blogs";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Regester from "../Regester/Regester";



export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Errorelement></Errorelement>,
    children: [
      {
        index: true,
        path: "/",
        loader:()=>fetch('/events.json'),
        Component: Home,
         
      },
      {
        path: "blogs",
        Component: Blogs,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path:"login",
        Component:Login,
      } ,
      {
        path:"Regester",
        Component: Regester,
      }
    ],
  },
]);
