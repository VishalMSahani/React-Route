import React from 'react'
import { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import toast  from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Signupform = ({setIsLoggedIn}) => {

  const [formData, setformData] = useState({ email:"", password:"", firstName:"", lastName:"", confirmPassword:""  });
  const [showpassword, setshowpassword] = useState(false);
  const navigate = useNavigate();


 const  handleInputChange = (e) => { 
     setformData(prev => [{...prev, [e.target.name]: e.target.value}]);

 }
 function formHandel(e){
  e.preventDefault();
   console.log("Form Submitted");
   setIsLoggedIn(true);
   toast.success('Account created Successfully');
   navigate("/dashboard");
 }
  return (
   <form onSubmit={formHandel} >
{/* First Name & Last Name */}
    <div>
      <label htmlFor="firstName"> <p>First Name
        <sup className="text-pink-200">*</sup>
        </p>
      <input value={formData.firstName}
      type='text' name='firstName' id='firstName' 
      onChange={handleInputChange} 
      placeholder='Enter your first name' required/>
      </label>

      <label htmlFor="lastName">
        <p>Last Name
        <sup className="text-pink-200">*</sup>
        </p>
      <input value={formData.lastName}
      type='text' name='lastName' id='lastName' 
      onChange={handleInputChange} 
      placeholder='Enter your last name' required/>
      </label>
    </div>

    {/* Email */}

    <div>
      <label htmlFor="email">
        <p>Email
        <sup className="text-pink-200">*</sup>
        </p>
      <input type="email" name="email" 
      value={formData.email}
      onChange={handleInputChange}
      placeholder='example@gmail.com' required/>
      </label>
    </div>
{/* Pssword and confirm password */}
    <div>
{/* 1st Password */}
    <label htmlFor="password">
            <p>Create Password</p>
            <input 
             onChange={handleInputChange} value={formData.password}
            type={showpassword ? "text" : "password"}
             name='password' id='email' />

             <span onClick={()=>setshowpassword(!showpassword)}>
                {
                 showpassword? <AiOutlineEyeInvisible/> : <AiOutlineEye/>
                }</span>
        </label>

{/* Confirm Password */}

    <label htmlFor="password">
            <p>Confirm Password</p>
            <input 
             onChange={handleInputChange} value={formData.confirmPassword}
            type={showpassword ? "text" : "password"}
             name='password' id='ConfirmPassword' />

             <span onClick={()=>setshowpassword(!showpassword)}>
                {
                 showpassword? <AiOutlineEyeInvisible/> : <AiOutlineEye/>
                }</span>
        </label>

        <button>Create Account</button>

    </div>
   </form>
  )
}

export default Signupform
