import { useState } from "react"
function Multiple(params) {
    
    let [value,setValue] = useState( {
        color : "red",
        brand : "BMW"
    })
/*     function newfunc(params) {
        setValue((previousval)=>{
            return {
               ...previousval,color:"blue"
            }
        })
    } */
/*     const [color ,setcolor] = useState("blue")
    const [brand , setbrand] = useState("BMW") */
    return <>
      
 

    <h1>This is a {value.color} {value.brand} car</h1>
    <button onClick={()=>{
        setValue((previousval)=>{
            return {
                ...previousval,color:"Blue"
            }
        })
    }}>Click here to change colour</button>
    </>
} 
export default Multiple