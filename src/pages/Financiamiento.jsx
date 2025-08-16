import React from "react";
import PropTypes from "prop-types";
import { Paper, Typography, Grid } from "@mui/material";
import { isMobile } from "react-device-detect";
import cash from "../assets/cash.png";
import transferencia from "../assets/transferencia.png";
import mercadopago from "../assets/mercadopago.png";
import WhatsAppButton from "../components/WhatsAppButton";

const Financiamiento = (props) => {
  return (
    <div
      style={{
        height: !isMobile ? "calc(100vh - 12rem)" : "calc(100% - 3rem)",
        marginTop: isMobile ? "5rem" : "6rem",
      }}
    >
      {" "}
      <WhatsAppButton />
      <div style={{ margin: isMobile ? ".6rem" :"2rem" }}>
        <Typography
          variant="h3"
           textTransform="uppercase"
          sx={{ margin: "0 1rem", fontSize: isMobile ? "2rem" : "3rem" }}
        >
          Financiamiento a tu medida
        </Typography>
        <Typography  variant="h6">
          Ajustamos el plan de tratamiento a la medida de tus posibilidades y te
          damos amplias formas de pago
        </Typography>
      </div>
      <div
        style={{
          maxWidth: isMobile ? "96%" : "75%",
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "20rem",
            width: !isMobile ? "20rem" : "100%",
            margin: ".5rem",
            alignItems: "center",
            justifyContent: "center",
          }}
          elevation={3}
        >
          {" "}
          <img
            style={{
              maxWidth: "96%",
              margin: ".2rem auto",
              borderRadius: "4px",
            }}
            src={cash}
            alt="cash"
          />
          <Typography variant="body1" sx={{ margin: "2rem" }}>
            Cuotas Fijas En Efectivo
          </Typography>
        </Paper>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "20rem",
            width: !isMobile ? "20rem" : "100%",
            margin: ".5rem",
            alignItems: "center",
            justifyContent: "center",
          }}
          elevation={3}
        >
          {" "}
          <img
            style={{
              maxWidth: "96%",
              margin: ".2rem auto",
              borderRadius: "4px",
            }}
            src={transferencia}
            alt="transferencia"
          />
          <Typography variant="body1" sx={{ margin: "2rem" }}>
            Trasferencia Bancaria
          </Typography>
        </Paper>
        <Paper
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "20rem",
            width: !isMobile ? "20rem" : "100%",
            margin: ".5rem",
          }}
          elevation={3}
        >
          {" "}
          <img
            style={{
              maxWidth: "96%",
              margin: ".2rem auto",
              borderRadius: "4px",
            }}
            src={mercadopago}
            alt="mercadopago"
          />
          <Typography variant="body1" sx={{ margin: "2rem" }}>
            Mercado Pago
          </Typography>
        </Paper>
      </div>
    </div>
  );
};

Financiamiento.propTypes = {};

export default Financiamiento;
