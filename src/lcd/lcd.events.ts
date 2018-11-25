import { newMessage } from '../messages/messages.handler'
import { boardEvents, BoardEvents } from '../board/board.events'
import { fiveTypes } from '../typings/johnny-five'

interface UpdateScreenInput {
  row1?: string
  row2?: string
  lcd: fiveTypes.LCD
}

export const attachScreenUpdate = (updateScreenParams: UpdateScreenInput): void => {
  const emptyRow = ' '.repeat(16)
  const { row1 = emptyRow, row2 = emptyRow, lcd } = updateScreenParams
  const writeMsg = newMessage(lcd)
  writeMsg(0, row1)
  writeMsg(1, row2)
}

export const updateScreen = (updateScreenParams: UpdateScreenInput) => {
  boardEvents.emit(BoardEvents.UPDATE_SCREEN, updateScreenParams)
}
