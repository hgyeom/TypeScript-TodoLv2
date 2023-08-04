import React from "react";
import { removeTodo, toggleTodo } from "redux/modules/todos";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "redux/config/configStore";
import { useNavigate } from "react-router-dom";
import * as S from "./Styled.Todo";

interface TodoProps {
  isDone: boolean;
}

const Todo = ({ isDone }: TodoProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state: RootState) => state.todos.todos);
  const todos = data.filter((todo) => todo.isDone === isDone);

  if (!todos) {
    return <div>로딩중입니다.</div>;
  }

  const handleToggleTodo = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = (id: string) => {
    const isRemove = window.confirm("정말 삭제하시겠습니까?");
    if (isRemove === true) {
      dispatch(removeTodo(id));
    }
  };

  const goToDetailPage = (id: string) => {
    navigate(`details/${id}`);
  };

  return (
    <S.TodoContainer>
      <S.TodoInfo>{isDone ? "Done" : "Work"}</S.TodoInfo>
      <S.TodoList>
        {todos.map((todo) => (
          <S.TodoItem key={todo.id}>
            <h2 onClick={() => goToDetailPage(todo.id)}>{todo.title}</h2>
            <div>
              <span onClick={() => handleToggleTodo(todo.id)}>&</span>
              <span onClick={() => handleRemoveTodo(todo.id)}>X</span>
            </div>
          </S.TodoItem>
        ))}
      </S.TodoList>
    </S.TodoContainer>
  );
};

export default Todo;
