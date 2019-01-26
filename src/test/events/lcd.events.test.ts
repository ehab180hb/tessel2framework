import { attachScreenUpdate, updateScreen } from '../../lcd/lcd.events'
import { initComponents } from '../../init'
import { buttonHandler } from '../../button/button.handler'
import { mockLCD } from '../mocks/lcd.mock'
let lcd: any

describe('LCD events', () => {
  beforeEach(() => {
    lcd = mockLCD()
    ;(buttonHandler.initDefaultButtons as any) = jest.fn(() => {})
  })
  describe('attachScreenUpdate()', () => {
    test('works with default parameters', () => {
      attachScreenUpdate({})
      expect(lcd).toMatchSnapshot()
    })

    test('works with custom parameters', () => {
      attachScreenUpdate({ row1: 'hi', row2: 'hello' })
      expect(lcd).toMatchSnapshot()
    })
  })

  describe('updateButtons()', () => {
    test('Works with custom parameters', () => {
      initComponents()
      updateScreen({
        row1: `I'm green`,
        row2: 'therefore I exist',
      })
      expect(lcd).toMatchSnapshot()
    })
  })
})
