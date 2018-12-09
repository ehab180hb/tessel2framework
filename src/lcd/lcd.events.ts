import { messageHandler } from '../messages/messages.handler'
import { boardEvents, BoardEvents } from '../board/board.events'

interface UpdateScreenInput {
  row1?: string
  row2?: string
}

export const attachScreenUpdate = (updateScreenParams: UpdateScreenInput): void => {
  const emptyRow = ' '.repeat(16)
  const { row1 = emptyRow, row2 = emptyRow } = updateScreenParams
  messageHandler.printMessage(0, row1)
  messageHandler.printMessage(1, row2)
}

export const updateScreen = (updateScreenParams: UpdateScreenInput) => {
  boardEvents.emit(BoardEvents.UPDATE_SCREEN, updateScreenParams)
}
