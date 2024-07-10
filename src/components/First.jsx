import { Button, TextField,Typography } from '@mui/material'
import React from 'react'  


const First = () => {
  return (
    <div>
      <h4>Login Page</h4>
      <label htmlFor="username">Username : </label>
      <input type="text" placeholder='username' />
      <br />
      <label htmlFor="password">Password : </label>

      <input type="text" placeholder='password' />
      <br />
      <button>Submit</button>
      <br /><br /><br /><br />
      <Typography variant="h6">
        Login Page
      </Typography>
      <TextField id="outlined-basic" label="Username" variant="outlined" /><br />
      <TextField id="outlined-basic" label="Password" variant="outlined" /><br />
      <Button variant="outlined">Login</Button>
      
    </div>
  )
}

export default First
