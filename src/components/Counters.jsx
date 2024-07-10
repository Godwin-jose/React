import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counters = () => {
  const [constant,setConstant]=useState(0);
  const add=()=>{
    setConstant(constant+1);


  }
  const reduce=()=>{
    setConstant(constant-1);
  }
  const reset=()=>{
    setConstant(0);
  }
  return (
    <div>
      <br /><br /><br />
         <Typography variant="h1" gutterBottom>
        {constant}
      </Typography><br /><br /><br />
      <Button variant="contained" onClick={add}>+</Button>&nbsp;
      <Button variant="contained" onClick={reset}>reset</Button>&nbsp;
      <Button variant="contained" onClick={reduce}>-</Button>&nbsp;
      
    </div>
  )
}

export default Counters
