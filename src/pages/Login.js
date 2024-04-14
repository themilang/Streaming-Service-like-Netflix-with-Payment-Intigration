import React, { useState } from "react";
import logo from "../assets/logo.png";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
function Copyright(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      This page is protected by Google reCAPTCHA to ensure you're not a bot.
      <a href="#">
        {" "}
        <span className="underline text-blue-500"> learn more </span>{" "}
      </a>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function Login(props) {
  const [email, setEmail] = useState(props.email);
  const [isValid, setIsValid] = useState(false);
  const defaultTheme = createTheme();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);

    console.log(email);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(event.target.value));
  };

  const handleSubmit = () => {
    console.log(email);
  };

  return (
    <div
      style={{
        backgroundImage: ` linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url("https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY-1200-80.jpg.webp")`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className=" ">
        <div className=" z-10 inset-0  sticky top-0">
          <div className={`h-16 flex justify-between`}>
            <div className="ml-8 ">
              <img className="w-48 mt-10 ml-16 " src={logo} alt="flix"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black mt-16 bg-transparent  backdrop-brightness-50 w-96 m-auto items-center flex justify-center text-white">
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1 className="text-3xl  font-semibold  -ml-48">Sign In</h1>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  InputProps={{
                    style: {
                      color: "white",
                    },
                  }}
                  InputLabelProps={{ style: { color: "white" } }}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                
                  InputProps={{
                    style: {
                      color: "white",
                      
                    },
                  }}
                  InputLabelProps={{ style: { color: "white" } }}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  style={{ backgroundColor: "red" }}
                >
                  Sign In
                </Button>
                <h1 className="text-center text-gray-400">OR</h1>
                <Button
                  fullWidth
                  variant="outlined"
                  style={{
                    backgroundColor: "black",
                    borderColor: "gray",
                    color: "white",
                  }}
                  sx={{ mt: 3, mb: 2 }}
                >
                  <p style={{ textTransform: "lowercase" }}>
                    Use a Sign-In Code
                  </p>
                </Button>
              <div className="mt-2">
              <Link 
                  style={{ textAlign: "center", display: "block",color:"white" }}
                  href="#"
                  variant="body2"
                >
                  Forgot password?
                </Link>
                
                </div> 

                <div className="mt-4 mb-3">
                <FormControlLabel
                  style={{
                    textAlign: "left",
                    display: "block",
                    alignItems: "left",
                  }}
                  control={<Checkbox value="remember" style={{color:"white"}} />}
                  label="Remember me"
                />
              </div>
                  
             
                    <Link
                      href="#"
                      variant="body2"
                      style={{
                        color: "white",
                        textAlign: "left",
                        display: "block",
                        alignItems: "left",
                      }}
                    >
                      New to Netflix?{" "}
                      <span className="font-bold"> Sign up now. </span>
                    </Link>
             
                
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Login;
