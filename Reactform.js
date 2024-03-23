import React from "react"
import { useState ,useEffect } from "react";


const Reactform =()=>{

      const [name, setname] =useState('');
      const [address, setaddress] =useState('');
   

    const namefun = (event)=>{
        console.log(event.target.value)
        setname(event.target.value)
        
    }
     
     const addressfun=(event)=>{
          console.log(event.target.value)
          setaddress(event.target.value)
          
     }
    
     const sodata =()=>{
        console.log("My name - "+name + "Address - " +address);
     }

     useEffect (()=>{
       console.log("use call it");
     })
   return<>

      <h1>Who to use this form in react - This is Form</h1>
        Name : <input type="text"  onChange={namefun}></input>
        address : <input type="text" onChange={addressfun}></input>

        <button type="submit" onClick={sodata} >submit</button>

        <div>name -{name}  address -{address}</div>
   </>
   
}

export default Reactform;