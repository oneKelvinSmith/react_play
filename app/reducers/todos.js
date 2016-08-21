import { ADD_TODO, TOGGLE_TODO } from '../constants/ActionTypes'

const initialState = [
  {
    text: 'Use Redux',
    completed: false,
    id: 0
  }
]

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        },
        ...state
      ]
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo
        }

        return Object.assign({}, state, {
          completed: !todo.completed
        })
      })
    default:
      return state
  }
}

export default todos
