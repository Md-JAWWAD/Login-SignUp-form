import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './Login/login'
import Signup from './Signup/signup'
import './App.css'

function App() {
  const [isLogin, setLogin] = useState(true)

  return (
    <>
      <div className="App">
    {
      isLogin ? <Login />
    : <Signup />
}
  <button onClick={()=>setLogin(!isLogin)}>
    {
      isLogin ? 'Go to Sign Up'
      : 'Go to Login'
    }

  </button>

      </div>
    </>
  )
}

export default App