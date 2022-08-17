import React, { useEffect, useState } from 'react';

const List = () => {

   const[seconds,setseconds] = useState(0);
   const[minutes,setminutes] = useState(0);

let timer;
   useEffect (()=>{
  timer = setInterval (()=>{

   setseconds(seconds+1);
   if(seconds === 59){
    setminutes(minutes+1);
    setseconds(0);
   }

  },1000)

  return ()=> clearInterval(timer);

   });


const restart = ()=> {
setseconds(0);
setminutes(0);

}


const stop = ()=> {
    clearInterval(timer);
}

    return(
    <div className='timer'>
        <div className='container'>
            <div className='timer_container'>
      <h1>{minutes<10 ? "0"+minutes : minutes} : {seconds}</h1>
      <button className='start' onClick={restart}>Restart</button>
      <button className='stop' onClick={stop}>Stop</button>
            </div>
        </div>
        
    </div>
    )
}

export default List;
