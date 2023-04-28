import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Box,Typography } from "@mui/material";

function CourseDetailPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/courses')
      .then(response => response.json())
      .then(data => setCourses(data.data))
      .catch(error => console.error(error));
  }, []);

  const { id } = useParams();
  const idNumber = parseInt(id);

  const course = courses.find((c) => c.id === idNumber);

  return (
    <div>
      {course ? (
        <Box sx={{textAlign: 'center'}}>
          <Box width='100vw'>
          <iframe style={{display: "block", margin: 'auto', marginTop: '30px'}} width="60%" height="455px" src={course.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <Typography variant="h3" sx={{my:3}}>{course.title}</Typography>
          </Box>
        </Box>
      ) : (
        <p>Course not found</p>
      )}
    </div>
  );
}

export default CourseDetailPage;

