import uuid from "react-uuid";

// action value
const ADD_TODO = "todo/reducer/ADD_TODO";
const REMOVE_TODO = "todo/reducer/REMOVE_TODO";
const CHANGE_TODO = "todo/reducer/CHANGE_TODO";
const READ_TODO = "todo/reducer/READ_TODO";

//action creator
export const addTodo = (payload: any) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const removeTodo = (payload: any) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export const changeTodo = (payload: any) => {
  return {
    type: CHANGE_TODO,
    payload,
  };
};

export const readTodo = (payload: any) => {
  return {
    type: READ_TODO,
    payload,
  };
};

const initialState = {
  todos: [
    {
      id: uuid(),
      title: "리액트",
      body: "리액트 과제 끝내기",
      isDone: true,
    },
    {
      id: uuid(),
      title: "리액트",
      body: "리액트 강의 다시보기",
      isDone: false,
    },
    {
      id: uuid(),
      title: "알고리즘",
      body: "프로그래머스 문제 풀기",
      isDone: false,
    },
  ],
  todo: {
    id: "0",
    title: "",
    body: "",
    isDone: false,
  },
};

const todos = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case CHANGE_TODO:
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.isDone = !todo.isDone;
            return todo;
          } else {
            return todo;
          }
        }),
      };
    case READ_TODO:
      return {
        ...state,
        todo: state.todos.find((todo) => todo.id === action.payload),
      };

    default:
      return state;
  }
};
export default todos;
