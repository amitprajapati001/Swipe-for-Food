import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constant";
import useRestaurant from "../utils/useRestaurant";
import Shimmer from "./Shimmer";


const RestaurantMenu =()=>{


const param=useParams();
const {id}=param;

const restaurant =useRestaurant(id)


if(!restaurant) return null;

     return  (
        <div className="">
        <div className="flex justify-center  gap-[50px] items-center">  
        <div>
        <img   className="w-[400px] mt-[50px] " src={IMG_CDN_URL+restaurant?.cloudinaryImageId} />
        </div>
        <div>
        <h1 className="font-bold text-xl mt-[10px]">{restaurant?.name} </h1>
        <h3 className="font-medium" >{restaurant?.area}</h3>
        <h3 className="font-medium" > {restaurant?.city}</h3>
        <h3 className="font-medium" >Cost For Two : {restaurant?.costForTwoMsg}</h3>
        <h3 className="font-medium">{restaurant?.avgRating} : Stars</h3>

        </div>
       </div>
         <div className="flex justify-center items-center">

           
           <ul className="mt-[100px] items-center justify-center flex flex-wrap gap-[50px] font-semibold">
           
           { Object.values(restaurant?.menu?.items).map((item)=>(<li className="flex w-[300px] p-[40px] bg-gray-300 " key={item?.id}>  {item?.name} {item?.price}  </li>))}
           </ul>
         </div>
        </div>
    )
}

export default RestaurantMenu;