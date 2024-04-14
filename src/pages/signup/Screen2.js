import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import ScreenNav from "./ScreenNav";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Screen2() {
  const [email, setEmail] = useState("");
  const [password,setPassword]=useState("");
 const navigate=useNavigate();
  useEffect(() => {
    // Retrieve email from local storage
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

const handleaxiosSignup= async ()=>{
  try {
    const response= await fetch("http://localhost:8085/api/user/register",{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify({
      email:email,
      password:password,
      conf_password:password,
      fullName:email,

     
    })
   

  })
  
const data= await response.json();

console.log(data)  
console.log(data.message)

if (response.status==200){
navigate('/signup/plans?')

}
  
  } catch (error) {
    console.log(error,"error")
    
  }
  

}


  const handlePassword=(event)=>{

    setPassword(event.target.value)
    console.log(password)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('email:',email,"password:",password)
    handleaxiosSignup();
    
  };




  return (
    <div className="">
      <ScreenNav rightSide='Sign In' />
      <div className="flex items-center justify-center ">
        <div className="max-w-lg px-4">
          <p className="mt-16 text-sm">STEP 1 OF 3</p>
          <h1 className="text-3xl font-bold">
            Create a password to start
            <br /> your membership
          </h1>
          <p className="mt-12 text-xl">
            Just a few more steps and you're done! <br />
            We hate paperwork, too.
          </p>

          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              InputProps={{
                style: {
                  color: "black",
                },
              }}
              InputLabelProps={{ style: { color: "black" } }}
              margin="normal"
              required
              fullWidth
              id="email"
              value={email}
              onChange={handleEmailChange}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              InputProps={{
                style: {
                  color: "black",
                },
              }}
              InputLabelProps={{ style: { color: "black" } }}
              margin="normal"
              required
              fullWidth
              value={password}
              onChange={handlePassword}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              style={{
                textAlign: "left",
                display: "block",
                alignItems: "left",
              }}
              control={<Checkbox value="remember" style={{ color: "black" }} />}
              label="Please do not send me Netflix special offers."
            />
            <Button
              fullWidth
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ backgroundColor: "red" }}
            >
              Next
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Screen2;
