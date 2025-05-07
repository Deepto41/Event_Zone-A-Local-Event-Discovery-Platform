import React from "react";

const Events = ({ data }) => {
  const { thumbnail, name, category, date, location, entry_fee } = data;
  return (
    <div className="w-11/12 mx-auto mb-4 ">
      <div className="card bg-slate-100   ">
        <figure>
          <img
            className="w-[80%] h-40 p-4 border-1 rounded-md mt-2 bg-white"
            src={thumbnail}
            alt=""
          />
        </figure>
        <div className="card-body justify-center items-center">
          <h2 className="card-title text-md">{name}</h2>
          <p className="font-bold">Category:{category}</p>
          <p className="font-semibold">
            <small>Date:{date}</small>
          </p>

          <p className="text-md font-semibold">Location:{location}</p>
          <p className="text-md font-semibold">Entry Fee:{entry_fee}</p>
          <button className="btn bg-[#0EA106] rounded-md w-full">
            View More
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default Events;
