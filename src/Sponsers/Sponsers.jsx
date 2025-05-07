import React from "react";

const Sponsers = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl text-center mt-8 pt-8 ">
        Proudly Sponsored By
      </h1>

      <div className="grid lg:grid-cols-3 gap-3 grid-cols-1 pt-4 mt-4">
        <div className="card bg-slate-100   ">
          <figure>
            <img
              className="w-[80%] h-40 p-4 pt-4 border-1 rounded-md mt-4 bg-white"
              src="/Assets/Grameenphone.jpg"
              alt=""
            />
          </figure>
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-md">
              Grameenphone IT (GP Accelerator)
            </h2>
          </div>
        </div>

        <div className="card bg-slate-100   ">
          <figure>
            <img
              className="w-[80%] h-40 p-4 pt-4 border-1 rounded-md mt-4 bg-white"
              src="/Assets/images (1).png"
              alt=""
            />
          </figure>
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-md">Bkash(BKASh Limited)</h2>
          </div>
        </div>
        
        <div className="card bg-slate-100   ">
          <figure>
            <img
              className="w-[80%] h-40 p-4 pt-4 border-1 rounded-md mt-4 bg-white"
              src="/Assets/images.png"
              alt=""
            />
          </figure>
          <div className="card-body justify-center items-center">
            <h2 className="card-title text-md">StartUp Bangladesh Limited</h2>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Sponsers;
