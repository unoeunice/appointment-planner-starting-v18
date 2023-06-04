import React from "react";

export const ContactPicker = ({
name,
value,
onChange,
contact



}) => {


  return (
    <div>


<select>


<option value="">

No Contact Selected

</option>

{contact.map(info=>{
 return 
 <option key={info} value={info}>{info}</option>

})
}



</select>




    </div>
  );
};
