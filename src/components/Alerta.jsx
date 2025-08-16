import * as React from 'react';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { Box, Fade } from '@mui/material';

export default function Alerta(props) {
  const { mensaje, color } = props;
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000); // 3 segundos

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <Fade in={visible}>
      <Box
        sx={{
          position: 'fixed',
          bottom: '3rem',
          right: '1rem',
          zIndex: 9999,
          minWidth: '300px',
        }}
      >
        <Alert icon={<CheckIcon fontSize="inherit" />} severity={color}>
          {mensaje}
        </Alert>
      </Box>
    </Fade>
  );
}