import { fiveTypes } from '../typings/johnny-five'

export const newMessage = (lcd: fiveTypes.LCD) => (line: 0 | 1, msg: string) => {
  lcd.cursor(line, 0).print(' '.repeat(16))
  lcd.cursor(line, 0).print(msg)
}
