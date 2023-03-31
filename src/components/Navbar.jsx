import {AppBar,Button,Toolbar,Typography} from '@mui/material'
import React from 'react'
import {Box} from '@mui/material'
import {Link }from 'react-router-dom'
const Navbar = () => {
  return (
   <Box>
    <AppBar>
          <Toolbar>
            <Typography>Studentsapp</Typography>
            <Button  color="inherit"><Link to ='/' style={{color:'white',textDecoration:'none'}} >
                view</Link></Button>
            <Button color="inherit"><Link to ='/add' style={{color:'white',textDecoration:'none'}} >
                Add</Link></Button>
          </Toolbar>
        </AppBar>
   </Box> 
  )
}

export default Navbar
