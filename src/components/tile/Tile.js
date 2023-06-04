import React from "react";



export const Tile = ({tile}) => {


  return (
    <div className="tile-container">
      
    
     {Object.values(tile).map((info,i)=>{

    return <p key={i} className="tile">this is the info: {info}</p>


     }



     )}

    </div>
  );
};



/* <p className="tile-title">The name is{tile}</p> */