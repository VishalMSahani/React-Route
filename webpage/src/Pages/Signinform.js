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
    <form  onSubmit={formHandel}>
{/* email */}
        <div>
        <label htmlFor="email">
            <p>Email</p>
            <input onChange={handleInputChange} value={formData.email}
             type='email' name='email' id='email' />
        </label>
        </div>

{/* Password */}
        <div>
        <label htmlFor="password">
            <p>Password</p>
            <input 
             onChange={handleInputChange} value={formData.password}
            type={showpassword ? "text" : "password"}
             name='password' id='email' />

             <span onClick={()=>setshowpassword(!showpassword)}>
                {
                 showpassword? <AiOutlineEyeInvisible/> : <AiOutlineEye/>
                }</span>
        </label>
        </div>
        <div>
            <Link to="to">Forgot Password</Link>
        </div>
        <button>
            Submit
        </button>
    </form>
  )
}

export default Signinform
