import * as five from 'johnny-five'
import { redButton, greenButton, blueButton } from '../../button/button.handler'
import { PIN } from '../../board/board.model'

describe('Buttons handler', () => {
  let buttonSpy: { e: any; fn: any; pin: PIN }
  const testFn = () => 'x'

  beforeEach(() => {
    ;(five.Button as any) = jest.fn(pin => ({
      on: (e: any, fn: any) => {
        buttonSpy = { e, fn, pin }
      },
    }))
  })

  test('Red button works', () => {
    redButton(testFn)
    expect(buttonSpy.e).toBe('press')
    expect(buttonSpy.fn).toBe(testFn)
    expect(buttonSpy.pin).toBe(PIN.b5)
  })

  test('Green button works', () => {
    greenButton(testFn)
    expect(buttonSpy.e).toBe('press')
    expect(buttonSpy.fn).toBe(testFn)
    expect(buttonSpy.pin).toBe(PIN.b6)
  })

  test('Blue button works', () => {
    blueButton(testFn)
    expect(buttonSpy.e).toBe('press')
    expect(buttonSpy.fn).toBe(testFn)
    expect(buttonSpy.pin).toBe(PIN.b7)
  })
})
