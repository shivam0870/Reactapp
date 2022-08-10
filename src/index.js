import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Components/Navbar'
import Center from './Components/Center'
import List from './Components/List'
import Form from './Components/Form'
import Footer from './Components/Footer'

// ReactDOM.render(

//  <Navbar/>,
 
//   document.getElementById('root')
// );


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
   <div>
     <Navbar />
    <Center/>
    <List/>
    <Form/>
    <Footer/>
   </div>

);
