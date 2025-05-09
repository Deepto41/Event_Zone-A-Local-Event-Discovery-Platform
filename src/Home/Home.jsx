import React from "react";
import Events from "../Events/Events";
import Hero from "../Hero/Hero";
import { useLoaderData } from "react-router";
import Localevent from "../Localevent/Localevent";
import { Helmet } from "react-helmet-async";

const Home = () => {
const alldata =useLoaderData();



  return (
    <div>
      <Helmet>
        <title>Event_Zone || Home</title>
      </Helmet>
      <Hero></Hero>
     <Localevent alldata={alldata}> </Localevent>
    </div>
  );
};

export default Home;


