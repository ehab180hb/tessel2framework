import { getLcd } from '../lcd/lcd.handler'
import { updateScreen } from '../lcd/lcd.events'
import { updateButtons } from '../button/button.events'

export const welcomeScreenHandler = (): void => {
  const lcd = getLcd()

  updateScreen({
    lcd,
    row1: 'Skynet',
    row2: 'started here',
  })

  updateButtons({
    redButtonCb: () => console.log(`I'm red`),
    greenButtonCb: () => console.log(`I'm green`),
    blueButtonCb: () => console.log(`I'm blue`),
  })
}
