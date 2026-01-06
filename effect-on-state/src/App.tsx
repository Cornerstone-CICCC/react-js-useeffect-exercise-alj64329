import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState<string>("")
  const [likes, setLikes] = useState<number>(1)
  const [isColorRed, setIsColorRed] = useState<boolean>(true)

  const handleSendMessage =()=>{
    setMessage("Hello form React!")
  }

  const handleLikes =()=>{
    setLikes((prev)=> prev+1)
  }

  const handleColor =() =>{
    setIsColorRed(prev=>!prev)
  }

  useEffect(()=>{
    if(message ==="") return
    console.log(message)
  },[message])
  
  useEffect(()=>{
    if(likes===1) return
    alert( `Likes updated to ${likes}!`)
  },[likes])

  useEffect(()=>{
    console.log(`Current Color: ${isColorRed?"Red":"Blue"}`)
  },[isColorRed])

  return (
  <div className='flex flex-col gap-4 m-8'>
    <h2>Message Logger</h2>
    <button
    onClick={handleSendMessage}
    className='bg-gray-400 p-4 rounded-2xl text-white'>
      Send Message
    </button>

    <h2>Like Counter</h2>
    <button
    onClick={handleLikes}
    className='bg-gray-400 p-4 rounded-2xl text-white'>
      Like</button>

    <h2>Color Box</h2>
    <button
    onClick={handleColor}
    className='bg-gray-400 p-4 rounded-2xl text-white'>
      Change Color
    </button>
    <div 
    style={{ width: 100, height: 100 }}
    className={isColorRed?"bg-red-600":"bg-blue-600"}>Color Box</div>
  </div>
  )
}

export default App
