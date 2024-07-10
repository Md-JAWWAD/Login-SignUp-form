import React, {useState} from 'react'
// import styles from 'login.module.css'

const Login = () => {
    const [email, setemail] = useState(" ");
    const [password, setpassword] = useState("");

  return (
    <>
    <form>
    <input 
    type="email"
    placeholder='Email'
    value={email}
    onChange={(e)=>{setemail(e.target.value)}}
    /> <br />    
    <input 
    type="password"
    placeholder='Password'
    value={password}
    onChange={(e)=>{setpassword(e.target.value)}}
    />    <br />
    <button type="submit">Login now</button>
    </form>    
    </>
  )
}
export default Login