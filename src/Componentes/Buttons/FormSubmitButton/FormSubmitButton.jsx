import React from 'react'
import "./formSubmitButton.css"
const FormSubmitButton = ({buttonName}) => {
  return (
     <button type="submit" className="submitButton">
      { buttonName}
        </button>
  )
}

export default FormSubmitButton