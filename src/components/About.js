import { Outlet } from "react-router-dom";
import Myprofile from "./Myprofile";
import FunctionalBased from "./FunctionalBased";
import { Component } from "react";
class About extends Component
{
    constructor(props){
        super(props)
        
            console.log("parent-constructor");
      
    }
    componentDidMouth(){
        console.log("Parent-constructor");
    }
    render()
    {
        console.log("parent-render");
        return(
            <div>
            <h1>About Us Page</h1>
            <p>this  is a about us age for food villa</p>
           
               <Myprofile name={"Yadav Priti"}/>
            </div>
        )
    }
}

export default About;
