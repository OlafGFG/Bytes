import React from "react"
import profileIcon from '../images/person.png'
import cover from '../images/LandingPageCover.png'
import home from '../images/home.png'
import heart from '../images/like.png'
import list from '../images/list.png'
import shopping from '../images/shopping.png'
import CanteenCard from "../components/CanteenCard"
import Footer from "../components/Footer"
const LandingPage = () => {
  return (
    <div className="signup-container w-mwidth ">
        <div className='landing-page-header flex justify-around mb-6'>
            <div className="w-72 h-12 mt-8">
            <h1 className="h-5 w-36 font-custom font-bold">Hello, Shreya</h1>
            <p className="h-2.5 w-44 font-custom text-xs">What do you want to order today?</p>
            </div>
            <img src={profileIcon} className="h-8 w-8 mt-8 bg-red-100 rounded-full " alt="Profile-Icon"/>
        </div>

        <input placeholder= 'Search "Cold Coffee"' className="block p-2.5 h-10 w-96 mb-6  text-sm text-gray-900 placeholder-gray-500 border-none bg-lightRed rounded-full"></input>
        
        <img src={cover} alt="cover" className="h-72 w-full mb-4"></img>

        <div className="flex items-center w-flexwidth mx-auto mb-6">
  <div className="flex-grow border-b-2 border-gray-300"></div>
  <div className="px-4 text-gray-500 font-custom tracking-widest-7 text-xs">ALL <br></br>CANTEENS</div>
  <div className="flex-grow border-b-2 border-gray-300"></div>
</div>

    <CanteenCard/>
    <CanteenCard/>
    <Footer/>
    </div>
  )
}
export default LandingPage