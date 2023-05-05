import { Box, Button, InputBase, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import Table from '@mui/material/Table';
import Students from "../data.json"
import SearchIcon from '@mui/icons-material/Search';
import MyDialog from './MyDialog';



const CustomButton = styled(Button)`
background: whitesmoke;
color: black;
box-shadow: none;
border-radius: 1px;
`
const DataBox = styled(Box)`
  margin: 15px auto;
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 20px;
  width: 40vw;
  
`

const TableComponent = () => {
  const [open,setOpen] = useState(false);
  const [showStudents,setShowStudents] = useState([]);
  const[searchText,setSearchText] = useState(null)
  const [id,setId] = useState(0);
  const [dialogStudent,setDialogStudent] = useState([]);



  const openDialog = () =>{
    setOpen(true);
    

  }

  const handleAll = () =>{
    setShowStudents(Students)

  }
  const handlePass = ()=>{
    const data = Students.filter((student)=>student.Status==="Pass")
    setShowStudents(data)
  }
  const handleFail = ()=>{
    const data = Students.filter((student)=>student.Status==="Fail")
    setShowStudents(data)
  }
  const handleATOZ = ()=>{
    const data = Students.sort((a,b)=>{
      if(a.Name.toLowerCase()<b.Name.toLowerCase()){
        return -1;
      }
    });
    setShowStudents(data)
  }
  const handleZTOA = ()=>{
    
    const data = Students.sort((a,b)=>{
      if(b.Name.toLowerCase()<a.Name.toLowerCase()){
        return -1;
      }
    });
    setShowStudents(data)
  }

  const handleChange = (e) =>{
    setSearchText(e.target.value)
  }

  const handleSearch = ()=>{
    const studentData = Students.filter((student)=>student.Name.toLowerCase() === searchText)
    setShowStudents(studentData)
  }
  const passArray = [];
  const failArray = [];
  const totalArray = [];

  
  return (

    <Box style={{marginTop:"100px"}}>
    <Box style={{display:"flex",gap:"10px",marginBottom:"40px",justifyContent:"center"}}>
        <CustomButton variant='contained' onClick={handleAll} size='small'>All</CustomButton>
        <CustomButton variant='contained' onClick={handlePass} size='small'>Pass</CustomButton>
        <CustomButton variant='contained' onClick={handleFail} size='small'>Fail</CustomButton>
        <CustomButton variant='contained' onClick={handleATOZ} size='small'>A-Z</CustomButton>
        <CustomButton variant='contained' onClick={handleZTOA} size='small'>Z-A</CustomButton>
        <Box style={{display:"flex",alignItems:"center",marginLeft:"30px",gap:"10px",background:"whitesmoke"}}>
        <SearchIcon style={{marginLeft:"5px"}} />
        <InputBase placeholder='Search by Name' onChange={handleChange} style={{background:"whitesmoke",padding:"2px 5px",borderRadius:"1px"}}/>
        
        
        </Box>
        <CustomButton onClick={handleSearch} variant='contained' size='small' color="success">Search</CustomButton>
    </Box>
    <TableContainer component={Paper} >
        <Table>
        <TableHead>
            <TableRow>
                <TableCell>Id.No</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Ticket Number</TableCell>
                <TableCell>Rating Grade</TableCell>
                <TableCell>Exam grade</TableCell>
                <TableCell>Final grade</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Details</TableCell>
            </TableRow>
        </TableHead>
        
              {
                
                showStudents?.map((data)=>{
                  let finalGrade = 0.6*data.ExamGrade + 0.4*data.RatingGrade;
                  let score = finalGrade;
                 
                  if(data.Status === "Pass"){
                    passArray.push(data.Name);
                  }
                  if(data.Status === "Fail"){
                    failArray.push(data.Name);
                  }
                  totalArray.push(data.Name);
                  

                  
                  return(
                   <>
                     <TableBody>
            <TableRow>
              
            <TableCell>{data.id}</TableCell>
                <TableCell>{data.Name}</TableCell>
                <TableCell>{data.TicketNumber}</TableCell>
                <TableCell>{data.RatingGrade}</TableCell>
                <TableCell>{data.ExamGrade}</TableCell>
                <TableCell>{score}</TableCell>
                <TableCell>{data.Status}</TableCell>
                <TableCell><Button onClick={()=>(setOpen(true),setId(data.id),setDialogStudent(showStudents.filter((student)=>student.id === id)))}>Details</Button></TableCell>
                <MyDialog open={open} setOpen={setOpen} dialogStudent={dialogStudent} onClick={openDialog}/>
               
            </TableRow>
        </TableBody>
                   </>
                  )
                })
              }
            
        

      

        </Table>
    </TableContainer>
    <DataBox>
        <Typography>Total number of Students: {totalArray.length}</Typography>
        <Typography>Total number of Passing Students: {passArray.length}</Typography>
        <Typography>Total number of Fail Students: {failArray.length}</Typography>
        <Typography>Final Grade 0-5: {totalArray.length}</Typography>
      </DataBox>

    
      
    </Box>
  )
}

export default TableComponent
