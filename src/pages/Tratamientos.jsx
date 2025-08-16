import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@mui/material";
import Tratamiento from "../components/Tratamientos";
import { isMobile } from "react-device-detect";
import WhatsAppButton from "../components/WhatsAppButton";

const Tratamientos = (props) => {
  return (
    <div style={{ height: !isMobile ? "calc(100vh - 6rem)": "calc(100% - 3rem)", marginTop: "6rem" }}>
      <WhatsAppButton />
      <Tratamiento />
    </div>
  );
};

Tratamiento.propTypes = {};

export default Tratamientos;
