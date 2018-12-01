import { boardEvents, BoardEvents } from './board/board.events'
import { attachScreenUpdate } from './lcd/lcd.events'
import { defaultButtons } from './config'
import { initDefaultButtons } from './button/button.handler'

export const initComponents = () => {
  boardEvents.on(BoardEvents.UPDATE_SCREEN, attachScreenUpdate)
  initDefaultButtons(defaultButtons)
}
