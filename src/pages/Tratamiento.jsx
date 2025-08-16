import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Stack, Typography } from "@mui/material";
import "../styles/Tratamientos.css";
import { blogList } from "../helpers/BlogList";
import { tratamientosList } from "../helpers/TratamientosList";
import { isMobile } from "react-device-detect";
import BlogAsoc from "../components/BlogAsoc";
import WhatsAppButton from "../components/WhatsAppButton";

function Tratamiento(props) {
  const { ruta } = useParams();
  const tratamiento = tratamientosList.find((t) => t.ruta === ruta);

  if (!tratamiento) {
    return (
      <div style={{ marginTop: "6rem", textAlign: "center" }}>
        <Typography variant="h5" color="error">
          Tratamiento no encontrado
        </Typography>
      </div>
    );
  }

  return (
    <div
      style={{
        height: "100%",
        marginTop: isMobile ? "5rem" : "6rem",
        maxWidth: "100%",
      }}
    >
      <WhatsAppButton />
      <div>
        <div style={{ backgroundColor: "#45c07d", width: "100%" }}>
          <div
            style={{
              color: "#fafafa",
              width: isMobile ? "100%" : "75%",
              margin: "0 auto",
              padding: ".3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "auto",
                margin: "0 auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "75px",
                  height: "75px",
                  borderRadius: "50%",
                  boxShadow: "0 15px 35px rgba(8, 160, 105, 0.5)",
                }}
              >
                <img
                  style={{ width: "40px" }}
                  src={tratamiento.icon}
                  alt={tratamiento.name}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  ustifyContent: !isMobile ? "flex-start" : "center",
                  alignItems: "center",
                  margin: "0 auto",
                }}
              >
                <Typography
                  textTransform="uppercase"
                  sx={{
                    fontSize: isMobile ? "1.6rem" : "2.6rem",
                    textAlign: "start",
                    margin:isMobile ? "0 auto" : "2.5rem auto",
                    marginLeft: !isMobile ? "2rem" : ".5rem",
                  }}
                  variant="h2"
                >
                  {tratamiento.name}
                </Typography>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            width: isMobile ? "96%" : "60%",
            padding: ".3rem",
            margin: !isMobile ? "2.5rem auto" : ".5rem auto",
          }}
        >
          <Typography
            sx={{
              textAlign: "start",
              fontSize: !isMobile ? "16px" : "16px",
            }}
          >
            {tratamiento.resumen.split(".").map((linea, index) => (
              <React.Fragment key={index}>
                {linea}
                <br />
              </React.Fragment>
            ))}
          </Typography>
        </div>
      </div>
      <div
        style={{
          height: "100%",
          width: isMobile ? "96%" : "60%",
          margin: isMobile ? "0 auto" : "2rem auto",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: isMobile ? "1rem" : "",
            fontWeight: 700,
            marginBottom: isMobile ? "1rem":"2rem",
            textAlign: isMobile ? "center" : "start",
          }}
        >
          Encuentra más información relativa a este tratamiento en nuestro blog
          odotológico:
        </Typography>

        <Stack
          sx={{
            flexDirection: !isMobile ? "row" : "column",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          {tratamiento.blogs.map((id) => {
            const cardInfo = blogList[id]; // Obtener la información correspondiente a cada ID
            return <BlogAsoc key={id} blog={cardInfo} />;
          })}
        </Stack>
      </div>
    </div>
  );
}

Tratamiento.propTypes = {};

export default Tratamiento;
