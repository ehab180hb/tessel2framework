import { attachScreenUpdate, updateScreen } from '../../lcd/lcd.events'
import { initComponents } from '../../init'
import { initDefaultButtons } from '../../button/button.handler'
import { lcdHandler } from '../../lcd/lcd.handler'
import { mockLCD } from '../mocks/lcd.mock'
let lcd: any

describe('LCD events', () => {
  beforeEach(() => {
    lcd = mockLCD()
    ;(initDefaultButtons as any) = jest.fn(() => {})
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
