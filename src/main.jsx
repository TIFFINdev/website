import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import SignUp from './SignUp.jsx'
import './index.css'
import OTPPage from './OTP.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <SignUp/>
    {/* <OTPPage/> */}
  </StrictMode>,
)
