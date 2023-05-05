import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const Header = () => {
    const date = new Date();
  return (
    <Box style={{display:"flex",width:"90vw",background:"whitesmoke", justifyContent:"space-between",marginTop:"90px",marginLeft:"5vw",padding:"20px"}} component={Paper}>
        <Box style={{display:"flex",flexDirection:"column",gap:"5px"}}>
            <Typography>Date:{date.toLocaleDateString()}</Typography>
            <Typography>HOD: Rahul Kumar</Typography>
            <Typography>College: Lovely Profesional University</Typography>

        </Box>
        <Box style={{display:"flex",flexDirection:"column",gap:"5px"}}>
        <Typography>Chancellor: Dr.Ashok Mittal</Typography>
        <Typography>Department: Computer Science & Engineering</Typography>
        <Typography>Professor's name: Sandeep Kaur</Typography>
            
        </Box>
      
    </Box>
  )
}

export default Header
