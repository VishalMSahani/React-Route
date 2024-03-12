import React from 'react'
import { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import toast  from 'react-hot-toast';
import { useNavigate } from "react-router-dom";

const Signupform = ({setIsLoggedIn}) => {

  const [formData, setformData] = useState({ email:"", password:"", firstName:"", lastName:"", confirmPassword:""  });
  const [showpassword, setshowpassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [accountType, setAccountType] = useState("student");
  const  navigate = useNavigate();


  function handleInputChange(e) {
    setformData(prevInputData => {
      const {name, value, type, checked} = e.target
      return{
        ...prevInputData, 
        [name] : type==="checkbox" ? checked:value
      }
    })
  }
 
 function formHandel(e){
  e.preventDefault();
  if (formData.password !== formData.confirmPassword) {
    toast.error("Passwords do not match");
    return;
  };

    setIsLoggedIn(true);
    toast.success('Account created Successfully');
    const accountData = {...formData};

    const finalData = {
      ...accountData,accountType
    };

    console.log("form data")
    console.log(finalData)

    navigate('/dashboard')
     
 }
  return (

  <div>
    
      {/* student and teacher */}
    <div className="flex bg-richblack-800 p-1 gap-x-1 rounded-full max-w-max mt-3">
        <button
          className={`${
            accountType === "student"
            ? "bg-richblack-900 text-richblack-5"
            : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "instructor"
            ? "bg-richblack-900 text-richblack-5"
            : "bg-transparent text-richblack-200 "
          } py-2 px-5 rounded-full transition-all`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>

   <form onSubmit={formHandel} >


{/* First Name & Last Name */}
<div className='flex gap-x-4'>
      <label htmlFor="firstName"> 
      <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name
        <sup className="text-pink-200">*</sup>
        </p>
      <input className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
      value={formData.firstName}
      type='text' name='firstName' id='firstName' 
      onChange={handleInputChange} 
      placeholder='Enter your first name' required/>
      </label>

      <label htmlFor="lastName">
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >Last Name
        <sup className="text-pink-200">*</sup>
        </p>
      <input className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
      value={formData.lastName}
      type='text' name='lastName' id='lastName' 
      onChange={handleInputChange} 
      placeholder='Enter your last name' required/>
      </label>
    </div>

    {/* Email */}

    <div>
      <label htmlFor="email">
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >Email
        <sup className="text-pink-200">*</sup>
        </p>
      <input className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
       type="email" name="email" 
      value={formData.email}
      onChange={handleInputChange}
      placeholder='example@gmail.com' required/>
      </label>
    </div>
{/* Pssword and confirm password */}
    <div className='  flex gap-x-4'>
{/* 1st Password */}
    <label className='w-full relative' htmlFor="password">
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >Create Password</p>
            <input className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
             onChange={handleInputChange} value={formData.password}
            type={showpassword ? "text" : "password"}
             name='password' id='email' />

             <span className='absolute right-3 top-[41px] cursor-pointer z-10'
              onClick={()=>setshowpassword(!showpassword)}>
                {
                 showpassword? <AiOutlineEyeInvisible/> : <AiOutlineEye/>
                }</span>
        </label>

{/* Confirm Password */}

    <label className='w-full relative' htmlFor="password">
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]' >Confirm Password</p>
            <input className="bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5"
             onChange={handleInputChange} value={formData.confirmPassword}
            type={showConfirm ? "text" : "password"}
             name='confirmPassword' id='ConfirmPassword' />

             <span className="absolute right-3 top-[41px] cursor-pointer z-10"
             onClick={()=>setShowConfirm(!showConfirm)}>
                {
                 showConfirm? <AiOutlineEyeInvisible/> : <AiOutlineEye/>
                }</span>
        </label>


    </div>
    
    <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900 w-full">
          Create Account
        </button>
   </form>
  </div>
  )
}

export default Signupform
