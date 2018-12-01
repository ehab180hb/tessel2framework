import * as five from 'johnny-five'

import {
  createdButtons,
  checkButtonExistence,
  findOrCreateButton,
  createButton,
  initDefaultButtons,
  findButton,
  clearButton,
  updateButton,
  updateButtonPress,
} from '../../button/button.handler'
import { PIN } from '../../board/board.model'
let buttonOnSpy: string[] = []
let buttonRemoveListenerSpy: string[] = []

beforeEach(() => {
  buttonOnSpy = []
  buttonRemoveListenerSpy = []
  ;(five.Button as any) = jest.fn(pin => ({
    on: (e: string, fn: Function) => {
      buttonOnSpy.push(JSON.stringify({ e, fn: fn.name, pin }))
    },
    removeAllListeners: (e?: string) => {
      buttonRemoveListenerSpy.push(JSON.stringify({ e, pin }))
    },
  }))
  ;(createdButtons as any) = [
    {
      name: 'red',
      pin: PIN.b5,
      listener: new five.Button(PIN.b5),
    },
    {
      name: 'green',
      pin: PIN.b6,
      listener: new five.Button(PIN.b6),
    },
    {
      name: 'blue',
      pin: PIN.b7,
      listener: new five.Button(PIN.b7),
    },
  ]
})

describe('Button handler tests', () => {
  describe('checkButtonExistence()', () => {
    test('When button exists', () => {
      const res = checkButtonExistence(PIN.b5, 'red')
      expect(res).toMatchSnapshot()
    })
    test('When button does not exit', () => {
      const res = checkButtonExistence(PIN.b1, 'white')
      expect(res).toMatchSnapshot()
    })
  })
  describe('findOrCreateButton()', () => {
    test('when button exists', () => {
      const res = findOrCreateButton(PIN.b5, 'red')
      expect(res).toMatchSnapshot()
    })
    test('when button does not exist', () => {
      const res = findOrCreateButton(PIN.b1, 'white')
      expect(res).toMatchSnapshot()
    })
  })
  describe('createButton()', () => {
    test('when pin and name are available', () => {
      const res = createButton(PIN.b2, 'white')
      expect(res).toMatchSnapshot()
    })
    test('when pin is occupied', async () => {
      expect(() => createButton(PIN.b5, 'white')).toThrowErrorMatchingSnapshot()
    })
    test('when name is taken', () => {
      expect(() => createButton(PIN.b1, 'red')).toThrowErrorMatchingSnapshot()
    })
  })
  describe('initDefaultButtons()', () => {
    test('when buttons are available', () => {
      const mockDefaultButtons = [
        {
          name: 'white',
          pin: PIN.b1,
        },
        {
          name: 'black',
          pin: PIN.b2,
        },
        {
          name: 'purple',
          pin: PIN.b3,
        },
      ]
      initDefaultButtons(mockDefaultButtons)
      expect(createdButtons).toMatchSnapshot()
    })
    test('when buttons are not available', () => {
      const mockDefaultButtons = [
        {
          name: 'red',
          pin: PIN.b5,
        },
        {
          name: 'green',
          pin: PIN.b6,
        },
        {
          name: 'blue',
          pin: PIN.b7,
        },
      ]
      initDefaultButtons(mockDefaultButtons)
      expect(createdButtons).toMatchSnapshot()
    })
  })
  describe('findButton()', () => {
    test('when button exists', () => {
      const res = findButton('red')
      expect(res).toMatchSnapshot()
    })
    test('when button does not exist', () => {
      const res = findButton('white')
      expect(res).toBeFalsy()
    })
  })
  describe('clearButton()', () => {
    test('when button exists', () => {
      clearButton('red')
      expect(buttonRemoveListenerSpy).toMatchSnapshot()
    })
    test('when button exists and event type specified', () => {
      clearButton('red', 'press')
      expect(buttonRemoveListenerSpy).toMatchSnapshot()
    })
    test('when button does not exist', () => {
      expect(() => clearButton('white')).toThrowErrorMatchingSnapshot()
    })
  })
  describe('updateButton()', () => {
    const cb = () => {}
    test('when button exists', () => {
      updateButton('red', 'hold', cb)
      expect({ buttonRemoveListenerSpy, buttonOnSpy }).toMatchSnapshot()
    })
    test('when button does not exist', () => {
      expect(() => updateButton('white', 'hold', cb)).toThrowErrorMatchingSnapshot()
    })
  })
  describe('updateButtonPress()', () => {
    const cb = () => {}
    test('when button exists', () => {
      updateButtonPress('red', cb)
      expect({ buttonRemoveListenerSpy, buttonOnSpy }).toMatchSnapshot()
    })
    test('when button does not exist', () => {
      expect(() => updateButtonPress('white', cb)).toThrowErrorMatchingSnapshot()
    })
  })
})
