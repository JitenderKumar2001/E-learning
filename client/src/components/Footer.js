import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  return (
    <Box sx={{height: '200px', bgcolor: "black", color: 'cyan', py: 3}}>
        <Box sx={{display: 'flex', justifyContent: 'center', gap: "100px"}}>
            <Box>
                <Typography sx={{color: 'white'}}>Company</Typography>
                <Typography sx={{color: 'gray'}}>About Us</Typography>
                <Typography sx={{color: 'gray'}}>Blog</Typography>
                <Typography sx={{color: 'gray'}}>Careers</Typography>
                <Typography sx={{color: 'gray'}}>Contact Us</Typography>
            </Box>
            <Box>
                <Typography sx={{color: 'white'}}>Support</Typography>
                <Typography sx={{color: 'gray'}}>Help Center</Typography>
                <Typography sx={{color: 'gray'}}>Safety Center</Typography>
                <Typography sx={{color: 'gray'}}>Community Group</Typography>
                <Typography sx={{color: 'gray'}}>Community Guideliness</Typography>
            </Box>
            <Box>
                <Typography sx={{color: 'white'}}>Legal</Typography>
                <Typography sx={{color: 'gray'}}>Cookies Policy</Typography>
                <Typography sx={{color: 'gray'}}>Privacy Policy</Typography>
                <Typography sx={{color: 'gray'}}>Terms of Service</Typography>
                <Typography sx={{color: 'gray'}}>Law Enforcement</Typography>
            </Box>
        </Box>
        <Typography variant='h6' sx={{textAlign: 'center', mt:5}}>Copyright © {new Date().getFullYear()} E-learning App</Typography>
    </Box>
  );
};

export default Footer;
