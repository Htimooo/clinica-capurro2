import React from "react";
import PropTypes from "prop-types";
import { Paper, Typography } from "@mui/material";
import { isMobile } from "react-device-detect";
import {useNavigate} from 'react-router-dom';


const TratamientoItem = (props) => {
  const navigate = useNavigate();
  const { name, details, icon,id, ruta } = props;
  return (
    <Paper   
      sx={{
        display: "flex",
        flexDirection:'column',
        alignItems: "center",
        justifyContent: 'center',
        padding: "1rem",
        borderRadius:'4px',
      cursor:'pointer' ,
       height:'172px',
       width: !isMobile ? '172px': '96%', 
       /*  margin: '0 auto'  */
      }}
      onClick={()=>{ navigate('/tratamiento/'+ruta)}}
    >
     <div  style={{display: 'flex', alignItems: 'center', justifyContent:'center',width:'75px', height:'75px',margin: '.5rem auto',borderRadius:'50%',boxShadow: "0 15px 35px rgba(8, 160, 105, 0.2)" }}>
      <img style={{width:'40px'}} src= {icon} alt={name} />
      </div>
      <Typography sx={{fontWeight:700}} variant="h6">{name}</Typography>   


    </Paper>
  );
};

TratamientoItem.propTypes = {};

export default TratamientoItem;
