import { styled } from "styled-components";

export const TodoContainer = styled.div`
  margin: auto;
  text-align: center;
  max-width: 700px;
  margin: 60px auto 0 auto;
  padding: 0px 20px;
`;

export const TodoInfo = styled.div`
  padding: 7px;
  text-align: left;
  color: grey;
  font-size: 3rem;
`;

export const TodoList = styled.ul`
  text-align: left;
  padding: 7px;
`;

export const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  transition: all 100ms linear 100ms;
  position: relative;
  text-align: left;
  margin: 30px auto;
  padding: 7px;
  padding-right: 28px;
  border: solid 1px transparent;
  color: #6d639a;
  &:hover {
    cursor: pointer;
    border: solid 1px;
    span {
      visibility: visible;
      color: inherit;
    }
  }
  h2 {
    width: 90%;
  }
  span {
    transition: all 100ms linear 100ms;
    margin-left: 20px;
    visibility: hidden;
    &:hover {
      cursor: pointer;
    }
  }
`;
