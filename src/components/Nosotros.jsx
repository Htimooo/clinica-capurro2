import React from "react";
import { Typography, Stack } from "@mui/material";
import { isMobile } from "react-device-detect";

const Nosotros = () => {
  return (
    <Stack sx={{ backgroundColor: "#45c07d", padding: "1rem", position: 'relative',zIndex:100 }}>

        <Stack sx={{maxWidth: '50rem', margin:'0 auto'}} >
      <Typography color="#ffffff" sx={{textAlign:  isMobile ? 'start':'center' , fontSize: isMobile ? '2rem':'3.5', padding: isMobile ? '1rem 0': '2rem 0'}} variant="h3">
        Bienvenido a Ecodental
      </Typography>
      <Typography sx={{textAlign: isMobile ? 'start':'center', padding: isMobile ? '1rem 0': '2rem 0' , paddingTop:'0'}} color="#ffffff" variant="body1">
        En Ecodental nos comprometemos a brindarte una experiencia dental
        excepcional. Nuestra clínica combina tecnología de vanguardia con un
        enfoque centrado en el bienestar del paciente para cuidar de ti y de tu
        salud bucodental de manera integral. Descubre una nueva forma de sonreír
        con Ecodental.
      </Typography>
    </Stack>
    </Stack>
  );
};

export default Nosotros;
