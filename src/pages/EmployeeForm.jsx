import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import { TextField } from '@mui/material';
const initialValues = {
    BusinessDescription: "",
    email: "",
    phoneNo: "",

}

const EmployeeForm = () => {

    
    const handleInputChange=(e)=>{
        const {name ,value}=e.target;
        setValues({
            ...values,
            [name]:value,
        })
    }
    
    return (
        <div>

            <Grid container spacing={2}>
                <Grid item xs={6} md={8}>
                    <TextField label="Business Description"
                        variant="outlined"
                        name="BusinessDescription"
                        value={values.BusinessDescription}
                        onChange={handleInputChange}
                    />


                </Grid>
                <Grid item xs={6} md={8}>

                    <TextField label="Email"
                        variant="outlined"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                    />

                </Grid>

            </Grid>

        </div>
    )
}

export default EmployeeForm
