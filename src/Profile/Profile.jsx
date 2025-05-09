import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Helmet } from 'react-helmet-async';
import { getAuth, updateProfile } from 'firebase/auth';


const Profile = () => {
    const{user}=use(AuthContext)
    console.log(user)
    const auth = getAuth();
const handleUser=(e)=>{
    e.preventDefault();
    const name =  e.target.name.value;
    const url = e.target.photoUrl.value;
    const profile ={
      displayName:name,
      photoUrl:url,
     }
    updateProfile(auth.currentUser,profile)
    .then(()=>{
    console.log('user profile updated')
    })
    .catch(error=>{
    console.log(error)
    })
   
}




    return (

        <div className='w-11/12 mx-auto'>
              <Helmet>
                <title>Event_Zone || Profile</title>
            </Helmet>

           <h2 className='font-bold text-2xl text-center mt-4 mb-4'>My Profile</h2>
            <div>
                <h2>UserName:{user.displayName}</h2>
                <h2>UserName:{user.email}</h2>
            </div>




             <div className=' flex justify-center items-center p-6'>
             <form onSubmit={handleUser}>
                     <div className="fieldset bg-base-200 border-base-300 rounded-box max-w-sm border px-15 py-4">
                       <h2 className="text-2xl font-bold text-center">Save Change?</h2>
             
                       <label className="label">Name</label>
                       <input
                         type="text"
                         name="name"
                         className="input"
                         placeholder="Your name"
                       />
             
             
                       <label className="label">PhotoURL </label>
                       <input
                         type="text"
                         name="photoUrl"
                         className="input"
                         placeholder="photoURL"
                       />
             
             
                       <button  className="btn btn-neutral mt-4 mb-1">Save Change</button>
                   
                      
                     </div>
                   </form>
             </div>
             
        </div>
    );
};

export default Profile;