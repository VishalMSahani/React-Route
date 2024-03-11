import React from 'react'
import Template from '../Components/Template'
import loginImage from '../assets/login.png'

const Signin = ({setIsLoggedIn}) => {
  return (
    <Template
    Title="Login to StudyNotion"
    Desc1="Best Edtech Paltform"
    Desc2="in the world"
    FormType="login"
    Image={loginImage}
    setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signin
