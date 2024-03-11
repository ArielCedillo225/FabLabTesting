import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import style from "./style.module.css";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      <Link className="link" color="inherit" to="https://www.ucacue.edu.ec/">
        {"© "}
        {new Date().getFullYear()} | Universidad Católica de Cuenca
      </Link>
    </Typography>
  );
}

const defaultTheme = createTheme({
  typography: {
    fontFamily: [
      "Co Headline Regular",
      "Co Headline Light",
      "Co Headline Bold",
    ].join(","),
  },
});

export default function EmailVerification() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container
        className={style.mainEmailVerification}
        component="main"
        maxWidth="xs"
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>
            <Grid container spacing={1}>
              <Grid item xs={6} sx={{ textAlign: "right" }}>
                <img
                  className={style.logoSignInFablab}
                  src="../public/img/logo.jpg"
                ></img>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: "left" }}>
                <img
                  className={style.logoSignInUcacue}
                  src="../public/img/UcacueLogo.jpg"
                ></img>
              </Grid>
            </Grid>
          </Box>

          <Typography component="h1" variant="h5">
            Verificación de Email
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Typography
              component="h1"
              variant="body2"
              sx={{ textAlign: "justify", fontSize: "12px" }}
            >
              Hemos enviado un correo electrónico a tu email con un código de
              verificación, colócalo aquí para completar tu registro
            </Typography>

            <TextField
              className={style.innerRegisterFont}
              margin="normal"
              required
              id="codigoVerificacion"
              label="Código de Verificacion"
              name="codigoVerificacion"
              fullWidth
              autoFocus
              size="small"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar sesión
            </Button>
            <Grid container>
              <Grid item xs>
                <Link className="link" to="#">
                  Enviar correo nuevamente
                </Link>
              </Grid>
              <Grid item>
                <Link className="link" to="/sign-in">
                  Regresar
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Copyright sx={{ mt: 4, mb: 1 }} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
