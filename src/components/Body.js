import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import { filterData } from "../utils/helper"
import useOnline from "../utils/useOnline"


const Body =()=>{

    const searchvar= useState();
    const [filteredRestaurants, setFilteredRestaurants] =useState([])
    const [allRestaurants, setAllRestaurants] =useState([])
    const [searchText, setSearchText] =searchvar;


    useEffect(()=>{
        getRestaurant();  
    }, [])

    async function getRestaurant (){
          
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.9675929&lng=76.0534454&page_type=DESKTOP_WEB_LISTING");

        const json= await data.json();
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    }


   const isOnline= useOnline()

   if(!isOnline){
    return <h1>❤❤❤❤Please check your internet connection!!! You are offline</h1>
   }

    if(!allRestaurants) return null;

    // if(filteredRestaurants.length===0) {return <h1>Not found</h1>} // fix this
    // flex flex-1 text-right border sm:text-lg border-0 border-b-2 w-[300px] border-black pt-[8px] bottom-px mt-[10px] outline-transparent 
    return (allRestaurants?.length===0)?<Shimmer /> :  (
        <>
   
        <div className="m-[10px] ">
            <input type="text" placeholder="search" className="p-[10px] bg-gray-700 text-white border-none outline-transparent rounded-lg shadow-md" value={searchText} 
            onChange={(e)=> {
                setSearchText(e.target.value);
            } }  />
            <button className="p-[6px] font-bold text-xl text-white bg-blue-200  ml-4 rounded-lg" onClick={()=>{
                const data=filterData(searchText,allRestaurants);
                setFilteredRestaurants(data)}}>Search</button>
        </div>
        <div className="flex flex-wrap mt-[50px] items-center gap-[30px] p-[10px] align-baseline ">
            {filteredRestaurants.map((restaurant)=>{
            
                return <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}  ><RestaurantCard {...restaurant.data}  /></Link>
            })}

        </div>

        </>
    )
}

export default Body;