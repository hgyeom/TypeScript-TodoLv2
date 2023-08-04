import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./Styled.Detail";
import { useSelector } from "react-redux";
import { RootState } from "redux/config/configStore";
const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const todos = useSelector((state: RootState) => state.todos.todos);
  const todo = todos.filter((todo) => todo.id === id)[0];
  if (!todo) {
    return <div>로딩중입니다.</div>;
  }
  return (
    <S.DetailContainer>
      <S.DetailItem>
        <h1>{todo.title}</h1>
        <span>{todo.body}</span>
        <S.Button onClick={() => navigate("/")}>돌아가기</S.Button>
      </S.DetailItem>
    </S.DetailContainer>
  );
};

export default Detail;
