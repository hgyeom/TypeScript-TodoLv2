import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { readTodo } from "redux/modules/todo";
import { styled } from "styled-components";
import { RootState } from "redux/config/configStore";

// styled
const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const DetailFlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DetailBox = styled.div`
  border: 1px solid black;
  width: 600px;
`;

const DetailPtag = styled.p`
  margin-left: 10px;
`;

const MoveHomeButton = styled.button`
  margin: 10px 10px 0px 0px;
  height: 30px;
`;

const DetailH2 = styled.h2`
  margin-left: 10px;
`;

function Detail() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  if (id) {
    dispatch(readTodo(id));
  }

  const todo = useSelector((state: RootState) => {
    return state.todos.todo;
  });

  return (
    <DetailContainer>
      <DetailBox>
        <DetailFlexDiv>
          <DetailPtag>{todo?.id.substring(0, 5)}</DetailPtag>
          <MoveHomeButton
            onClick={() => {
              navigate("/");
            }}
          >
            이전
          </MoveHomeButton>
        </DetailFlexDiv>
        <DetailH2>{todo?.title}</DetailH2>
        <DetailPtag>{todo?.body}</DetailPtag>
      </DetailBox>
    </DetailContainer>
  );
}

export default Detail;
