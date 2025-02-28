import styled from "styled-components";
import { darken, lighten } from "polished";

export const RegisterContainer = styled.div`
  width: 512px;
  height: 768px;
  background: rgb(255, 255, 255, 0.5);
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.06);
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  margin-top: 50px;
  padding: 60px 20px;
  padding-bottom: 60px;
`;

export const RegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 500px;
`;

export const InputBox = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 78%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  &:focus {
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  }
`;

export const ButtonBox = styled.button`
  padding: 12px;
  border-radius: 4px;
  border: none;
  width: 78%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  background: black;
  color: white;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  &:hover {
    background: ${lighten(0.2, "black")};
    cursor: pointer;
  }
  &:active {
    background: ${darken(0.1, "black")};
    cursor: pointer;
  }
`;
