import {IMG_CDN_URL} from "../constant"

const RestaurantCard =({name, cuisines, cloudinaryImageId,costForTwoString})=>{

    return (
        <div className="w-[250px] h-[300px]  self-baseline ">
         <img  src={IMG_CDN_URL+cloudinaryImageId}/>
            <h2 className="font-bold text-xl mt-[10px]">{name}</h2>
            <h3 className="font-medium">{cuisines.join(", ")}</h3>
            <h4 className="font-medium">{costForTwoString}</h4>
        </div>
    )
}

export default RestaurantCard;