import React from "react";
import { Paper, Typography, Grid } from "@mui/material";
import { isMobile } from "react-device-detect";
import imag3 from "../assets/AD13.jpeg";
import imag1 from "../assets/AD11.jpeg";
import imag2 from "../assets/AD12.jpeg";
import imag4 from "../assets/AD21.jpeg";
import imag5 from "../assets/AD22.jpeg";
import imag6 from "../assets/AD31.jpeg";
import imag7 from "../assets/AD32.jpeg";

const AntesDespues = () => {
  return (
    <div>
     
      <>
        <Grid container sx={{ height: !isMobile ? "38rem" : "auto" }}>
          <Grid item sx={{ height: 'auto' }} xs={12}>
            <Typography
              variant="h2"
              textTransform="uppercase"
              sx={{ fontSize: "2rem", margin: !isMobile ? "2.5rem" : "1.5rem" }}
            >
              {" "}
              Antes y después
            </Typography>
          </Grid>
          <Grid
            item
            sx={{ flexFlow: 1, height: "auto" }}
            xs={!isMobile ? 6 : 12}
          >
            {" "}
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                width: !isMobile ? "94%" : '96%',
                margin: ".5rem auto",
                padding: !isMobile ? "1rem": '',
                backgroundColor: "white", // Color de fondo por defecto
                "&:hover": {
                  backgroundColor: "#342df2", // Color de fondo al pasar el ratón por encima
                },
                color: "black", // Color del texto por defecto
                "&:hover .content": {
                  color: "white", // Color del texto al pasar el ratón por encima
                },
              }}
              elevation={3}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: isMobile ? "column" : "row",
                }}
              >
                <div
                  className="content"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography>Antes</Typography>
                  <img
                    style={{
                      maxWidth: "96%",
                      maxHeight: !isMobile ? "7.5rem" : '',
                      margin: ".2rem auto",
                      borderRadius: "4px",
                    }}
                    src={imag1}
                    alt="antes1"
                  />
                </div>
                <div
                  className="content"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    margin: "0 auto",
                  }}
                >
                  <Typography>Durante</Typography>
                  <img
                    style={{
                      maxWidth: "96%",
                      maxHeight: !isMobile ? "7.5rem": '',
                      margin: ".2rem auto",
                      borderRadius: "4px",
                    }}
                    src={imag2}
                    alt="antes2"
                  />
                </div>
                <div
                  className="content"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography>Después</Typography>
                  <img
                    style={{
                      maxWidth: "96%",
                      maxHeight: !isMobile ? "7.5rem" : '',
                      margin: ".2rem auto",
                      borderRadius: "4px",
                    }}
                    src={imag3}
                    alt="antes3"
                  />
                </div>
              </div>
              <div style={{ marginTop: ".5rem" }} className="content">
                <Typography>
                  Proceso de corrección de dentición mediante colocación de
                  brackets
                </Typography>
              </div>
            </Paper>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                width: !isMobile ? "632px" : '96%',
                justifyContent: "space-between",
                margin: ".5rem auto",
                padding: !isMobile ? "1rem": '',
                backgroundColor: "white", // Color de fondo por defecto
                "&:hover": {
                  backgroundColor: "#342df2", // Color de fondo al pasar el ratón por encima
                },
                color: "black", // Color del texto por defecto
                "&:hover .content": {
                  color: "white", // Color del texto al pasar el ratón por encima
                },
              }}
              elevation={3}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: isMobile ? "column" : "row",
                }}
              >
                <div
                  className="content"
                  style={{
                    display: "flex",
                    flexDirection: "column" ,
                    alignItems: "center",
                  }}
                >
                  <Typography>Antes</Typography>
                  <img
                    style={{
                      maxWidth: "96%",
                      maxHeight: !isMobile ? "10rem" : '',
                      margin: ".2rem auto",
                      borderRadius: "4px",
                    }}
                    src={imag4}
                    alt="antes4"
                  />
                </div>
                <div
                  className="content"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography>Después</Typography>
                  <img
                    style={{
                      maxWidth: "96%",
                      maxHeight: !isMobile ? "10rem" : '',
                      margin: ".2rem auto",
                      borderRadius: "4px",
                    }}
                    src={imag5}
                    alt="antes5"
                  />
                </div>
              </div>
              <div style={{ marginTop: ".5rem" }} className="content">
                <Typography>
                  Eliminación de caries en incisivos centrales
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={!isMobile ? 6 : 12}>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                width: !isMobile ?"400px" : '96%',
                padding: !isMobile ? "1rem": '',
                margin: ".5rem auto",
                backgroundColor: "white", // Color de fondo por defecto
                "&:hover": {
                  backgroundColor: "#342df2", // Color de fondo al pasar el ratón por encima
                },
                color: "black", // Color del texto por defecto
                "&:hover .content": {
                  color: "white", // Color del texto al pasar el ratón por encima
                },
              }}
              elevation={3}
            >
              <div
                className="content"
                style={{
                  display: "flex",
                  flexDirection: "column" ,
                  alignItems: "center",
                }}
              >
                <Typography>Antes</Typography>
                <img
                  style={{
                    maxWidth: "96%",
                    maxHeight: !isMobile ? "10rem" : '',
                    margin: ".2rem auto",
                    borderRadius: "4px",
                  }}
                  src={imag6}
                  alt="antes1"
                />
              </div>
              <div
                className="content"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography>Después</Typography>
                <img
                  style={{
                    maxWidth: "96%",
                    maxHeight: !isMobile ? "10rem" : '',
                    margin: ".2rem auto",
                    borderRadius: "4px",
                  }}
                  src={imag7}
                  alt="antes2"
                />
                <Typography>Corrección de mordida profunda</Typography>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </>
      {/*   )} */}
    </div>
  );
};

export default AntesDespues;
