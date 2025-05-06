import React from 'react';
import { useNavigate } from 'react-router';

const Errorelement = () => {

    
const navigation =useNavigate();

const backToHome=()=>{
    navigation('/');
}
    return (
        <div>
           
             <div className='flex flex-col justify-center items-center'>
            
            <img className='w-[50%]' src="/Assets/Capture d’écran 2024-04-09 à 11.33.56.png" alt="" />
            <button className='btn bg-[#0EA106] text-white rounded-md' onClick={backToHome}>Back To Home</button>
              
             
          </div>
        </div>
    );
};

export default Errorelement;