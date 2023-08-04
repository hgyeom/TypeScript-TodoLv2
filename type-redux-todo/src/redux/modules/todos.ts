import { Todo } from "model/todos";
import { v4 as uuid } from "uuid";

const ADD_TODO = "todos/ADD_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;

// action creator
export const addTodo = (todo: Todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodo = (id: string) => ({
  type: REMOVE_TODO,
  payload: id,
});

export const toggleTodo = (id: string) => ({
  type: TOGGLE_TODO,
  payload: id,
});

type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof removeTodo>
  | ReturnType<typeof toggleTodo>;

interface TodosState {
  todos: Todo[];
  todo?: Todo;
}

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
    {
      id: uuid(),
      title: "클린코드 강의",
      body: "클린코드 강의 다 듣기",
      isDone: true,
    },
  ],
};

function todos(
  state: TodosState = initialState,
  action: TodosAction
): TodosState {
  switch (action.type) {
    case ADD_TODO:
      return { todos: [...state.todos, action.payload] };
    case REMOVE_TODO:
      const filterdTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        todos: filterdTodos,
      };
    case TOGGLE_TODO:
      const todos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );
      return {
        todos,
      };
    default:
      return state;
  }
}

export default todos;
