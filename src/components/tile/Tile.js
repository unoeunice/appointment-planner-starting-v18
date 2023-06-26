import React from "react";



export const Tile = ({tile}) => {


  return (
    <div className="tile-container">
      
    



      {Object.values(tile).map((info,i)=>{

return <p key={i} className="tile">this is the contact: {info}</p>


 }



 )}
     




     

    </div>
  );
};



/* <p className="tile-title">The name is{tile}</p> */


/* solution below but i use my own code above
     {Object.values(tile).map((info,i)=>{

    return <p key={i} className="tile">this is the contact: {info}</p>


     }



     )} */


     /*
     <p>name:{Object.values(tile)[0]}</p>

      <p>number:{Object.values(tile)[1]}</p>

      <p>email:{Object.values(tile)[2]}</p> */