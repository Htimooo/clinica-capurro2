import React from "react";
import PropTypes from "prop-types";
import { Typography, Button } from "@mui/material";
import { blogList } from "../helpers/BlogList";
import BlogItem from "./BlogItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { isMobile } from "react-device-detect";
import {useNavigate} from 'react-router-dom';


function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", backgroundColor: "#b1dacb", borderRadius:'50%'}}
      onClick={onClick}
    />
  );
}

function Blog(props) {

  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 667,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div
      style={{
        backgroundColor: "#fafafa",
        width: "100%",
        
        minHeight: '500px',
        display: 'flex', 
        flexDirection:'column',
        justifyContent: 'space-between',
        paddingBottom:'1rem'
      }}
    >
      <div style={{ maxWidth:  "85%", margin: "1rem auto" }}>
        <Typography variant="h2" textTransform="uppercase" sx={{ fontSize: "2rem", margin: isMobile ? "1rem 0" :"2rem auto" }}>
          Blog odontológico
        </Typography>
        <div>
          <Slider {...settings}>
            {blogList.map((blog, idx) => (
              <BlogItem
              key={blog.id}
                id={idx}
                blog={blog}
              />
            ))}
          </Slider>
        </div>
      </div>
      <div style={{width:'85%',textAlign:'end', margin:'1.3rem auto'}}><Button onClick={()=>{ navigate('/blog')}} sx={{backgroundColor:'#45c07d'}} variant="contained"> Ver Blog</Button></div> 
    </div>
  );
}

Blog.propTypes = {};

export default Blog;
