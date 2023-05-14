import React, { useState, useEffect } from 'react'


const UseForm = (initialValues) => {

    const [values, setValues] = useState(initialValues);
    const handleInputChange=(e)=>{
      const {name ,value}=e.target;
      setValues({
          ...values,
          [name]:value,
      })
  }

  return {
    values,setValues,handleInputChange
  }
}



const Form = (props) => {
  return (
    <div>

      {props.children}
      
    </div>
  )
}



export  {UseForm,Form};