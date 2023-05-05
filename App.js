import React, { useState } from 'react'
import Navbar from './components/Navbar'




import TableComponent from './components/TableComponent'
import Header from './components/Header'
import { Box, Button, Typography, styled } from '@mui/material'

import Graph from './components/Graph'
import Footer from './components/Footer'


const Container = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  
  
`
const ButtonsContainer = styled(Box)`
display: flex;
flex-direction: row;
gap: 1rem;
justify-content: center;
align-items: center;
width: 20vw;
  
`
const GraphContainer = styled(Box)`
  width: 80vw;
  
`
const CustomButton = styled(Button)`
  padding: 5px 40px;
  border-radius: 1px;
  background: whitesmoke;
  color: black;
  width: 100px;
`
const App = () => {
  const [show,setShow] = useState(false);
  return (
    <>
      <Navbar/>
      <Box style={{marginTop:"70px"}}>
      <Header/>
      <TableComponent/>
      <Container>
        <ButtonsContainer>
          <CustomButton variant='outlined' onClick={()=>setShow(true)}>Show</CustomButton>
          <CustomButton variant='outlined' onClick={()=>setShow(false)}>Hide</CustomButton>
        </ButtonsContainer>
        {
          show?<GraphContainer><Graph/></GraphContainer>:""
        }
        
      
      </Container>
     
      <Footer/>
      

   
      </Box>
      
    
     
      
   
    </>
  )
}

export default App
