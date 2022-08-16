// import React from 'react';
// import {useState} from 'react'

// const Center = () => {
//     const IncNum = () => {
        
//     }
//     return(
        
//     <div>
//     <h3>This is the Center Component</h3>

   
//     <div className='main_cm'>
  
   
        
//         <h1>0</h1>
//         <button onClick={IncNum}>Click here </button>
//     </div>
//     </div>
//     )
// }

// export default Center;








import React, { useState } from "react";

const Home = () => {
   
  const [name, setname] = useState("User1");
  const [profileview,setprofileviews] = useState(0);
  const [impression,setimpression] = useState(123);
  const [position,setpositions] = useState("SDE");
//   let profileviews;
//   let impressions;
//   let position;

  

  
//   profileviews = 0;
//   impressions = 0;



  const handleclick = () => {
    setname("User-2");
    setprofileviews(profileview+1);
    setimpression(impression+23);
    setpositions("Data Analyst");
  };
  return (
    <>
      <h1>{name} </h1>
      <p>{position}</p>
      <p>Who viewed your profile : {profileview} </p>
      <p>Imprssions on your post : {impression} </p>
      <button
        onClick={() => {
          handleclick();
        }}
        className="btn btn-primary"
      >
        Change Name
      </button>
    </>
  );
};

export default Home;