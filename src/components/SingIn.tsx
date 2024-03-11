import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import style from "./style.module.css";
import "@fontsource/poppins";

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

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme({
  typography: {
    fontFamily: [
      "Poppins",
      "Co Headline Regular",
      "Co Headline Light",
      "Co Headline Bold",
    ].join(","),
  },
});

export default function SignIn() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container className={style.mainSignIn} component="main" maxWidth="xs">
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
            Iniciar Sesión
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              className={style.innerRegisterFont}
              margin="normal"
              required
              fullWidth
              id="cedula"
              label="Cédula"
              name="cedula"
              autoComplete="cedula"
              autoFocus
              size="small"
            />
            <TextField
              className={style.innerRegisterFont}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              size="small"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recuérdame"
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
                <Link className="link" to="/forgot-password">
                  ¿Olvidaste tu contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link className="link" to="/sign-in">
                  ¿No tienes cuenta?
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Copyright sx={{ mt: 10, mb: 1 }} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
