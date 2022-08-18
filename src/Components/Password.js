import React, { useState } from "react";

const Password = () => {
  const [password, setpassword] = useState("234353453453453");
  const generatepass = () => {
    let set = Math.random() * 100000000000000;
    setpassword(Math.floor(set));
  };
  return (
    <div>
      <p style={{ color: "red" }}>
       
      </p>
      
       
        Your generated password is
        <span style={{ color: "black" }}>{password} </span>
      
      <button onClick={() => generatepass()}style={{ backgroundColor: "purple" }}>Generate</button>
    </div>
  );
};

export default Password;