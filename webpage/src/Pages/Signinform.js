import React from 'react'
import { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import toast  from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";

const Signinform = ({setIsLoggedIn}) => {
    const [formData, setformData] = useState({ email:"", password:"" });
    const [showpassword, setshowpassword] = useState(false);
    const navigate = useNavigate();


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
     console.log("Form Submitted");
     console.log(formData);
     setIsLoggedIn(true);
     toast.success('Signed In Successfully');
     navigate('/dashboard')
      // window.location.href="http://localhost:3000/dashboard"
     
   }

  return (
    <form  onSubmit={formHandel} className='flex flex-col w-full  mt-6'>
{/* email */}
        <div>
        <label className='w-full' htmlFor="email">
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email</p>
            <input required
             className='bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5'
             onChange={handleInputChange} value={formData.email}
             type='email' name='email' id='email' />
        </label>
        </div>

{/* Password */}
        <div className='mt-1'>
        <label className='w-full relative' htmlFor="password">
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password</p>
            <input required
             className='bg-richblack-800 rounded-[0.75rem] w-full p-[12px] text-richblack-5'
             onChange={handleInputChange} value={formData.password}
            type={showpassword ? "text" : "password"}
             name='password' id='password' />

             <span className='absolute right-3 top-[40px] cursor-pointer'
             onClick={()=>setshowpassword(!showpassword)}>
                {
                 showpassword? <AiOutlineEyeInvisible/> : <AiOutlineEye/>
                }</span>
        </label>
        </div>
        <Link to="#">
                    <p className="text-xs mt-1 text-blue-100 max-w-max ml-auto">Forgot Password</p>
                </Link>
        <button className="bg-yellow-50 py-[8px] px-[12px] rounded-[8px] mt-6 font-medium text-richblack-900">Sign in</button>

    </form>
  )
}

export default Signinform
