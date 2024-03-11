import React from 'react'
import { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import toast  from 'react-hot-toast';
import { Link, useNavigate } from "react-router-dom";

const Signinform = ({setIsLoggedIn}) => {
    const [formData, setformData] = useState({ email:"", password:"" });
    const [showpassword, setshowpassword] = useState(false);
    const navigate = useNavigate();


   const  handleInputChange = (e) => { 
       setformData(prev => [{...prev, [e.target.name]: e.target.value}]);

   }
   function formHandel(e){
    e.preventDefault();
     console.log("Form Submitted");
     setIsLoggedIn(true);
     toast.success('Signed In Successfully');
     navigate("/dashboard");
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
             name='password' id='email' />

             <span className='absolute right-3 top-[38px] cursor-pointer'
             onClick={()=>setshowpassword(!showpassword)}>
                {
                 showpassword? <AiOutlineEyeInvisible/> : <AiOutlineEye/>
                }</span>
        </label>
        </div>
        <div className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
            <Link to="to">Forgot Password</Link>
        </div>
        <button>
            Submit
        </button>
    </form>
  )
}

export default Signinform
