import veg from '../images/vegicon.jpg'
import likebutton from '../images/heart1.png'

const ItemCard = () => {
  return (
    <div className="h-28 w-80 mx-auto flex rounded-2xl bg-itemcustombg">
        <div className="flex-1 items-center justify-around ">
          <img src={veg} alt="veg"></img>
          <img src={likebutton} alt="favs"></img>
        </div>
        <div className="flex-1 text-left">text</div>
        <div className="flex-1">Image</div>
    </div>
  )
}
export default ItemCard