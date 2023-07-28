import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { readTodo } from "redux/modules/todo";
import { styled } from "styled-components";

// css로 관리하는게 더 깔끔한듯 하여 이곳만 styled components를 적용했습니다.
// css로 분리하고, 중복되는 부분만 styled components를 사용하는게 더 좋다고 생각되는데, 맞는 생각일지 궁금합니다.
// styled
const DetailFlexDiv = styled.div`
  display: flex;
`;
// justify-content: ${(props) => props.justifycontent};
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
  const id = useParams().id;

  dispatch(readTodo(id));
  const todo: any = useSelector<any>((state) => state.todos.todo);

  return (
    <DetailFlexDiv>
      {/* <DetailFlexDiv justifycontent="center"> */}
      <DetailBox>
        <DetailFlexDiv>
          {/* <DetailFlexDiv justifycontent="space-between"> */}
          <DetailPtag>{todo.id.substring(0, 5)}</DetailPtag>
          <MoveHomeButton
            onClick={() => {
              navigate("/");
            }}
          >
            이전
          </MoveHomeButton>
        </DetailFlexDiv>
        <DetailH2>{todo.title}</DetailH2>
        <DetailPtag>{todo.body}</DetailPtag>
      </DetailBox>
    </DetailFlexDiv>
  );
}

export default Detail;
