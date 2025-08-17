import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Typography,
  Alert,
  MenuItem,
} from '@mui/material';
import { useAuth } from '../auth/AuthProvider';

const LoginModal = ({ open, onClose, mode = 'login' }) => {
  const [view, setView] = useState(mode);
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    role: 'lector',
    currentPassword: '',
    newPassword: '',
  });
  const [message, setMessage] = useState(null);
  const { login, loginWithGoogle, register, changePassword, requestPasswordReset } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const res = await login(form.email, form.password);
    if (res.success) {
      setMessage({ type: 'success', text: 'Inicio de sesión exitoso' });
      onClose();
    } else {
      setMessage({ type: 'error', text: res.message });
    }
  };

  const handleRegister = async () => {
    if (form.password !== form.confirmPassword) {
      setMessage({ type: 'error', text: 'Las contraseñas no coinciden' });
      return;
    }
    const res = await register(form.email, form.password, form.role);
    if (res.success) {
      setMessage({ type: 'success', text: 'Registro completado' });
      setView('login');
    } else {
      setMessage({ type: 'error', text: res.message });
    }
  };

  const handleChangePassword = async () => {
    try {
      await changePassword(form.currentPassword, form.newPassword);
      setMessage({ type: 'success', text: 'Contraseña actualizada' });
    } catch (err) {
      setMessage({ type: 'error', text: err.message });
    }
  };

  const handleForgot = async () => {
    try {
      await requestPasswordReset(form.email);
      setMessage({ type: 'success', text: 'Correo enviado' });
      setView('login');
    } catch (err) {
      setMessage({ type: 'error', text: err.message });
    }
  };

  const resetMessage = () => setMessage(null);

  const renderLogin = () => (
    <>
      <TextField margin="dense" label="Email" name="email" fullWidth value={form.email} onChange={handleChange} />
      <TextField
        margin="dense"
        label="Contraseña"
        name="password"
        type="password"
        fullWidth
        value={form.password}
        onChange={handleChange}
      />
      <Button fullWidth variant="contained" onClick={handleLogin} sx={{ mt: 2 }}>
        Ingresar
      </Button>
      <Button fullWidth onClick={loginWithGoogle} sx={{ mt: 1 }}>
        Ingresar con Google
      </Button>
      <Typography align="center" sx={{ mt: 2 }}>
        <Button onClick={() => { resetMessage(); setView('register'); }}>Crear cuenta</Button>
        {' | '}
        <Button onClick={() => { resetMessage(); setView('forgot'); }}>Olvidé mi contraseña</Button>
      </Typography>
    </>
  );

  const renderRegister = () => (
    <>
      <TextField margin="dense" label="Email" name="email" fullWidth value={form.email} onChange={handleChange} />
      <TextField
        margin="dense"
        label="Contraseña"
        name="password"
        type="password"
        fullWidth
        value={form.password}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        label="Confirmar contraseña"
        name="confirmPassword"
        type="password"
        fullWidth
        value={form.confirmPassword}
        onChange={handleChange}
      />
      <TextField select margin="dense" label="Rol" name="role" fullWidth value={form.role} onChange={handleChange}>
        <MenuItem value="paciente">Paciente</MenuItem>
        <MenuItem value="lector">Lector</MenuItem>
      </TextField>
      <Button fullWidth variant="contained" onClick={handleRegister} sx={{ mt: 2 }}>
        Registrarse
      </Button>
      <Typography align="center" sx={{ mt: 2 }}>
        <Button onClick={() => { resetMessage(); setView('login'); }}>¿Ya tienes cuenta? Inicia sesión</Button>
      </Typography>
    </>
  );

  const renderForgot = () => (
    <>
      <TextField margin="dense" label="Email" name="email" fullWidth value={form.email} onChange={handleChange} />
      <Button fullWidth variant="contained" onClick={handleForgot} sx={{ mt: 2 }}>
        Enviar correo
      </Button>
      <Typography align="center" sx={{ mt: 2 }}>
        <Button onClick={() => { resetMessage(); setView('login'); }}>Volver</Button>
      </Typography>
    </>
  );

  const renderChange = () => (
    <>
      <TextField
        margin="dense"
        label="Contraseña actual"
        name="currentPassword"
        type="password"
        fullWidth
        value={form.currentPassword}
        onChange={handleChange}
      />
      <TextField
        margin="dense"
        label="Nueva contraseña"
        name="newPassword"
        type="password"
        fullWidth
        value={form.newPassword}
        onChange={handleChange}
      />
      <Button fullWidth variant="contained" onClick={handleChangePassword} sx={{ mt: 2 }}>
        Cambiar contraseña
      </Button>
    </>
  );

  const titleMap = {
    login: 'Iniciar sesión',
    register: 'Registrarse',
    forgot: 'Recuperar contraseña',
    change: 'Cambiar contraseña',
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>{titleMap[view]}</DialogTitle>
      <DialogContent>
        {message && <Alert severity={message.type}>{message.text}</Alert>}
        {view === 'login' && renderLogin()}
        {view === 'register' && renderRegister()}
        {view === 'forgot' && renderForgot()}
        {view === 'change' && renderChange()}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginModal;
