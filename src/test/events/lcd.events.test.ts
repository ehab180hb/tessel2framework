import { attachScreenUpdate, updateScreen } from '../../lcd/lcd.events'
import { initComponents } from '../../init'
import { initDefaultButtons } from '../../button/button.handler'
const lcd: any = {
  cursor: (x: any, y: any) => {},
  print: (x: any) => 'x',
}
describe('LCD events', () => {
  beforeEach(() => {
    lcd.cursor = jest.fn(() => lcd)
    lcd.print = jest.fn(() => lcd)
    ;(initDefaultButtons as any) = jest.fn(() => {})
  })
  describe('attachScreenUpdate()', () => {
    test('works with default parameters', () => {
      attachScreenUpdate({ lcd })
      expect(lcd).toMatchSnapshot()
    })

    test('works with custom parameters', () => {
      attachScreenUpdate({ lcd, row1: 'hi', row2: 'hello' })
      expect(lcd).toMatchSnapshot()
    })
  })

  describe('updateButtons()', () => {
    test('Works with custom parameters', () => {
      initComponents()
      updateScreen({
        lcd,
        row1: `I'm green`,
        row2: 'therefore I exist',
      })
      expect(lcd).toMatchSnapshot()
    })
  })
})
