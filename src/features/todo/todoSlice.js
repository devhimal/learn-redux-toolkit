import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
  todos: [{ id: 1, text: "hello devhimal" }]
}

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // ➕ Add Todo
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo)
    },

    // ❌ Remove Todo
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      )
    },

    // ✏️ Update Todo
    updateTodo: (state, action) => {
      const { id, newText } = action.payload

      const existingTodo = state.todos.find(
        (todo) => todo.id === id
      )

      if (existingTodo) {
        existingTodo.text = newText
      }
    }
  }
})

// Export actions
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

// Export reducer
export default todoSlice.reducer
