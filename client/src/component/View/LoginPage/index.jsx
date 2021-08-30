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
        <LoginButton>LOGIN</LoginButton>
      </LoginForm>
    </LoginWrapper>
  );
};

export default LoginPage;
