/* eslint-env mocha */

import { expect } from 'chai'
import * as actions from '../app/actions/TodoActions'
import * as types from '../app/constants/ActionTypes'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      id: 1,
      type: types.ADD_TODO,
      text
    }
    expect(actions.addTodo(text)).to.deep.equal(expectedAction)
  })
})
