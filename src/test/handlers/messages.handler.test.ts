import { messageHandler } from '../../messages/messages.handler'
import { mockLCD } from '../mocks/lcd.mock'

let lcd: any
describe('Messages handler', () => {
  beforeEach(() => {
    lcd = mockLCD()
    lcd.cursor = jest.fn(() => lcd)
    lcd.print = jest.fn(() => lcd)
  })

  describe('newMessage()', () => {
    test('Clears row and prints message', () => {
      messageHandler.printMessage(0, 'myMessage')
      expect(lcd).toMatchSnapshot()
    })
  })
})
