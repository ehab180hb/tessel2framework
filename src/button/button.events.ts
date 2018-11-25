import { greenButton, redButton, blueButton } from '../button/button.handler'
import { BoardEvents, boardEvents } from '../board/board.events'

interface UpdateButtonsInput {
  greenButtonCb?: () => void
  redButtonCb?: () => void
  blueButtonCb?: () => void
}

export const attachButtonUpdate = (updateButtonsParams: UpdateButtonsInput): void => {
  const emptyButtonCb = () => {}
  const {
    greenButtonCb = emptyButtonCb,
    redButtonCb = emptyButtonCb,
    blueButtonCb = emptyButtonCb,
  } = updateButtonsParams
  greenButton(greenButtonCb)
  redButton(redButtonCb)
  blueButton(blueButtonCb)
}

export const updateButtons = (updateButtonsParams: UpdateButtonsInput) => {
  boardEvents.emit(BoardEvents.UPDATE_BUTTONS, updateButtonsParams)
}
