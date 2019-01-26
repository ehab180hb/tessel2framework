import * as five from 'johnny-five'

import { buttonHandler } from '../../button/button.handler'
import { PIN } from '../../board/board.model'
import { DeviceButton } from '../../button/button.model'
let buttonOnSpy: string[] = []
let buttonRemoveListenerSpy: string[] = []
let createdButtons: DeviceButton[] = []

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
  Object.defineProperty(buttonHandler, 'createdButtons', {
    value: [
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
    ],
  })
  createdButtons = Object.getOwnPropertyDescriptor(buttonHandler, 'createdButtons')!.value
})

describe('Button handler tests', () => {
  describe('checkButtonExistence()', () => {
    test('When button exists', () => {
      const res = buttonHandler.checkButtonExistence(PIN.b5, 'red')
      expect(res).toMatchSnapshot()
    })
    test('When button does not exit', () => {
      const res = buttonHandler.checkButtonExistence(PIN.b1, 'white')
      expect(res).toMatchSnapshot()
    })
  })
  describe('findOrCreateButton()', () => {
    test('when button exists', () => {
      const res = buttonHandler.findOrCreateButton(PIN.b5, 'red')
      expect(res).toMatchSnapshot()
    })
    test('when button does not exist', () => {
      const res = buttonHandler.findOrCreateButton(PIN.b1, 'white')
      expect(res).toMatchSnapshot()
    })
  })
  describe('createButton()', () => {
    test('when pin and name are available', () => {
      const res = buttonHandler.createButton(PIN.b2, 'white')
      expect(res).toMatchSnapshot()
    })
    test('when pin is occupied', async () => {
      expect(() => buttonHandler.createButton(PIN.b5, 'white')).toThrowErrorMatchingSnapshot()
    })
    test('when name is taken', () => {
      expect(() => buttonHandler.createButton(PIN.b1, 'red')).toThrowErrorMatchingSnapshot()
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
      buttonHandler.initDefaultButtons(mockDefaultButtons)
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
      buttonHandler.initDefaultButtons(mockDefaultButtons)
      expect(createdButtons).toMatchSnapshot()
    })
  })
  describe('findButton()', () => {
    test('when button exists', () => {
      const res = buttonHandler.findButton('red')
      expect(res).toMatchSnapshot()
    })
    test('when button does not exist', () => {
      const res = buttonHandler.findButton('white')
      expect(res).toBeFalsy()
    })
  })
  describe('clearButton()', () => {
    test('when button exists', () => {
      buttonHandler.clearButton('red')
      expect(buttonRemoveListenerSpy).toMatchSnapshot()
    })
    test('when button exists and event type specified', () => {
      buttonHandler.clearButton('red', 'press')
      expect(buttonRemoveListenerSpy).toMatchSnapshot()
    })
    test('when button does not exist', () => {
      expect(() => buttonHandler.clearButton('white')).toThrowErrorMatchingSnapshot()
    })
  })
  describe('updateButton()', () => {
    const cb = () => {}
    test('when button exists', () => {
      buttonHandler.updateButton('red', 'hold', cb)
      expect({ buttonRemoveListenerSpy, buttonOnSpy }).toMatchSnapshot()
    })
    test('when button does not exist', () => {
      expect(() => buttonHandler.updateButton('white', 'hold', cb)).toThrowErrorMatchingSnapshot()
    })
  })
  describe('updateButtonPress()', () => {
    const cb = () => {}
    test('when button exists', () => {
      buttonHandler.updateButtonPress('red', cb)
      expect({ buttonRemoveListenerSpy, buttonOnSpy }).toMatchSnapshot()
    })
    test('when button does not exist', () => {
      expect(() => buttonHandler.updateButtonPress('white', cb)).toThrowErrorMatchingSnapshot()
    })
  })
})
