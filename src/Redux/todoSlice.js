import { createSlice } from "@reduxjs/toolkit";

let todosTask = [];
let statusAdd = false;
const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todosTask,
    statusAdd
  },
  reducers: {
    addTodoTask: {
      reducer: (state, action) => {
        state.todosTask.push(action.payload);
      },
      prepare: (id, name, surname, credit) => ({
        payload: {
          id,
          name,
          surname,
          credit
        }
      }),
    },
    editTodoTask: {
      reducer: (state, action) => {
        state.todosTask.map(todo => {
          if (todo.id === action.payload.id) {
            todo.name = action.payload.name;
            todo.surname = action.payload.surname;
            todo.credit = action.payload.credit;
          }
          return todo;
        });
      },
      prepare: (id, name, surname, credit) => ({
        payload: {
          id,
          name, 
          surname, 
          credit
        }
      }),
    },

    removeTodoTask(state, action) {
      state.todosTask.map((todo) => {
        return (todo.id === action.payload.id) ? state.todosTask.splice(state.todosTask.indexOf(todo), 1) : null;
      })
    },
    getTodoTask(state, action) {
      action.payload.map((todo) => state.todosTask.push(todo));
    },
    changeStatusAdd(state, action) {
      state.statusAdd = action.payload;
    },
  },
});

export const { addTodoTask, removeTodoTask, getTodoTask, editTodoTask, changeStatusAdd } = todoSlice.actions;
export default todoSlice.reducer;