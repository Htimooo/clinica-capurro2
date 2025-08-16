import React from "react";
import "../styles/Footer.css";
import { Box, Typography } from "@mui/material";
import Mapa from "../components/Mapa";
import { isMobile } from "react-device-detect";

function Footer(props) {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <div style={{ width: "100%", backgroundColor: "#45c07d", padding:'1rem 0' }}>
        <Typography
          variant="h5"
          sx={{ color: "#fafafa", margin: "1.5rem", marginTop: "1rem" }}
        >
          Información de Contacto
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Mapa />
        </div>

        <div className="footer">
          <div>
            <p>&copy; {currentYear} econdental.uy</p>
          </div>
        </div>

        <div style={{ padding: ".5rem" }}>
          <p style={{ fonSize: "8px", color: "#fafafa", textAlign: "center" }}>
            Sitio protegido por reCAPTCHA se aplican
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "0 .15rem", color: "#fafafa" }}
            >
              Política de Privacidad
            </a>
            y
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              style={{ margin: "0 .15rem", color: "#fafafa" }}
            >
              Términos de Servicio
            </a>
            de Google.
          </p>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {};

export default Footer;
