import { Action, ActionTypes, Todo } from "model/todos";
import uuid from "react-uuid";

// action creator
export const addTodo = (payload: Todo) => {
  return {
    type: ActionTypes.ADD_TODO,
    payload,
  };
};

export const removeTodo = (payload: string) => {
  return {
    type: ActionTypes.REMOVE_TODO,
    payload,
  };
};

export const changeTodo = (payload: string) => {
  return {
    type: ActionTypes.CHANGE_TODO,
    payload,
  };
};

export const readTodo = (payload: string) => {
  return {
    type: ActionTypes.READ_TODO,
    payload,
  };
};

// state의 타입
type TodoState = {
  todos: Todo[];
  todo?: Todo;
};

const initialState: TodoState = {
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
};

const todos = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case ActionTypes.REMOVE_TODO:
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case ActionTypes.CHANGE_TODO:
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case ActionTypes.READ_TODO:
      if (action.payload) {
        const todo = state.todos.find((todo) => todo.id === action.payload);
        return {
          ...state,
          todo: todo as Todo,
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};
export default todos;
