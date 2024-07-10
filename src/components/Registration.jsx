//rafce
import { Button, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


const Registration = () => {
  return (
    <div>
        <h2>Login Page</h2><br />
      <TextField id="outlined-basic" label="Name" variant="outlined" /><br /><br />
      <TextField id="outlined-basic" label="Age" variant="outlined" /><br /><br />
      <TextField id="outlined-basic" label="Place" variant="outlined" /><br /><br />
      <TextField id="outlined-basic" label="Email" variant="outlined" /><br /><br />
      <TextField id="outlined-basic" label="Password" variant="outlined" /><br /><br />
      <Button variant="contained">
         <Link to={'/'}> 
        Submit
         </Link> 
        </Button>
        
    </div>
  )
}

export default Registration
