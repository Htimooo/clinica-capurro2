import React from "react";
import PropTypes from "prop-types";
import { isMobile } from "react-device-detect";
import {
  Paper,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import {useNavigate} from 'react-router-dom';

const BlogItem = (props) => {
  const { blog} = props;
  const navigate = useNavigate();
  return (
    <>
      <Card sx={{ maxWidth: isMobile ? '100%' : '300px', height: isMobile ? '': '350px',   display:'flex', flexDirection: 'column', justifyContent:'space-between', marginBottom:'.3rem' }}>
        <CardMedia component="img" alt={blog.title} height="140" image={blog.foto} />
        <CardContent sx={{textAlign:'initial'}}>
          <Typography gutterBottom variant="h6"  sx={{fontSize: isMobile ? '': '1.1rem', lineHeight: isMobile ? '1rem': '1.3rem'}}component="div">
            {blog.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {blog.estracto}
          </Typography> 
        </CardContent>
        <CardActions>
          {/* <Button size="small">Compartir</Button> */}
          <Button variant="contained" onClick={()=>{ navigate('/blog/'+blog.ruta)}} sx={{backgroundColor:'#45c07d'}} size="small">Ver</Button>
        </CardActions>
      </Card>
    </>
  );
};

BlogItem.propTypes = {};

export default BlogItem;
