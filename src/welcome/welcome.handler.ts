import { getLcd } from '../lcd/lcd.handler'
import { updateScreen } from '../lcd/lcd.events'

export const welcomeScreenHandler = (): void => {
  const lcd = getLcd()

  updateScreen({
    lcd,
    row1: 'Skynet',
    row2: 'started here',
  })
}
