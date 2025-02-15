import { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";

const LoginPopup = ({setShowLoginSignup}) => {
    const [currentLoginSignupState, setCurrentLoginSignupState] = useState('Sign Up');

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [doesTermsPolicyChecked, setDoesTermsPolicyChecked] = useState(false);

    const handleUsername = (username) => {
        setUsername(username);
    }

    const handleEmail = (email) => {
        setEmail(email);
    }

    const handlePassword = (password) => {
        setPassword(password);
    }

    const closeLoginSignup = () => {
        setShowLoginSignup(false);
    }

    const handleCurrentLoginSignup = (loginSignupValue) => {
        setCurrentLoginSignupState(loginSignupValue);
    }

    const handleTermsPolicy = () => {
        setDoesTermsPolicyChecked(prev => !prev)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted');
    }

  return (
    <div className="absolute z-10 w-full h-full bg-[#00000090] grid">
        <form onSubmit={handleSubmit} className="place-self-center w-80 md:w-[23vw] text-[#808080] bg-white flex flex-col gap-6 py-6 px-7 rounded-lg text-[14px]">
            <div className="flex justify-between items-center text-black">
                <h2>
                    {currentLoginSignupState}
                </h2>
                <img src={assets.cross_icon} alt="" className="w-4 cursor-pointer]" onClick={closeLoginSignup} />
            </div>
            <div className="flex flex-col gap-5 [&>input]:outline-none [&>input]:border-1 [&>input]:border-[#c9c9c9] [&>input]:p-2.5 [&>input]:rounded-md">
                {
                    currentLoginSignupState === 'Sign Up' && 
                    <input type="text" placeholder="Username" value={username} onChange={(e) => handleUsername(e.target.value)} />
                }
                <input type="email" placeholder="Email" value={email} onChange={(e) => handleEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => handlePassword(e.target.value)} />
            </div>
            <div className="flex items-start gap-2 -mt-3.5">
                <input className="mt-1" type="checkbox" name="terms" id="terms" required value={doesTermsPolicyChecked} onChange={handleTermsPolicy} />
                <p>By continuing, I agree to the terms of use & privacy policy</p>
            </div>
            <button className="border-none p-2.5 rounded-md text-white bg-[#FF4D25] text-base cursor-pointer">
                {currentLoginSignupState}
            </button>
            {
                currentLoginSignupState === 'Login' 
                ?
                <p>Create a new account ? <span className="text-[#FF4D25] font-semibold cursor-pointer" onClick={() => handleCurrentLoginSignup('Sign Up')}>Sign Up</span></p>
                :
                <p>Already have an account ? <span className="text-[#FF4D25] font-semibold cursor-pointer" onClick={() => handleCurrentLoginSignup('Login')}>Login here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup