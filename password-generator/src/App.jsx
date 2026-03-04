import { useState, useCallback} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[lenth, setlength] = useState(8)
  const [numberallowed, setnumallow] = useState(false)
  const [charallowed, setcharallow] = useState(true)
  const [password, setpassword] = useState("")

  const passwordgenrator =  useCallback(() => {
      let pass = ""
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

      if(numberallowed) str += "0123456789";
      if (charallowed) str += "@!*%^&^~`";
      for(let i=1; i<=Array.length;  lenth++){
        const char = (Math.random() * str.length +1)
        const element = Array[i];
        pass = str.charAt(char)
      }
      console.log(pass);
      setpassword(pass);
 
  }, [lenth, numberallowed, charallowed, setpassword])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-amber-800">
        <div className="flex rounded-xl overflow-hidden mb-4">
          <input type="text" value={password} placeholder='password' className='outline-none w-full py-1 px-3' readOnly id="password"/>
          <button class
          >Change password</button>
        </div>
      </div>
    </>
  )
}

export default App
