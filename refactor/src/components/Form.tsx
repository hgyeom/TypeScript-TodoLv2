import uuid from "react-uuid";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "redux/modules/todo";
import { Todo } from "model/todos";

const Form = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  // title 변경
  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // body 변경
  const bodyChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBody(e.target.value);
  };

  const addButtonClickHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!title || !body) {
      alert("제목 혹은 내용을 입력해주세요.");
      return;
    }

    const newTodo: Todo = {
      id: uuid(),
      title,
      body,
      isDone: false,
    };

    dispatch(addTodo(newTodo));
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
