import { Typography, Grid, Stack, Button } from "@mui/material";
import PropTypes from "prop-types";
import { blogList } from "../helpers/BlogList";
import { useParams } from "react-router-dom";
import React from "react";
import image from "../assets/dent17.jpeg";
import { isMobile } from "react-device-detect";
import BlogAsoc from "../components/BlogAsoc";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton";

export const Articulo = (props) => {
  const { ruta } = useParams();

  const blog = blogList.find((b) => b.ruta === ruta);
  const navigate = useNavigate();

  if (!blog) {
    return (
      <div style={{ marginTop: "6rem", textAlign: "center" }}>
        <Typography variant="h5" color="error">
          Articulo no encontrado
        </Typography>
      </div>
    );
  }

  return (
    <>
      <WhatsAppButton />
      <div
        style={{
          marginTop: isMobile ? "5rem": '6rem',
          marginBottom: isMobile ? ".6rem" : "4rem",
          padding: isMobile ? ".5rem" : "2rem",
          backgroundColor: "#45c07d",
          color: "#fafafa",
        }}
      >
        <Typography
          sx={{ fontSize: isMobile ? "1.8rem" : "2.5rem" }}
          variant="h1"
           textTransform="uppercase"
        >
          {blog.title}
        </Typography>
      </div>
      <div
        style={{
          height: "100%",
          width: isMobile ? "100%" : "70%",
          margin: "0 auto",
        }}
      >
        <Grid container xs={12}>
          <Grid
            item
            xs={isMobile ? 12 : 6}
            sx={{ height: "20rem", marginBottom: isMobile ? "" : "2rem" }}
          >
            <div
              style={{
                width: "96%",
                height: "100% ",
                display: "flex",
                borderRadius: "4px",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                textAlign: " center",
                backgroundImage: `url(${blog.foto})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                color: " #f0f0f0",
                position: "relative",
                margin: "0 auto",
              }}
            ></div>
          </Grid>{" "}
          <Grid
            item
            xs={isMobile ? 12 : 6}
            sx={{ height: isMobile ? "auto" : "20rem" }}
          >
            {" "}
            <Typography
              sx={{
                fontSize: isMobile ? "1.4rem" : "1.6rem",
                fontStyle: "italic",
                fontWeight: 700,
              }}
              variant="h3"
            >
              {blog.estracto}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              height: "auto",
              margin: "0 auto",
              textAlign: isMobile ? "center" : "start",
            }}
          >
            {blog.contenido.map((section, index) => (
              <div key={index}>
                <h2>{section.subtitulo}</h2>
                {section.parrafos &&
                  section.parrafos.map((parrafo, pIndex) => (
                    <p key={pIndex}>{parrafo}</p>
                  ))}
                {section.secciones &&
                  section.secciones.map((subsection, sIndex) => (
                    <div
                      key={sIndex}
                      style={{
                        marginLeft: isMobile ? "auto" : "20px",
                        width: "96%",
                        marginRight: isMobile ? "auto" : "",
                        padding: ".5rem",
                      }}
                    >
                      <h3>{subsection.subtitulo}</h3>
                      {subsection.parrafos.map((parrafo, spIndex) => (
                        <p key={spIndex}>{parrafo}</p>
                      ))}
                    </div>
                  ))}
              </div>
            ))}
          </Grid>
        </Grid>
        <Grid container sx={{ width: "100%", margin: "0 auto" }} xs={12}>
          <Typography
            variant="h6"
            sx={{
              fontSize: isMobile ? "1rem" : "",
              fontWeight: 700,
              marginBottom: isMobile ? "1rem" : "2rem",
              textAlign: isMobile ? "center" : "start",
              marginLeft: ".3rem",
            }}
          >
            Otros artículos que pueden interesarte:
          </Typography>
          <Stack
            sx={{
              flexDirection: !isMobile ? "row" : "column",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "96%",
              margin: "0 auto",
            }}
          >
            {[1, 2, 3, 4].map((id) => {
              const cardInfo = blogList[id]; // Obtener la información correspondiente a cada ID
              return <BlogAsoc key={id} blog={cardInfo} />;
            })}
          </Stack>
          <div
            style={{
              marginTop: "1rem",
              width: isMobile ? "250px" : "1044px",
              height: "3rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: isMobile ? "2rem" : "4rem",
            }}
          >
            <Button
              sx={{ backgroundColor: "#45c07d" }}
              onClick={() => {
                navigate("/blog");
              }}
              variant="contained"
            >
              Volver al blog
            </Button>
          </div>
        </Grid>
      </div>
    </>
  );
};

Articulo.propTypes = {};

export default Articulo;
