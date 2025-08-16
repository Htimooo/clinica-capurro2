import React from "react";
import PropTypes from "prop-types";
import "../styles/Home.css";
import Tratamiento from "../components/Tratamientos";
import Perfil from "../components/Perfil";
import AntesDespues from "../components/AntesDespues";
import Blog from "../components/Blog";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Box, Typography } from "@mui/material";
import { isMobile } from "react-device-detect";
import WhatsAppButton from "../components/WhatsAppButton";

function Home(props) {
  return (
    <div className="home">
      <WhatsAppButton />
      <div className="portada">
        <div className="overlay" />

        <Box
          sx={{
            zIndex: 100,
            maxWidth: "96%",
            margin: "0 auto",
            marginTop: "8rem",
          }}
        >
          <Typography
            variant="h1"
            textTransform="uppercase"
            sx={{
              fontSize: isMobile ? "32px" : "80px",
              margin: "0.5rem",
            }}
          >
            {" "}
            Clínica dental
          </Typography>

          <Typography
          variant="h3"
           textTransform="uppercase"
            sx={{
              fontSize: isMobile ? "20px" : "30px",
              margin: "0rem auto",
            }}
          >
            Profesionalismo en tratamientos odontológicos para niños y adultos
          </Typography>
        </Box>

        {isMobile ? (
          <Box sx={{ position: "absolute", bottom: "6rem", zIndex: 100 }}>
            <Box
              sx={{
                border: "solid 3px white",
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                padding: ".5rem",
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  padding: ".5rem",
                  alignItems: "center",
                }}
              >
                {" "}
                <PhoneIphoneOutlinedIcon />{" "}
                <Typography variant="h6"> 099 401 776 </Typography>{" "}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  padding: ".5rem",
                  alignItems: "center",
                }}
              >
                {" "}
                <LocationOnOutlinedIcon />{" "}
                <Typography variant="h6">
                  {" "}
                  Rivera 2590 apto 303 {" "}
                </Typography>{" "}
              </Box>
            </Box>
          </Box>
        ) : (
          <Box sx={{ position: "absolute", bottom: "3rem", zIndex: 100 }}>
            <Box
              sx={{
                display: "flex",
                padding: ".5rem",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-around",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  border: "solid 3px white",
                  borderRadius: 2,
                  padding: ".5rem",
                  alignItems: "center",
                }}
              >
                {" "}
                <PhoneIphoneOutlinedIcon />{" "}
                <Typography variant="h6"> 099 401 776 </Typography>{" "}
              </Box>
              <Box
                sx={{
                  border: "solid 3px white",
                  borderRadius: 2,
                  display: "flex",
                  padding: ".5rem",
                  alignItems: "center",
                }}
              >
                {" "}
                <LocationOnOutlinedIcon />{" "}
                <Typography variant="h6">
                  {" "}
                  Pablo Galarza 3629 apto 205{" "}
                </Typography>{" "}
              </Box>
            </Box>
          </Box>
        )}
      </div>
      <div>
        {" "}
        <Tratamiento />
        <Perfil />
        <Blog />
        <AntesDespues />
      </div>
    </div>
  );
}

Home.propTypes = {};

export default Home;
