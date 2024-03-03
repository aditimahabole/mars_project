import { useState } from 'react';
import { Card, CardContent, Typography, Pagination, Grid, Button } from '@mui/material';
import './BlogPage.css';
import blog_banner from '../../../public/assets/blog_1.jpg';

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
      <Grid container spacing={2}>
        {slicedData.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.id} style={{padding:"20px"}}>
            <Card style={{ height: '100%' }}>
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
      </Grid>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handleChange}
        style={{ marginTop: '20px', textAlign: 'center' }}
      />
    </div>
  );
};

export default MyComponent;
