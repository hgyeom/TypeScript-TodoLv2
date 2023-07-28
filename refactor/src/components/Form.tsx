import uuid from "react-uuid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "redux/modules/todo";

const Form = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // title 변경
  const titleChangeHandler = (e: any) => {
    setTitle(e.target.value);
  };

  // body 변경
  const bodyChangeHandler = (e: any) => {
    setBody(e.target.value);
  };

  const addButtonClickHandler = (e: any) => {
    e.preventDefault();
    // if (document.querySelector(".title-input").getAttribute("value") === "") {
    //   alert("제목을 입력해 주세요.");
    //   document.querySelector(".title-input").focus();
    //   return;
    // }
    // if (document.querySelector(".body-input").getAttribute("value") === "") {
    //   alert("내용을 입력해 주세요.");
    //   document.querySelector(".body-input").focus();
    //   return;
    // }

    const todo = {
      id: uuid(),
      title,
      body,
      isDone: false,
    };

    dispatch(addTodo(todo));
    setTitle("");
    setBody("");
  };

  return (
    <form>
      <div className="form-input">
        <label>제목</label>
        <input
          type="text"
          className="title-input"
          value={title}
          onChange={titleChangeHandler}
        />
        <label>내용</label>
        <input
          type="text"
          className="body-input"
          value={body}
          onChange={bodyChangeHandler}
        />
      </div>
      <button onClick={addButtonClickHandler}>추가하기</button>
    </form>
  );
};

export default Form;
