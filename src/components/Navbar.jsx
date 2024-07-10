import { AppBar, Box, Button, colors, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box>
        <AppBar position='static'>
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{textAlign:'left'}}>Registration Form
                
            </Typography>
            <Button >
                <Link to={'/reg'} style={{color:'white'}} >
                Registration</Link>
            </Button>
            <Button>
          <Link to={'/state'} style={{color:'white'}}>State</Link>
        </Button>
        <Button>
          <Link to={'/counter'} style={{color:'white'}}>Counter</Link>
        </Button>
            </Toolbar>
            
        </AppBar>
      </Box>
    </div>
  )
}

export default Navbar
