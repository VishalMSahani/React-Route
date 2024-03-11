import React from 'react'
import Signupform from '../Pages/Signupform'
import Signinform from '../Pages/Signinform'

const Template = ({Title, Desc1, Desc2, Image , ImageShape, FormType, setIsLoggedIn }) => {
  return (
    <div>
      <div>
        <h2>{Title}</h2>
        <p>
          <span>{Desc1}</span>
          <span>{Desc2}</span>
        </p>
      </div>
      <div>
      {FormType === "signup" ? 
      (<Signupform setIsLoggedIn={setIsLoggedIn} ></Signupform>) :(<Signinform setIsLoggedIn={setIsLoggedIn} > </Signinform>)}
      </div>
      <div>
        <div></div>
        <p>OR</p>
        <div></div>
      </div>
      <div>
        <button>
          <p>Sign-up with Google</p>
        </button>
      </div>
      <div>
        <img src={Image} alt="Students"  />
        <img src={ImageShape} alt="Students"  />
      </div>
      
    </div>
  )
}

export default Template
