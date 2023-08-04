import { styled } from "styled-components";

export const DetailContainer = styled.div`
  margin: auto;
  max-width: 700px;
  margin: 60px auto 0 auto;
  padding: 0px 20px;
`;

export const DetailItem = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  gap: 35px;
  h1 {
    font-size: 2rem;
  }
  span {
    font-size: 1.2rem;
    min-height: 300px;
  }
`;

export const Button = styled.button`
  border: solid 1px rgba(255, 117, 140);
  background-color: rgba(255, 117, 140, 0.8);
  cursor: pointer;
  width: 20%;
  padding: 7px 10px;
  min-width: 50px;
  transition: all 100ms linear 80ms;
  color: white;
  line-height: 1;
  font-size: 0.8rem;
  margin: 0 auto;
  &:hover,
  &:active {
    background-color: rgba(255, 117, 140, 1);
  }
`;
