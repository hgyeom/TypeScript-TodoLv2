import { Todo } from "model/todos";
import { v4 as uuid } from "uuid";

const ADD_TODO = "todos/ADD_TODO" as const;
const REMOVE_TODO = "todos/ADD_TODO" as const;
const CHANGE_TODO = "todos/ADD_TODO" as const;
const READ_TODO = "todos/ADD_TODO" as const;

// action creator
export const addTodo = (todo: Todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodo = (id: string) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const changeTodo = (id: string) => ({
  type: CHANGE_TODO,
  payload: id,
});

export const readTodo = (id: string) => ({
  type: READ_TODO,
  payload: id,
});

type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof changeTodo>
  | ReturnType<typeof readTodo>;

type TodosState = {
  todos: Todo[];
  todo?: Todo;
};

const initialState: TodosState = {
  todos: [
    {
      id: uuid(),
      title: "타입스크립트 2레벨",
      body: "처음부터 만들기",
      isDone: false,
    },
    {
      id: uuid(),
      title: "잠자기",
      body: "꿀잠자기",
      isDone: false,
    },
  ],
};

function todos(
  state: TodosState = initialState,
  action: TodosAction
): TodosState {
  switch (action.type) {
    case ADD_TODO:
      return state;
    case REMOVE_TODO:
      return state;
    case CHANGE_TODO:
      return state;
    case READ_TODO:
      return state;
    default:
      return state;
  }
}

export default todos;
