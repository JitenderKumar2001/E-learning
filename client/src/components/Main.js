import React from 'react'
import { Link } from 'react-router-dom'
import { 
    Box,
    Button,
    Typography
} from '@mui/material'

function Main() {
  return (
    <Box sx={{display: 'flex', gap: '50px', height: '90vh', width: '100vw', bgcolor: 'skyblue'}}>
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '50px', maxWidth: '450px', padding: '0 100px'}}>
            <Typography variant='h3'>Start learning from the worlds's best institutions</Typography>
            <Typography>Build skills with courses, certificates, and degrees online from world class universities</Typography>
            <Link to='/signin'><Button variant='contained'>Register</Button></Link>
        </Box>

        <Box sx={{maxWidth: '600px',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            < img src='https://www.sodapdf.com/blog/wp-content/uploads/2018/10/blog_how-to-make-a-tutorial-video-1024x480.jpg'
              alt='err' width='600' style={{borderRadius: '25px'}} />
        </Box>
    </Box>
  )
}

export default Main