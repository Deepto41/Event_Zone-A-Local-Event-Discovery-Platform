import React from "react";
import Events from "../Events/Events";
import Featuredspeaker from "../Featuredspeaker/Featuredspeaker";
import Sponsers from "../Sponsers/Sponsers";

const Localevent = ({ alldata }) => {
  return (
    <div className="w-11/12 mx-auto mt-4 mb-6">
      <h1 className="text-center font-bold text-3xl py-8"> Upcoming Events</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2">
        {alldata.map((data) => (
          <Events key={data.id} data={data}></Events>
        ))}
      </div>

      <Featuredspeaker></Featuredspeaker>
      <Sponsers></Sponsers>
    </div>
  );
};

export default Localevent;
