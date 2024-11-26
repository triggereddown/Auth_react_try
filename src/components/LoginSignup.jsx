import React, { useState } from 'react';
import ID from '../assets/id-card.png';
import mail from '../assets/mail.png';
import password from '../assets/padlock.png';


const LoginSignup = () => {
    const[action,setAction]=useState("Sign Up")

    let SignupButtonclass="submit p-2";
    let LoginButtonclass="submit p-2";

    if (action === "Sign Up") {
        SignupButtonclass = "submit p-2 bg-blue-800 text-white rounded-md";
    } else {
        SignupButtonclass = "submit p-2 ";
    }

    if (action === "Log In") {
        LoginButtonclass = "submit p-2 bg-blue-800 text-white rounded-md";
    } else {
        LoginButtonclass = "submit p-2 ";
    }

  return (
    <div className="flex-col container h-screen flex items-center justify-center bg-gray-700 ">
      <div className=" flex  p-5 rounded-t-lg shadow-md bg-yellow-300 w-96">
        <div className="text text-center text-2xl font-bold mb-6 mx-28 px-3 text-gray-700">{action}</div>
      </div>
      <div className="inputs bg-yellow-300  w-96 justify-center pb-4  ">
        <div className="input flex justify-center py-4 ">
          <img className="w-7" src={ID} alt="ID Icon" />
          <input  className=" rounded-md mx-2 border-2 border-blue-800" type="text" placeholder="Full Name" />
        </div>
        <div className="input flex justify-center py-4 ">
          <img  className="w-7 " src={mail} alt="ID Icon" /> 
          <input  className=" rounded-md mx-2 border-2 border-blue-800"type="email" placeholder="Email" />
        </div>
        <div className="input flex justify-center py-4">
          <img  className="w-7" src={password} alt="ID Icon" />
          <input className=" rounded-md mx-2 border-2 border-blue-800" type="password" placeholder="Password" />
        </div>
      </div>
      <div className="forget_password w-96 bg-yellow-300  px-5 text-xs text-blue-400 font-semibold ">
        Forgot Password?
      </div>
      <div className="submit_container flex bg-yellow-300  w-96 justify-center rounded-b-lg py-4 ">
        <div className="submit p-2">
        <button
  className={SignupButtonclass}
  onClick={() => {
    setAction("Sign Up");
  }}
>
  Sign Up
</button>            
        </div>
        
        <div className="submit p-2">
        <button className={LoginButtonclass}
                onClick={()=>
                {
                    setAction("Log In");
                }
                }
            >
            Log In    
            </button>
            
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
