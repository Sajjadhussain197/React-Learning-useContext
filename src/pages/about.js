import React, { useContext } from 'react'
import { UserContext } from '../Usercontext'
const About = () => {
const {user,setUser}= useContext(UserContext)
  return (
    <div>
      <h1>About</h1>
      {user}
    </div>
  )
}

export default About
