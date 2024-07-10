import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    const[input,setInput]=useState();
    const [temp,setTemp]=useState();

   const change=()=>{
    setInput(temp);
   }
   
    const onchange=(e)=>{
        setTemp(e.target.value);
        
       
    };
        
   
  return (
    <div>
        <Typography variant="h4" gutterBottom><br /><br />
        <TextField id="outlined-basic" label="Enter Name" variant="outlined" onChange={onchange}/><br /><br />
        Hello {input}
      </Typography><br /><br />
      You have ordered worth $500,000,000 <br /><br />
      <Button variant="contained" onClick={change}>Change</Button>


    </div>
  )
}

export default StateBasics
