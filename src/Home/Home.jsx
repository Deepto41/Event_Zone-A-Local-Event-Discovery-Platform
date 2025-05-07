import React from "react";
import Events from "../Events/Events";
import Hero from "../Hero/Hero";
import { useLoaderData } from "react-router";
import Localevent from "../Localevent/Localevent";

const Home = () => {
const alldata =useLoaderData();
console.log(alldata);


  return (
    <div>
      <Hero></Hero>
     <Localevent alldata={alldata}> </Localevent>
    </div>
  );
};

export default Home;


