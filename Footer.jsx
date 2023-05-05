import { Box, Paper, Typography, styled } from '@mui/material'
import React from 'react'


const Container = styled(Box)`
    background: #0f0f3b;
    color: white;
    margin-top: 50px;
    border-radius: 0;
    padding: 40px 80px;
    justify-content: space-between;
    flex-direction: row;
    display: flex;
`
const LeftContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
const RightContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
const Footer = () => {
  return (
    <Container>
        
        <LeftContainer>
        <Typography>Home</Typography>
        <Typography>About Us</Typography>
        <Typography>Contact Us</Typography>
        </LeftContainer>
        <RightContainer>
        <Typography>Address: C-14 New Delhi, India</Typography>
        <Typography>Phone: +916205264243</Typography>
        <Typography>Email: contact@gmail.com</Typography>
        
        </RightContainer>
      
    </Container>
  )
}

export default Footer
