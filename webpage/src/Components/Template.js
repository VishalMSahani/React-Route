import React from 'react'
import Signupform from '../Pages/Signupform'
import Signinform from '../Pages/Signinform'
import { FcGoogle } from "react-icons/fc";
import ImageShape from "../assets/frame.png"

const Template = ({Title, Desc1, Desc2, Image , FormType, setIsLoggedIn }) => {
  return (
    <div className='flex justify-evenly items-center gap-7 mt-20'>
      <div className='flex flex-col '>
      <div>
      <h1 className="text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]">{Title}</h1>
        <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
          <span className="text-richblack-100">{Desc1}</span>
          <span className="text-blue-100 italic">{Desc2}</span>
        </p> 
      </div>
      <div>
      {FormType === "signup" ? 
      (<Signupform setIsLoggedIn={setIsLoggedIn} ></Signupform>) :(<Signinform setIsLoggedIn={setIsLoggedIn} > </Signinform>)}
      </div>
      
      <div className="flex w-full items-center my-4 gap-x-2">
          <div className="h-[1px] w-full bg-richblack-700"></div>
          <p className="text-richblack-700 font-medium leading-[1.375rem]">OR</p>
          <div className="h-[1px] w-full bg-richblack-700"></div>
        </div>
      
      <div>
      <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-richblack-100 border-richblack-700 border px-[12px] py-[8px] gap-x-2 mt-6">
          <FcGoogle />
          <p>Sign Up with Google</p>
        </button>
      </div>
      </div>
      <div className="relative w-11/12 max-w-[450px]">
        <img
          src={ImageShape}
          alt="patter"
          width={558}
          height={504}
          loading="lazy"

        />
        <img
          src={Image}
          alt="patter"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4 "
        />
      </div>
      
    </div>
  )
}

export default Template
