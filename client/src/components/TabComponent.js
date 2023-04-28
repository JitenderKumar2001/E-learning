import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PeopleIcon from '@mui/icons-material/People';
import {
    Box,
    Button,
    Grid,
    Typography
} from '@mui/material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box sx={{ p: 3 }}>
        <Typography component="span">{children}</Typography>
      </Box>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function TabComponent() {
  const [value, setValue] = React.useState(0);
  const [design, setDesign] = useState([]);
  const [development, setDevelopment] = useState([]);
  const [marketing, setMarketing] = useState([]);

  // useEffect(() => {
  //   fetch('http://localhost:5000/design')
  //     .then(response => response.json())
  //     .then(data => setDesign(data.data))
  //     .catch(error => console.error(error));

  //     fetch('http://localhost:5000/development')
  //     .then(response => response.json())
  //     .then(data => setDevelopment(data.data))
  //     .catch(error => console.error(error));

  //     fetch('http://localhost:5000/marketing')
  //     .then(response => response.json())
  //     .then(data => setMarketing(data.data))
  //     .catch(error => console.error(error));

  // }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response1 = await fetch('http://localhost:5000/design');
        const data1 = await response1.json();
        setDesign(data1.data);

        const response2 = await fetch('http://localhost:5000/development');
        const data2 = await response2.json();
        setDevelopment(data2.data);

        const response3 = await fetch('http://localhost:5000/marketing');
        const data3 = await response3.json();
        setMarketing(data3.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{bgcolor: ' #e0ebeb'}}>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Typography align='center' variant='h3' sx={{textAlign: 'center', py:2, maxWidth: '450px'}}>Browse our courses by categories
        </Typography>
        </Box>
    <Box sx={{ width: '100%', flexGrow: 1, display: 'flex', margin: "20px auto" }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Tabs sx={{width: 200}} orientation='vertical' value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Design" {...a11yProps(0)} />
          <Tab label="Development" {...a11yProps(1)} />
          <Tab label="Marketing" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Grid container spacing={2} sx= {{width: "80vw", alignItems: 'center', ml: 3}}>
        {design.map((data) => (
            <Grid item xs={6} key={data.title}>
            <Box sx={{border: '2px solid gray', borderRadius: '10px', padding: '10px 20px', bgcolor: 'white'}}>
              <Typography sx={{textAlign: 'center'}}>{data.title}</Typography>
              <Box sx={{display: 'flex', justifyContent: 'space-between', color: "grays", my:2}}>
                  <Typography>{data.level}</Typography>
                  <Typography sx={{display: 'flex', justifyContent:'center'}}><MenuBookIcon sx={{mr:1}} /> {data.lesson}</Typography>
              </Box>
              <Box sx={{display: 'flex', justifyContent: 'space-between', color: "grays"}}>
                  <Typography sx={{display: 'flex', justifyContent: 'center'}}><PeopleIcon sx={{mr:1}} /> {data.students}</Typography>
                  <Button variant='contained' size='small'>Enroll</Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container spacing={2} sx= {{width: "80vw", alignItems: 'center', ml:3}}>
        {development.map((data) => (
            <Grid item xs={6} key={data.title}>
            <Box sx={{border: '2px solid gray', borderRadius: '10px', padding: '10px 20px', bgcolor: 'white'}}>
              <Typography sx={{textAlign: 'center'}}>{data.title}</Typography>
              <Box sx={{display: 'flex', justifyContent: 'space-between', color: "grays", my:2}}>
                  <Typography>{data.level}</Typography>
                  <Typography sx={{display: 'flex', justifyContent:'center'}}><MenuBookIcon sx={{mr:1}} /> {data.lesson}</Typography>
              </Box>
              <Box sx={{display: 'flex', justifyContent: 'space-between', color: "grays"}}>
                  <Typography sx={{display: 'flex', justifyContent: 'center'}}><PeopleIcon sx={{mr:1}} /> {data.students}</Typography>
                  <Button variant='contained' size='small'>Enroll</Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <Grid container spacing={2} sx= {{width: "80vw", alignItems: 'center', ml:3}}>
        {marketing.map((data) => (
            <Grid item xs={6} key={data.title}>
            <Box sx={{border: '2px solid gray', borderRadius: '10px', padding: '10px 20px', bgcolor: 'white'}}>
              <Typography sx={{textAlign: 'center'}}>{data.title}</Typography>
              <Box sx={{display: 'flex', justifyContent: 'space-between', color: "grays", my:2}}>
                  <Typography>{data.level}</Typography>
                  <Typography sx={{display: 'flex', justifyContent:'center'}}><MenuBookIcon sx={{mr:1}} /> {data.lesson}</Typography>
              </Box>
              <Box sx={{display: 'flex', justifyContent: 'space-between', color: "grays"}}>
                  <Typography sx={{display: 'flex', justifyContent: 'center'}}><PeopleIcon sx={{mr:1}} /> {data.students}</Typography>
                  <Button variant='contained' size='small'>Enroll</Button>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      </TabPanel>
    </Box>
    </Box>
  );
}
