import { newMessage } from '../../messages/messages.handler'

const lcd: any = {
  cursor: (x: any, y: any) => {},
  print: (x: any) => 'x',
}

describe('Messages handler', () => {
  beforeEach(() => {
    lcd.cursor = jest.fn(() => lcd)
    lcd.print = jest.fn(() => lcd)
  })

  describe('newMessage()', () => {
    test('Clears row and prints message', () => {
      const writeMessage = newMessage(lcd)
      writeMessage(0, 'myMessage')
      expect(lcd).toMatchSnapshot()
    })
  })
})
