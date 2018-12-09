import { fiveTypes } from '../typings/johnny-five'
import { lcdHandler } from '../lcd/lcd.handler'

class MessageHandler {
  printMessage(row: 0 | 1, msg: string) {
    const lcd = lcdHandler.getLcd()
    lcd.cursor(row, 0).print(' '.repeat(16))
    lcd.cursor(row, 0).print(msg)
  }
}

export const messageHandler = new MessageHandler()
