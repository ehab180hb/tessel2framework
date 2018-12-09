import { updateScreen } from '../lcd/lcd.events'
import { welcomeMessage } from '../config'

export const welcomeScreenHandler = (): void => {
  const { row1, row2 } = welcomeMessage

  updateScreen({
    row1,
    row2,
  })
}
