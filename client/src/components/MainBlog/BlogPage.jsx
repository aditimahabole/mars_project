import { useState } from 'react';
import { Card, CardContent,  TextField,Typography, Pagination, Grid, Button } from '@mui/material';
import './BlogPage.css';
import blog_banner from '../../../public/assets/blog_1.jpg';

import blog_2 from '../../../public/assets/blog_2.jpg'

const MyComponent = () => {
  const [page, setPage] = useState(1);

  // Example data, you can replace it with your own
  const data = [
    { id: 1, title: 'Aerospace Engineering Seminar', content: 'Learn about the latest advancements in aerospace engineering at our seminar.', image: 'https://via.placeholder.com/150', time: '11 Nov 2023' },
    { id: 2, title: 'Introduction to Aeronautics Workshop', content: 'Join us for a hands-on workshop introducing basic concepts of aeronautics.', image: 'https://via.placeholder.com/150', time: '12 Jan 2024' },
    { id: 3, title: 'Astrophysics Conference 2024', content: 'Explore the mysteries of the universe with leading astrophysicists at our annual conference.', image: 'https://via.placeholder.com/150', time: '13 Jan 2024' },
    { id: 4, title: 'Machine Learning in Computer Science Symposium', content: 'Discover the applications of machine learning in computer science and software engineering.', image: 'https://via.placeholder.com/150', time: '18 Jan 2024' },
    { id: 5, title: 'Space Exploration Workshop', content: 'Participate in a workshop focused on the challenges and future prospects of space exploration.', image: 'https://via.placeholder.com/150', time: '18 Jan 2024' },
    { id: 6, title: 'Astronomy Club Meeting', content: 'Join our astronomy club for discussions on recent astronomical discoveries and observations.', image: 'https://via.placeholder.com/150', time: '18 Jan 2024' },
    { id: 7, title: 'Coding Bootcamp for Beginners', content: 'Start your journey in coding with our beginner-friendly bootcamp covering the fundamentals of programming.', image: 'https://via.placeholder.com/150', time: '18 Jan 2024' },
    { id: 8, title: 'Data Science Conference', content: 'Explore the latest trends and techniques in data science and analytics at our conference.', image: 'https://via.placeholder.com/150', time: '18 Jan 2024' },
    { id: 9, title: 'Robotics Workshop', content: 'Build and program your own robots in our hands-on robotics workshop for students and enthusiasts.', image: 'https://via.placeholder.com/150', time: '18 Jan 2024' },
    { id: 10, title: 'Introduction to Quantum Computing Seminar', content: 'Learn the basics of quantum computing and its potential impact on future technologies.', image: 'https://via.placeholder.com/150', time: '4 Feb 2024' },
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * itemsPerPage;
  const slicedData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className='blog_pages_section'>
      <div style={{width:"45%" , display:"flex" , flexDirection:"column" , justifyContent:"center", alignItems:"center"}}>

     
      
        {slicedData.map(item => (
          <Grid item xs={12} sm={6} md={10} key={item.id} style={{display:"flex" ,flexDirection:"column" ,justifyContent:"center" }} >
            <Card style={{ height: '100%' , margin:"40px" }}>
              <CardContent style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{display:"flex" ,flexDirection:"column" , justifyContent:"space-between" , backgroundColor:"transparent" , height:"100%" }}>
                  <img src={blog_banner} alt={item.title} style={{ width: '100%', marginBottom: '10px' }} />
                  <Typography variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography color="textSecondary" gutterBottom>
                    {item.time}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {item.content}
                  </Typography>
                </div>
                <Button variant="contained" color="primary" style={{margin:"30px"}}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
  
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        style={{ marginTop: '20px', textAlign: 'center' }}
      />
      </div>

      <div style={{ width:"45%" , margin:"40px"}}>
      {/* Search Section */}
      <div>
        <Typography variant="h4" gutterBottom style={{fontFamily:"var(--jost)"}}>
          Search
        </Typography>
        <TextField label="Search" variant="outlined" fullWidth />
      </div>

      {/* Latest Post Section */}
      <div style={{marginTop:"20px"}}>
        <Typography variant="h5" gutterBottom style={{fontFamily:"var(--jost)"}}>
          Latest Post
        </Typography>
        <Grid container spacing={2} >
          {[1, 2, 3].map((item) => (
            <Grid item xs={12} key={item}>
              <Card style={{ display: "flex", marginBottom: "10px" }}>
                <img
                  src={blog_2}
                  alt={`Post ${item}`}
                  style={{ width: "100px", marginRight: "10px" }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Post Title {item}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Date: {new Date().toLocaleDateString()}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      {/* Categories Section */}
      <div style={{marginTop:"20px" , fontFamily:"var(--roboto)"}}>
        <Typography variant="h5" gutterBottom style={{fontFamily:"var(--jost)"}}>
          Categories
        </Typography>
        <ul style={{listStyle:"none" }}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <li key={item} style={{ margin:"30px 0px"}}>
              <a href="#" style={{textDecoration:"none" , color:"black"}}>Category {item}</a>
            </li>
          ))}
        </ul>
      </div>
      {/* card */}
      <div style={{marginTop:"20px"}}>
      <Card style={{ display: "flex", marginBottom: "10px" , width:"60%" , height:"300px", backgroundColor:"lightblue" , borderRadius:"20px"}}>
                
                <CardContent  style={{ display: "flex", flexDirection:"column", alignItems:"center" }}>
                  <Typography variant="h4" gutterBottom style={{textAlign:"center" , fontFamily:"var(--jost)", fontWeight:"600"}}>
                    Get Online Courses From <span style={{color:"var(--dark-blue)"}}>MARSE</span> 
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    Get the best courses
                  </Typography>
                  <button style={{padding:"20px 30px" , border:"none" ,borderRadius:"5px" ,color:"white" , backgroundColor:"var(--dark-blue)" , cursor:"pointer"  ,fontSize:"1.1rem" }}>GET STARTED</button>
                  
                </CardContent>
              </Card>

      </div>

      {/* Tags Section */}
      <div style={{marginTop:"20px"}}>
        <Typography variant="h5" gutterBottom style={{fontFamily:"var(--jost)"}}>
          Tags
        </Typography>
        <div style={{display:"flex"}}>
       
          <span className="tag" style={{padding:"5px 10px" , border:"2px solid var(--dark-blue)", color:"var(--dark-blue)" , borderRadius:"5px" , fontSize:"1rem" , margin:"5px"  ,cursor:"pointer"}}>Tag 1</span>
          <span className="tag" style={{padding:"5px 10px" , border:"2px solid var(--dark-blue)", color:"var(--dark-blue)" , borderRadius:"5px" , fontSize:"1rem" , margin:"5px"  ,cursor:"pointer"}}>Tag 1</span>
          <span className="tag" style={{padding:"5px 10px" , border:"2px solid var(--dark-blue)", color:"var(--dark-blue)" , borderRadius:"5px" , fontSize:"1rem" , margin:"5px"  ,cursor:"pointer"}}>Tag 1</span>
          <span className="tag" style={{padding:"5px 10px" , border:"2px solid var(--dark-blue)", color:"var(--dark-blue)" , borderRadius:"5px" , fontSize:"1rem" , margin:"5px"  ,cursor:"pointer"}}>Tag 1</span>
       
        </div>
      </div>
    </div>


    </div>
  );
};

export default MyComponent;
