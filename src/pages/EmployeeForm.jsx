import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import { TextField } from '@mui/material';
import { UseForm, Form } from '../Components/UseForm';
import { FormControl, RadioGroup, FormLabel, Radio, FormControlLabel } from '@mui/material';

const initialValues = {
    BusinessDescription: "",
    email: "",
    phoneNo: "",
    gender:""

}

const EmployeeForm = () => {



    const {
        values, setValues, handleInputChange
    } = UseForm(initialValues);




    return (

        <Form>

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

                <Grid item xs={6} md={8}>

                    <FormControl>
                        <RadioGroup row={true}
                            name="gender"
                            value={values.gender}
                            onChange={handleInputChange}
                        >
                            <FormLabel>Gender</FormLabel>
                            <FormControlLabel value="Male" control={<Radio />} label="Male"></FormControlLabel>
                            <FormControlLabel value="Female" control={<Radio />} label="Female"></FormControlLabel>
                        </RadioGroup>
                    </FormControl>

                </Grid>



            </Grid>

        </Form>



    )
}

export default EmployeeForm
