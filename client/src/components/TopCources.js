import React, {useState, useEffect} from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
//import data from './data.json';

function TopCources() {


  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/courses')
      .then(response => response.json())
      .then(data => setCourses(data.data))
      .catch(error => console.error(error));
  }, []);


  return (
    <Box sx={{width: '100vw', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', bgcolor: '#F5F5F5', mb:3, pb:2}}>
        <Typography variant="h3" sx={{textAlign: 'center', mt:3, mb:5}}>Explore top Courses</Typography>
      <Grid container spacing={2} columnSpacing={5} sx={{ width: '90%'}}>
      {courses.map((course) => (
        <Grid item xs={12} sm={6} md={4} key={course.id} >
          <Link to={`/${course.id}`} style={{ textDecoration: "none" }}>
          <Box sx={{bgcolor: 'white', borderRadius: '10px'}}>
          <Box sx={{height: '200px',
          maxWidth: '450px',
        backgroundImage: `url(${course.image})`,
        backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
        }}>

            <Button size="small" variant="contained" sx = {{ mt:2, ml:2, mr:2, bgcolor: 'white', color: 'black'}}>{course.lesson} lessons</Button>
            <Button size="small" variant="contained" sx={{mt:2, bgcolor: '#FEFBEA', color: 'black'}}>{course.price}$</Button>
            
          </Box>
          <Typography sx={{textAlign: 'center'}}>{course.title}</Typography>
            <Typography sx={{textAlign: 'center'}}>duration: {course.duration}</Typography>
            </Box>
            </Link>
        </Grid>
      ))}
      </Grid>
    </Box>
  );
}

export default TopCources;
