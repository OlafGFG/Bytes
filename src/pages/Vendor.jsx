import Footer from "../components/Footer"

    const Vendor = () => {
  return (
    <div className='signup-container flex-col items-center justify-center h-full w-mwidth border-x-2 border-black bg-white'>

        <div className="vendor-header flex flex-col w-80  items-center mx-auto">
        <h1 className="font-custom text-4xl font-semibold h-7 w-40 py-8 mb-2">Nescafe</h1>
        <div className="card-rating mt-3 pl-1 w-12 bg-green-800 rounded-md text-sm h-5 justify-around items-center flex font-custom font-bold text-white ">
        4.2
        <img className="ratings-star-icon mb-twop" src={star} alt="rating"></img>
        </div>
        <p className="text-small-7 w-10 mt-1 truncate border-dotted border-b-1 border-black border-spacing-3">5.1k ratings</p>

        <div className="time-pricing text-white text-small-9 w-36 h-7 my-3 bg-vendortimepricing rounded-2xl flex justify-around items-center">
            <div className="vendor-time border-r-1 flex justify-center items-center border-white">
            <img src={whitewatch} alt='whitewatch' className='w-3 h-3 ml-3 mb-onep'></img>
            <p className="w-11 font-custom font-semibold">10 mins.</p>
            </div> 
            <div className="vendor-pricing flex-1 font-custom font-semibold">
                Rs. 60 for one
            </div>

        </div>
        <input placeholder= 'Search "Cold Coffee"' className="focus:outline-none block pl-5 h-10 w-80  mb-6 mt-2 text-sm text-gray-900 placeholder-gray-500  bg-lightRed rounded-full focus:border-red-200"></input>

            </div>
        
        <div className="top-picks w-80 mt-0 flex justify-between  bg-white m-auto"> 
            <h1 className="font-custom text-small-26 font-semibold text-left ">Top Picks</h1>

            <div className="time-pricing text-white text-small-9 w-36 h-7 mb-3 mt-1 rounded-2xl flex justify-around items-center">
            <div className="menu-button flex justify-center items-center border-white">
            <button className=" bg-vendortimepricing border-vendortimepricing border flex justify-between items-center rounded-3xl w-16 h-7" type="button">
                <img src={menu} className="h-5 w-4 ml-2 "></img>
                <p className="font-semibold mr-2 text-small-11 h-3 mb-1">Menu</p>
            </button>
            </div> 
            <div className="filter-button flex justify-center items-center border-white">
            <button className=" rounded-3xl border flex justify-between items-center w-16 h-7 border-gray-500" type="button">
                <img src={filters}className="h-4 w-3 ml-2 "></img>
                <p className="font-medium font-custom mr-2.5 text-small-10 text-gray-500">Filters</p>
            </button>
            </div>

        </div>
        </div>
        <ItemCard/>
        <Footer/>
        </div>
  )
}
export default Vendor
