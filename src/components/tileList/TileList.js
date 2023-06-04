import React from "react";
import {Tile} from "../../components/tile/Tile";



export const TileList = ({tiles}) => {



   
      return(
    
        <div>
      { tiles.map((tile,i)=>{ 

     return <Tile tile={tile}  key={i}/>
     
     
     })
 
    }
     </div>
      )
   
  ;

  }



  /*<div>
    
      { tiles.map((obj,i)=>{ 

       const{name,...description}=obj


     return <Tile name={name} description={description} key={i}/>
     
     
     })
 
    }
      
    </div> */

