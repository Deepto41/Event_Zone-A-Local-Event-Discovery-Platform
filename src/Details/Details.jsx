import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams} from 'react-router';



const Details = () => {
  const data =useLoaderData();
  console.log(data);

  const {name}=useParams();
  console.log(name);
    
  const singledata= data.find(single=>single.name=== name);

  
 const {description,thumbnail}=singledata;
 
     


  
    
    return (
        <div className='w-11/12 mx-auto'>
              <Helmet>
                <title>Event_Zone || Details</title>
            </Helmet>
            <div>
               <img src={thumbnail} alt="" />
               <p>{description}</p>
            </div>
           </div>
        
    );
};

export default Details;