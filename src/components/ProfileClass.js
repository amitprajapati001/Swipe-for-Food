import React from "react";

class Profile extends React.Component {

    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:1
        }
    }
    render(){
        return (
            <div>
                <h1>My Class based Component</h1>
                <h2>{this.props.name}</h2>
                <h2>Class count is : {this.state.count}</h2>
                <button onClick={()=>{
                    this.setState( {
                        count:1
                    })
                }}>SetCount</button>
            </div>
        )
    }
}

export default Profile;