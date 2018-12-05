import { getLcd } from '../lcd/lcd.handler'
import { updateScreen } from '../lcd/lcd.events'
import { welcomeMessage } from '../config'

export const welcomeScreenHandler = (): void => {
  const lcd = getLcd()

  const { row1, row2 } = welcomeMessage

  updateScreen({
    lcd,
    row1,
    row2,
  })
}
