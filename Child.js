import React from "react";

const Child = (props) => {
        console.log(props);
      return <>
          <div style={{backgroundColor : "pink", padding: "20px"}}>
           <h1>hy i am a child node </h1>
         </div>
          {/*  show the data data of the parent   */}

          <div style={{backgroundColor : "green", margin:"20px", padding: "20px"}}>
           <h1>hy i am a child node  show the recode </h1>
          <h1>name - {props.name}</h1>
          <h1>collge - {props.collegename}</h1>
          <h1>countryname - {props.country}</h1>
         </div>
      </>
}

export default Child;