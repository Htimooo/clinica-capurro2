import React from "react";
import PropTypes from "prop-types";
import foto from "../assets/perfil.jpeg";
import "../styles/Perfil.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Typography } from "@mui/material";
import { isMobile } from "react-device-detect";

const Perfil = (props) => {
  return (
    <div className="perfil">
      <Typography textTransform="uppercase" variant="h2" sx={{ fontSize: "2rem", margin: "1rem 0" }}>
        {" "}
        Profesional
      </Typography>
      <div style={{ alignItems: isMobile ?'center':'flex-start'}} className="contenido-perfil">
        <div /* className="foto" */>
          <img src={foto}style={{maxWidth:'250px', marginTop: !isMobile ? '2rem': '0', borderRadius:'50%'}} alt="Inés Alvarez" />
          <Typography variant="h4" sx={{fontSize:isMobile ? '24px' : '32px'}}> Dra. Inés Alvarez</Typography>
          <LinkedInIcon />
          <InstagramIcon />
        </div>
        <div className="texto">
          {/* <h4> Dra: Inés Alvarez</h4> */}
          <p
            style={{
              display: "inline-flex",
              alignItems: "flex-start",
              textAlign: isMobile ? "start" : "center",
            }}
          >
            <ArrowRightIcon /> Docente de ortodoncia y ortopedia DMF - UDELAR
          </p>
          <p
            style={{
              display: "inline-flex",
              alignItems: "flex-start",
              textAlign: isMobile ? "start" : "center",
            }}
          >
            <ArrowRightIcon /> Cursando especialidad en ortodoncia y ortopedia DMF.
          </p>
          <p
            style={{
              display: "inline-flex",
              alignItems: "flex-start",
              textAlign: isMobile ? "start" : "center",
            }}
          >
            <ArrowRightIcon />
            Egresada de la facultad de odontología, Inés acumula más de diez
            años de experiencia ayudando y asesorando a sus pacientes.
            temporibus dolore cumque!
          </p>
        </div>
      </div>
    </div>
  );
};

Perfil.propTypes = {};

export default Perfil;
