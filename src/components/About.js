import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const About =()=>{
    return (

        <div>
            <h1>This is About us page</h1>
            <Link to="profile"><button>My Profile</button></Link>
            
            <Outlet />
        </div>
       
    )
}

export default About;