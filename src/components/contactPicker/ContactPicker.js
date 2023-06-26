import React from "react";

export const ContactPicker = ({

onChange,
contact,
name,
value


}) => {


  function contactName(arr,prop){

    return arr.map(item=>item[prop])
    
    
    
    }
    
    
    const result=contactName(contact,"name")

    console.log(contact)
    
    
    console.log(result)




  return (
    <div>


<select onChange={onChange}  value={value} name={name} >


<option value="">

No Contact Selected

</option>

{result.map((names)=>{

console.log(names)
return <option key={names} value={names}>{names}</option>

})
}



</select>




    </div>
  );
};
