import { Typography, TextField, Grid, Card, CardContent } from "@mui/material";
// import { makeStyles } from '@mui/styles';

import blog_2 from '../../../public/assets/blog_2.jpg'

const MyComponent = () => {
  return (
    <div style={{ padding: "40px 40px", backgroundColor: "transparent" }}>
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
        <ul style={{listStyle:"none"}}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <li key={item}>
              <a href="#" style={{textDecoration:"none" , color:"black"}}>Category {item}</a>
            </li>
          ))}
        </ul>
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
  );
};

export default MyComponent;
