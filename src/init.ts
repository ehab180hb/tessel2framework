import { boardEvents, BoardEvents } from './board/board.events'
import { attachScreenUpdate } from './lcd/lcd.events'
import { attachButtonUpdate } from './button/button.events'

export const initComponents = () => {
  boardEvents.on(BoardEvents.UPDATE_SCREEN, attachScreenUpdate)
  boardEvents.on(BoardEvents.UPDATE_BUTTONS, attachButtonUpdate)
}
