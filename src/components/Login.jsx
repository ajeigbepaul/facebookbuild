import { Button } from "@mui/material";
import React from "react";
import "./Login.css";
import { signInwithgoogle } from "../firebase";

function Login() {
  const signIn = () => {
    signInwithgoogle();
  };
  return (
    <div className="login">
      <div className="login__image">
        <img src="facebook.png" alt="logo" />
        <h2>facebook.inc</h2>
      </div>
      <Button className="login__btn" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
