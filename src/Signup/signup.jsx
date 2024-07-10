import React, {useState} from 'react'

const Signup = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState(" ");
    const [password, setpassword] = useState("");
    const [number, setnumber] = useState("");

  return (
    <>
      <form>
    <input 
    type="name"
    placeholder='Name'
    value={name}
    onChange={(e)=>{setname(e.target.value)}}
    /> <br />   
    <input 
    type="email"
    placeholder='Email'
    value={email}
    onChange={(e)=>{setemail(e.target.value)}}
    />    <br />
    <input 
    type="number"
    placeholder='Contact no'
    value={number}
    onChange={(e)=>{setnumber(e.target.value)}}
    />    <br />
    <input 
    type="password"
    placeholder='Password'
    value={password}
    onChange={(e)=>{setpassword(e.target.value)}}
    />    <br />
    <button type="submit">Signup now</button>
    </form>
    </>
  )
}

export default Signup
