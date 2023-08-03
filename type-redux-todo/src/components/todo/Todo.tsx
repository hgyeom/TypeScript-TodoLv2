import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "redux/config/configStore";
import * as S from "./Styled.Todo";
import Form from "components/form/Form";

interface TodoProps {
  isDone: boolean;
}

const Todo = ({ isDone }: TodoProps) => {
  const data = useSelector((state: RootState) => state.todos);
  console.log(data);
  return <S.TodoContainer></S.TodoContainer>;
};

export default Todo;
