import React from 'react';
import Events from '../Events/Events';

const Localevent = ({alldata}) => {
    return (
        <div  className='w-11/12 mx-auto mt-3'>
             <h1 className="text-center font-bold text-3xl py-8"> Upcoming Events</h1>

         <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-2'>
         {
                     alldata.map(data=> <Events key={data.id} data={data}></Events>)
                   }
         </div>
        </div>
    );
};

export default Localevent;

