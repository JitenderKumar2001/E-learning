import React from 'react';
import IMG from '../img/expert.jpg';
import { 
    Box,
    Button,
    Typography
} from '@mui/material'

function IndExpert() {
  return (
    <Box sx={{height: '90vh', width: '100vw', display: 'flex', gap: '50px', alignItems: 'center', justifyContent: 'center', margin: '0 20px'}}>
        <Box sx={{maxWidth: '450px'}}>
            <Typography variant='h3'>Courses taught by industry leaders around the world</Typography>
            <Typography sx={{my:2}}>Build sills with courses, certificates, and degrees online from world class universities. This short quiz will sort you out. Answer a few simple course recommendations.</Typography>
            <Button variant='contained'>Explore Teachers</Button>
        </Box>
        <Box>
            <img src={IMG} alt='err' style={{maxWidth: '500px'}}></img>
        </Box>
    </Box>
  )
}

export default IndExpert