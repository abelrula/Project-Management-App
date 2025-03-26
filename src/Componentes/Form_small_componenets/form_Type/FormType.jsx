import React from 'react'
import  "./form_type.css"
const FormType = ({formType,setSelectedFormType,selectedFormType}) => {

    return (
      <div className="Form_Types">
      {formType.map( ( type, i ) => (
               <button
                  onClick={()=>setSelectedFormType(type)}
                   style={ {background: selectedFormType === type  && "#2d55af",
                   color:selectedFormType === type && "white" }} >
                    {type}
          </button>
      ))}
          </div>
           )
}

export default FormType