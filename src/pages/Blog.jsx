import React from "react";
import { isMobile } from "react-device-detect";
import { Typography, Button, Box } from "@mui/material";
import { blogList } from "../helpers/BlogList";
import image from "../assets/dent18.jpeg";
import { useNavigate } from "react-router-dom";
import WhatsAppButton from "../components/WhatsAppButton";

const Blog = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{        
        marginTop: isMobile ? "5rem": "6rem",
        height: "100%",
      }}
    >
      <WhatsAppButton />
      <div
        style={{
          height: !isMobile ? "10rem" : "5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        {" "}
        <Typography variant="h1"  textTransform="uppercase" sx={{ fontSize: !isMobile ? "3rem" : "2rem" }}>
          Blog odontológico
        </Typography>{" "}
        <Typography
          variant="h6"
          sx={{ fontSize: !isMobile ? "2rem" : "1.2rem" }}
        >
          Información y consejos para tu salud dental
        </Typography>
      </div>
      <div
        style={{
          width: isMobile ? "90%" : "60%",
          margin: "0 auto",
          height: "100%",
        }}
      >
        {blogList.map((blog) => {
          return (
            <div
              style={{
                /*  height: !isMobile ? "10rem" : "7rem", */
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                alignItems: isMobile ? "flex-start" : "center",
                justifyContent: "space-between",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${blog.foto})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: isMobile ? "40%" : "75%",
                  height: isMobile ? "7rem" : "15rem",
                  borderRadius: "4px",
                  boxShadow: "0 15px 35px rgba(8, 160, 105, 0.2)",
                  position: "relative",
                }}
              >
                {/* Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay oscuro
                    zIndex: 100,
                  }}
                ></div>
              </div>

              <div
                style={{
                  backgroundColor: "#fafafa",
                  padding: "1rem",
                  width: isMobile ? "80%" : "75%",
                  height: "auto",
                  zIndex: 200,
                  marginLeft: isMobile ? "2rem" : "-8rem",
                  marginTop: isMobile ? "-1.5rem" : "0",
                  borderRadius: "4px",
                  boxShadow: "0 15px 35px rgba(8, 160, 105, 0.2)",
                }}
              >
                <Typography variant="h6" color="initial">
                  {blog.title}
                </Typography>
                <Typography variant="body1" color="initial">
                  {blog.estracto}
                </Typography>
                <Button
                  onClick={() => {
                    navigate("/blog/" + blog.ruta);
                  }}
                  sx={{
                    marginTop: "1rem",
                    color: "#45c07d",
                    borderColor: "#45c07d",
                  }}
                  variant="outlined"
                >
                  {" "}
                  Leer más
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
