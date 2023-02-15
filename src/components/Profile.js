import { useState } from "react";

const Profile = (props)=>{

    const [count,setCount]=useState(0)
    return(
        <div>
        <h1>Profile Component</h1>
        <h1>Name:{props.name}</h1>
       <h1>Function count: {count}</h1>
       <button onClick={()=>{
           setCount(1)
       }}>FunctionCount</button>
        </div>
    )
}

export default Profile;