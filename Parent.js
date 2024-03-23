import React from "react";
import Child from "./Child";

//  how to use this props 
// passing the the data parent function to child function and so the data



/*--------------------Rerendring-----------*/
function Parent (){
      const countryname ="india"
    return(<>
          <div style ={{backgroundColor : "brown ", padding: "20px"}}>
                <h1 >Hy i am a perant </h1> 
             <Child/>
          </div>

          /*---------------show the data parent to child ----------------*/

          <div style ={{backgroundColor : "brown ", padding: "20px"}}>
                <h1 >Hy i am a perant </h1> 
                {/* this passing the data perant node to child  */}
             <Child name  ="gopal"  collegename ="gniot" country={countryname} />  
          </div>

     </>);
}

export default Parent;