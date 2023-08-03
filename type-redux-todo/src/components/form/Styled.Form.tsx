import { styled } from "styled-components";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Input = styled.input`
  background-color: transparent;
  border: solid 1px;
  padding: 10px;
  border-right: none;
  width: 20%;
  color: black;
  height: 40px;
  border-color: rgba(255, 117, 140);
  outline: none;
`;

export const Button = styled.button`
  border: solid 1px rgba(255, 117, 140);
  background-color: rgba(255, 117, 140, 0.8);
  cursor: pointer;
  width: 5%;
  padding: 7px 10px;
  min-width: 20px;
  transition: all 100ms linear 80ms;
  color: white;
  line-height: 1;
  font-size: 18px;
  &:hover,
  &:active {
    background-color: rgba(255, 117, 140, 1);
  }
`;
