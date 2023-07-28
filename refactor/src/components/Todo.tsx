import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "redux/config/configStore";
import { removeTodo, changeTodo } from "redux/modules/todo";

type TodoProps = {
  isDone: boolean;
};

const Todo = ({ isDone }: TodoProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // store 조회
  const todoList = useSelector((state: RootState) => state.todos.todos);

  const removeButtonClickHandler = (id: string) => {
    dispatch(removeTodo(id));
  };

  const changeButtonClickHandler = (id: string) => {
    dispatch(changeTodo(id));
  };

  return (
    <div className="todo-container">
      <h2>{isDone ? "Done" : "Working"}</h2>
      <section className="todo-wrapper">
        {todoList
          .filter((item) => item.isDone === isDone)
          .map((todo) => {
            return (
              <div className="card" key={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.body}</p>
                <div className="card-button">
                  <button onClick={() => removeButtonClickHandler(todo.id)}>
                    삭제
                  </button>
                  <button onClick={() => changeButtonClickHandler(todo.id)}>
                    {todo.isDone ? "취소" : "완료"}
                  </button>
                </div>
                <p
                  onClick={() => {
                    navigate(`details/${todo.id}`);
                  }}
                >
                  상세보기
                </p>
              </div>
            );
          })}
      </section>
    </div>
  );
};

export default Todo;
