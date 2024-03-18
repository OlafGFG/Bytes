import Logo from './images/logo.png'
import apple from './images/apple.png'
import GIcon from './images/google.png'
import meta from './images/facebook.png'
import {Link} from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='signup-container'>

        <img src={Logo} alt="Logo" className="h-56 w-56 mt-10 mb-0 mx-auto"/>

        <p className=' text-sm mt-6 p-0 mb-10'>Serving Convenience One Click at a Time</p>

        <div className='button-container flex flex-col items-center mt-4'>

            <button type='submit' className='signup-container font-custom font-medium text-lg w-60 h-14 my-2.5 rounded-full border-white text-white bg-mainTheme'>Sign Up</button>

            <button type='submit' className='signin-container font-custom font-semibold text-lg w-60 h-14 my-2.5 rounded-full border-2 border-mainTheme text-gray-800'>Sign In</button>

        </div>

        <p className='mt-8 mb-6 '>or</p>

        <div className='social-icons flex justify-center'>

            <button type='submit' className='w-7 h-7  mr-6 ml-0'>
            <img src={apple} placeholder='appleIcon' className='w-7 h-7 '></img>
            </button>

            <button type='submit' className='w-7 h-7 mr-6 ml-6'>
            <img src={GIcon} placeholder='GoogleIcon' className='w-7 h-7  '></img>
            </button>

            <button type='submit' className='w-7 h-7 mr-0 ml-6 '>
            <img src={meta} placeholder='metaIcon' className='w-7 h-7 '></img>
            </button>

        </div>

        <p className='mt-8 mb-2 w-52 mx-auto text-xs font-semibold'>By singing up, you agree to our  </p>

        <div className='mx-auto mt-2'>
            <Link className=' mx-4 text-xs font-medium text-mainTheme underline'>Terms Of Service</Link>
            <Link className=' mx-4 text-xs font-semibold  text-mainTheme underline'>Privacy Policy</Link>
        </div>

    </div>
  )
}
export default SignUp