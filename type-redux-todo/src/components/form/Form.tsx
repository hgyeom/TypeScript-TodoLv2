import React, { useState } from "react";
import { addTodo } from "redux/modules/todos";
import { useDispatch } from "react-redux";
import * as S from "./Styled.Form";
import { Todo } from "model/todos";
import { v4 as uuid } from "uuid";

const Form = () => {
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todoTitle === "" || todoContent === "") {
      alert("제목이나 내용을 입력해주세요.");
      return false;
    }
    const todo: Todo = {
      id: uuid(),
      title: todoTitle,
      body: todoContent,
      isDone: false,
    };

    dispatch(addTodo(todo));
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoContent(e.target.value);
  };

  return (
    <S.Form onSubmit={handleFormSubmit}>
      <S.Input
        type="text"
        value={todoTitle}
        onChange={handleTitleChange}
        placeholder="제목"
      />
      <S.Input
        type="text"
        value={todoContent}
        onChange={handleContentChange}
        placeholder="내용"
      />
      <S.Button>+</S.Button>
    </S.Form>
  );
};

export default Form;
