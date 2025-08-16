import { Stack, Typography } from '@mui/material';
import React from 'react';
import { tratamientosList } from "../helpers/TratamientosList";
import "../styles/Tratamientos.css";
import TratamientoItem from './TratamientoItem';
import { isMobile } from 'react-device-detect';

const  Tratamientos =(props) => {

 

  return (
    <Stack id='tratamientos' sx={{padding:'.3rem', width:'(calc 100% - .8rem)', height:'100% ', maxWidth: '50rem', margin:'0 auto',position: 'relative',zIndex:100 }} >
        <Typography variant='h2'textTransform="uppercase" sx={{fontSize:'2rem', margin: isMobile ? '1rem 0':"2rem 0"}}>Nuestros Tratamientos</Typography>
        <div id='grilla'>
    {tratamientosList.map((tratamiento)=>{
        return <TratamientoItem  key={tratamiento.id} id={tratamiento.id} name={tratamiento.name} ruta={tratamiento.ruta} icon={tratamiento.icon} details={tratamiento.details} />

    })}
    </div>
    </Stack>
  )
}

tratamientosList.propTypes = {}

export default Tratamientos