import * as five from 'johnny-five'
import { PIN } from '../board/board.model'
import { ButtonsPinLayout } from '../config'
const { redButtonPin, greenButtonPin, blueButtonPin } = ButtonsPinLayout

const getButton = (pin: PIN) => (cb: () => void) => new five.Button(pin).on('press', cb)

export const redButton = getButton(redButtonPin)
export const greenButton = getButton(greenButtonPin)
export const blueButton = getButton(blueButtonPin)
