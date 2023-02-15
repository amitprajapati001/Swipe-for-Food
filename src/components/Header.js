import { useState } from "react"
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"
import useOnline from "../utils/useOnline";


let loggedInUser =()=>{
    return false;
}

const Title =()=>{
    return (
        <a href="/">
        <img className="logo flex w-[100px] rounded-lg " alt="logo" src={Logo} />
        </a>
    )
}

const Header =()=>{

const [loggedIn, setLoggedIn] =useState(true)

const isOnline =useOnline;



    return (
        <div className="flex header p-2 pl-[10px]  items-center justify-between bg-gray-400 ">
            <Title />
            <div className="flex navitems justify-between ">
                  <ul className="flex gap-6 font-bold text-xl">
                   <Link to="/"><li>Home</li></Link> 
                   <Link to="/about"><li>About</li></Link> 
                   <Link to="/contact"><li>Contact</li></Link>
                   <Link to="/contact"><li>Cart </li></Link>
                  </ul>

                </div> 
                <div  className="p-[15px] font-bold text-xl text-white bg-blue-200 "> 
                    { loggedIn?<button  onClick={()=>{
                    {
                    setLoggedIn(false)}
                    }}>Logout</button> : <button  onClick={()=>{
                   setLoggedIn(true)
                     }}>Login</button> }   
                </div>  
                  
       
            
        </div>
    )
}

export default Header;