
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import React from "react";
import { isMobile } from "react-device-detect";

const WsButton = (props) => {
  const {footer}=props
  return (
    <div
    style={{
      backgroundColor: !footer ? "#45c07d" : "" ,
      width: "auto",
      height: "3rem",
      padding: ".5rem",
      border: footer ? 'solid 2px #fafafa' : '',
      zIndex: 100,
      color: "#fafafa",
      borderRadius: "4px",
      boxShadow: !footer ? "2px 2px 3px 2px rgba(73, 73, 73, 0.75)" :'',
      marginTop: !isMobile ? "2rem" : ""
    }}
  >
    <a
      style={{
        color: "#fafafa",
        
        textDecoration: "none",
      }}
      href="https://api.whatsapp.com/send?phone=+59899401776"
      target="_blank" rel="noreferrer"
    >
      <div style={{ display: "flex", alignItems: "center", width:'100%', height:'100%'}}>
        <WhatsAppIcon style={{ fontSize:'36px', marginRight: ".5rem"}} />
        Agendar consulta
      </div>
    </a>
  </div>
  );
};

export default WsButton;
