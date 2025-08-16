import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  Button,
  Typography,
  CircularProgress,
  Stack,
} from "@mui/material";
import { isMobile } from "react-device-detect";
import axios from "axios";
import Alerta from "./Alerta";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredContact: "phone",
  });

  // Cargar reCAPTCHA v3
  useEffect(() => {
    let script;

    if (!window.grecaptcha) {
      script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.REACT_APP_RECAPTCHA_SITE_KEY}`;
      script.async = true;
      script.defer = true;

      script.onload = () => {
        setRecaptchaLoaded(true);
        console.log("reCAPTCHA cargado correctamente");
      };

      script.onerror = () => {
        console.error("Error al cargar reCAPTCHA");
        setSubmitError("Error al cargar el sistema de verificación");
      };

      document.body.appendChild(script);
    } else {
      setRecaptchaLoaded(true);
    }

    return () => {
      // Limpieza más segura
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(false);

    // Validación básica de campos
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitError("Por favor complete todos los campos obligatorios");
      return;
    }

    if (!recaptchaLoaded) {
      setSubmitError(
        "El sistema de verificación no está listo. Por favor intente nuevamente."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      // Obtener token de reCAPTCHA
      const token = await window.grecaptcha.execute(
        process.env.REACT_APP_RECAPTCHA_SITE_KEY,
        { action: "submit" }
      );

      // Enviar datos al backend
      const response = await axios.post(
        process.env.REACT_APP_API_ENDPOINT,
        {
          ...formData,
          recaptchaToken: token,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          timeout: 10000, // 10 segundos de timeout
        }
      );

      if (response.data.success) {
        setSubmitSuccess(true);
        // Resetear formulario
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          preferredContact: "phone",
        });
      } else {
        throw new Error(response.data.message || "Error en el servidor");
      }
    } catch (error) {
      console.error("Error al enviar el formulario:", error);

      let errorMessage = "Error al enviar el formulario";
      if (error.response) {
        // Error de respuesta del servidor
        errorMessage = error.response.data?.message || errorMessage;
      } else if (error.request) {
        // Error de conexión
        errorMessage = "No se pudo conectar con el servidor";
      }

      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{
        maxWidth: "60rem",
        width: isMobile ? "97%" : "100%",
        margin: isMobile ?  "1rem auto" : "2rem auto",
        padding: isMobile ? "1rem 0" : "2rem 1rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        border: isMobile ? "none" : "1px solid #45c07d",
        borderRadius: "4px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      <Typography
        variant="h4"
        id="contacto"
        sx={{
          textAlign: "center",
          marginBottom: "1.5rem",
          textTransform: "uppercase",
          fontSize: isMobile ? "1.8rem" : "2.2rem",
          color: "#000",
        }}
      >
        Formulario de Contacto
      </Typography>

      <TextField
        label="Nombre"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
        error={submitError && !formData.name}
        helperText={
          submitError && !formData.name ? "Este campo es obligatorio" : ""
        }
      />

      <TextField
        label="Correo Electrónico"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        required
        fullWidth
        margin="normal"
        error={submitError && !formData.email}
        helperText={
          submitError && !formData.email ? "Este campo es obligatorio" : ""
        }
      />

      <TextField
        label="Teléfono"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />

      <TextField
        label="Mensaje"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        multiline
        rows={4}
        fullWidth
        margin="normal"
        error={submitError && !formData.message}
        helperText={
          submitError && !formData.message ? "Este campo es obligatorio" : ""
        }
      />
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <FormControl
          component="fieldset"
          sx={{ mt: 2, textAlign: "start", padding: ".3rem" }}
        >
          <FormLabel component="legend">Preferencia de contacto:</FormLabel>
          <RadioGroup
            row
            name="preferredContact"
            value={formData.preferredContact}
            onChange={handleChange}
          >
            <FormControlLabel
              value="phone"
              control={<Radio />}
              label="Teléfono"
            />
            <FormControlLabel value="email" control={<Radio />} label="Email" />
          </RadioGroup>
        </FormControl>
        {!recaptchaLoaded && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CircularProgress size={20} />
            <Typography variant="body2" color="text.secondary">
              Cargando sistema de verificación...
            </Typography>
          </Box>
        )}

        {submitError && <Alerta mensaje={submitError} color="error"></Alerta>}

        {submitSuccess && (
          <Alerta
            mensaje="¡Formulario enviado con éxito! Nos pondremos en contacto pronto."
            color="success"
          ></Alerta>
        )}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          /* disabled={isSubmitting || !recaptchaLoaded} */
          sx={{
            alignSelf: "center",
            padding: "0.8rem 2rem",
            mt: 3,
            width: "auto",
            backgroundColor: "#45c07d"
          }}
          startIcon={isSubmitting ? <CircularProgress size={24} /> : null}
        >
          {isSubmitting ? "Enviando..." : "Enviar"}
        </Button>
      </Stack>
    </Box>
  );
};

export default ContactForm;
