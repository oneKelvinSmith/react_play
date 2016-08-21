import { describe, it } from 'mocha'
import { expect } from 'chai'
import reducer from '../app/reducers/todos'
import * as types from '../app/constants/ActionTypes'

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).to.deep.equal([
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }
    ])
  })

  it('should handle adding a todo', () => {
    expect(
      reducer([], {
        type: types.ADD_TODO,
        text: 'Run the tests'
      })
    ).to.deep.equal([
      {
        text: 'Run the tests',
        completed: false,
        id: 0
      }
    ])

    it('should handle an additional todo', () => {
      const existingTodo = {
        text: 'Use Redux',
        completed: false,
        id: 0
      }

      expect(
        reducer(
          [existingTodo],
          {
            type: types.ADD_TODO,
            text: 'Run the tests'
          }
        )
      ).toEqual(
        [
          {
            text: 'Run the tests',
            completed: false,
            id: 1
          },
          {
            text: 'Use Redux',
            completed: false,
            id: 0
          }
        ]
      )
    })
  })
})
