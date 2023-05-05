import React from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { Box, Typography } from '@mui/material';

const MyDialog = ({open,setOpen,dialogStudent}) => {
  console.log(dialogStudent)
  
 
  return (
    <Dialog  open={open} onClose={()=>{setOpen(false)}}>
      <Box style={{display:"flex",padding:"20px 40px"}}>
        <Box style={{display:"flex",flexDirection:"column",gap:"10px"}}>
        
        <Typography>Name: {dialogStudent[0]?.Name}</Typography>
        <Typography>Ticket Number: {dialogStudent[0]?.TicketNumber} </Typography>
        <Typography>Rating grade: {dialogStudent[0]?.RatingGrade}</Typography>
        <Typography>Exam grade: {dialogStudent[0]?.ExamGrade}</Typography>
        <Typography>Final gade: {0.6*dialogStudent[0]?.ExamGrade + 0.4*dialogStudent[0]?.RatingGrade}</Typography>
        <Typography>Status: {dialogStudent[0]?.Status}</Typography>
        </Box>
        </Box>
       
      
    </Dialog>
  )
}

export default MyDialog
