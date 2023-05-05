
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Box, styled } from '@mui/material';



const MyToolbar = styled(Toolbar)`
background: whitesmoke;
box-shadow: none;
color: black;
display: flex;
justify-content: space-between;  
`
const Navbar = () => {
    const date = new Date();
    
  return (
    <>
    <AppBar elevation={0}>
        <MyToolbar> 
            <Box style={{display:"flex",gap:"10px",alignItems:"center"}}>
            <MenuBookIcon/>
            <Typography variant="h6">MyGradeBook</Typography>
            </Box>
            <Typography>{date.toDateString()}</Typography>
        </MyToolbar>
      
    </AppBar>
    </>
  )
}

export default Navbar;
