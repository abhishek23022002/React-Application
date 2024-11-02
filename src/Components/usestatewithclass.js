import React, { useState } from "react";

class Usestatewithclass extends React.Component{
    constructor(parameters) {
        super()
        this.state  = {
            color : "Red",
            brand : "BMW"
          
        }
    }
      render(){
        return <>
        <h1>This a {this.state.color} {this.state.brand}</h1>
        <button onClick={()=>{
            this.setState((previousval)=>{
                return {
                    ...previousval,brand:"AUDI"
                }
            })
        }}>This is for the change</button>
        </>
      }
}
export default Usestatewithclass