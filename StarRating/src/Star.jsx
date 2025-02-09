import React, { useState } from "react";

const Star = ({ count = 5 }) => {
     const [coun,setCount]=useState(0);
     function handleClick(index){
         setCount(index+1);
     }
     const [hover,setHover]=useState(0);
     function handleHover(index){
            setHover(index+1);
     }
  return (
    

    <div>
      {new Array(count).fill(0).map((_, i) => (
        <span key={i} className={i<coun||i<hover?"active":""} onMouseLeave={()=>setHover(0)} onMouseEnter={()=>handleHover(i)} onClick={()=>handleClick(i)}>&#9733;</span>
      ))}
    </div>
  );
};

export default Star;
