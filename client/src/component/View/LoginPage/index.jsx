import React from "react";
import {
  LoginImg,
  LoginButton,
  LoginWrapper,
  LoginForm,
} from "./LoginComponents";

const LoginPage = () => {
  return (
    <LoginWrapper>
      <LoginForm>
        <LoginImg>Indian Pocker</LoginImg>
        <LoginButton>
          <a href="http://localhost:5000/login">Login</a>
        </LoginButton>
      </LoginForm>
    </LoginWrapper>
  );
};

export default LoginPage;
