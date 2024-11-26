import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer';
import LoginSignup from './components/LoginSignup';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
  <LoginSignup/>
  <Footer/>
  
</div>
  )
}

export default App
