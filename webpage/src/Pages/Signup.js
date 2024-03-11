import React from 'react'
import Template from '../Components/Template'
import signupImage from '../assets/signup.png'

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
    Title="Signup to StudyNotion"
    Desc1="Best Edtech Paltform"
    Desc2="in the world"
    FormType="signup"
    Image={signupImage}
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup
