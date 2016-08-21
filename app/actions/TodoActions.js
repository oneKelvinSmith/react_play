let currentId = 0
export const addTodo = (text) => {
  return {
    id: ++currentId,
    type: 'ADD_TODO',
    text
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}
