import { describe, it } from 'mocha'
import { expect } from 'chai'
import * as actions from '../app/actions/TodoActions'
import * as types from '../app/constants/ActionTypes'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      type: types.ADD_TODO,
      text
    }

    expect(actions.addTodo(text)).to.deep.equal(expectedAction)
  })

  it('should create an action to toggle a todo', () => {
    const id = 42
    const expectedAction = {
      type: types.TOGGLE_TODO,
      id: id
    }

    expect(actions.toggleTodo(id)).to.deep.equal(expectedAction)
  })
})
