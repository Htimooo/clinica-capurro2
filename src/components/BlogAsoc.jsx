import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import muestraTemporal from '../assets/dent1.jpeg';
import { isMobile } from "react-device-detect";
import {useNavigate} from 'react-router-dom';

export default function ImgMediaCard(props) {
  const { blog } = props;
  const navigate = useNavigate();
  return (
    <Card sx={{ width: 250, height:125, marginRight: !isMobile ?'.5rem': '', marginTop: isMobile ?'.5rem': ''}}>
   <Box sx={{ position: 'relative', height: '120px' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="120"
        image={blog.foto} 
      />
     
      {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay oscuro
            zIndex: 1,
          }}
        />
        </Box>
      <CardContent sx={{padding:0, backgroundColor:'', marginTop: '-100px',minHeight:'75px', zIndex:2, position:'relative', color:'#fafafa'}}>
        <Typography gutterBottom variant="body-1" textTransform="uppercase" sx={{ fontWeight:700}} component="div">
          {blog.title}
        </Typography>
             </CardContent>
      <CardActions sx={{padding:0, position:'relative', bottom:0,left:0,  zIndex:3,backgroundColor:'#fafafa'}}>
        <Button onClick={()=>{ navigate('/blog/'+blog.ruta)}} sx={{color:'#45c07d', borderColor:'#45c07d'}} size="small">Ver artículo de blog</Button>
        
      </CardActions>
   
    </Card>
  );
}
