import { lcdHandler } from '../../lcd/lcd.handler'

export const mockLCD = () => {
  const lcd: any = {
    cursor: jest.fn(() => lcd),
    print: jest.fn(() => lcd),
  }
  lcdHandler.getLcd = () => lcd
  return lcd
}
