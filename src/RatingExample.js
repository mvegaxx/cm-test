import React from "react";

export default function RatingExample() {
  
  function modifyText() {
    var t2 = document.getElementById("rating");
    console.log("hola")
    // t2.firstChild.nodeValue = "three";    
  }

  React.useEffect(() => {
    let span = document.querySelectorAll("span")[0];
    span.addEventListener("click", modifyText, false);
    return () => {
      span.removeEventListener("click", modifyText);
    };
  }, []);
  
    return(
      <div id="rating">
        <span >*</span>
        <span >*</span>
        <span >*</span>
        <span >*</span>
        <span >*</span>
      </div>
    );
    
  }
    
  