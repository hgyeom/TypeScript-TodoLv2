import React, { useState } from "react";
import * as S from "./Styled.Form";
const Form = () => {
  const [todoContent, setTodoContent] = useState("");

  const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoContent(e.target.value);
  };

  return (
    <S.Form onSubmit={(e: React.FormEvent) => e.preventDefault()}>
      <S.Input type="text" value={todoContent} onChange={handleTodoChange} />
      <S.Button>+</S.Button>
    </S.Form>
  );
};

export default Form;
