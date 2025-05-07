import React from 'react';

const Featuredspeaker = () => {
    return (
        <div className="mb-4 mt-4 pb-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          
          Featured Speakers
        </h2>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-3">
          <div className="card bg-slate-100   ">
            <figure>
              <img
                className="w-[80%] h-40 p-4 border-1 rounded-md mt-2 bg-white"
                src="/Assets/whatsapp_image_2022-06-04_at_10.05.23_pm (1).jpeg"
                alt=""
              />
            </figure>
            <div className="card-body justify-center items-center">
              <h2 className="card-title text-md">Zeeshan Kingshuk</h2>
              <p className="text-md font-semibold">
                Event:Tech Innovators Conference 2025
              </p>
              <p className="font-bold">Category:Technology</p>
              <p className="text-md font-semibold">
                <span className="font-bold">Location</span> :Dhaka Convention
                Center, Dhaka
              </p>
            </div>
          </div>

          <div className="card bg-slate-100   ">
            <figure>
              <img
                className="w-[80%] h-40 p-4 border-1 rounded-md mt-2 bg-white"
                src="/Assets/Walton_Hi-Tech_MD_on_Zurich_Road_Show.jpg"
                alt=""
              />
            </figure>
            <div className="card-body justify-center items-center">
              <h2 className="card-title text-md">Golam Murshed </h2>
              <p className="text-md font-semibold">
                Event:Future of Finance Summit
              </p>
              <p className="font-bold">Category:Finance</p>
              <p className="text-md font-semibold">
                <span className="font-bold">Location</span> :Hotel
                Sonargaon,Dhaka
              </p>
            </div>
          </div>

          <div className="card bg-slate-100   ">
            <figure>
              <img
                className="w-[80%] h-40 p-4 border-1 rounded-md mt-2 bg-white"
                src="/Assets/whatsapp_image_2022-10-31_at_7.16.59_pm.jpeg"
                alt=""
              />
            </figure>
            <div className="card-body justify-center items-center">
              <h2 className="card-title text-md"> Md Nasim Parvez</h2>
              <p className="text-md font-semibold">
                Event:Green Energy World Forum
              </p>
              <p className="font-bold">Category:Environment</p>
              <p className="text-md font-semibold">
                <span className="font-bold">Location</span> :Expo Center, Dhaka
              </p>
            </div>
          </div>

        </div>
      </div>
    );
};

export default Featuredspeaker;