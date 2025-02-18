import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import QRCode from 'react-qr-code'


function App() {
  const[text, setText]=useState('');
  //const[value, setValue]=useState('');
  

  return (
    <div className='cont'>
    <h1>QR Code Generator</h1>
    <input value={text} placeholder='Type URL/text' onChange={(e)=>{setText(e.target.value)}}/>
    <br></br>
    <QRCode className='image' value={text}></QRCode>
    </div>

  )
   
}

export default App
