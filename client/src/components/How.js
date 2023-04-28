import React from "react";
import { Box, Typography } from "@mui/material";

function How() {
  return (
    <Box sx={{bgcolor: '#1B3146', height:'80vh', width: '90vw',margin: 'auto', color: "white", display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <Typography variant="h4" sx={{mb: 5}}>How E-learning works?</Typography>
        <Box sx={{display: 'flex', gap:'50px'}}>
          <Box sx={{maxWidth: '350px'}}>
            <img src='https://www.pikpng.com/pngl/b/282-2822551_personalized-learning-learning-clipart.png' alt='err' height="60px" width='60px' />
            <Typography>Personalized Learning</Typography>
            <Typography sx={{color:'gray'}}>Discover your unique learning style and reach your full potential with our personalized learning program tailored specifically to your needs.</Typography>
          </Box>
       
          <Box sx={{maxWidth: '350px'}}>
            <img src='https://png.pngtree.com/png-clipart/20220509/original/pngtree-trust-badges-vector-flat-design-with-gold-color-png-image_7682789.png' alt='err' height="60px" width='60px' />
            <Typography>Trusted Content</Typography>
            <Typography sx={{color:'gray'}}>Explore our library of trusted content, curated by industry experts and fact-checked for accuracy, to ensure you have access to reliable information.</Typography>
          </Box>
    
          <Box sx={{maxWidth: '350px'}}>
            <img src='https://www.pikpng.com/pngl/b/282-2822551_personalized-learning-learning-clipart.png' alt='err' height="60px" width='60px' />
            <Typography>Tools to empower teachers</Typography>
            <Typography sx={{color:'gray'}}>Empower teaching with our innovative tools designed to help you create engaging lessons, assess student progress, and personalize learning for each individual student.</Typography>
          </Box>
        </Box>
    </Box>
  );
}

export default How;
