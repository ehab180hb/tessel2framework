import * as five from 'johnny-five'
import { PIN } from '../board/board.model'

const getButton = (pin: PIN) => (cb: () => void) => new five.Button(pin).on('press', cb)

export const redButton = getButton(PIN.b5)
export const greenButton = getButton(PIN.b6)
export const blueButton = getButton(PIN.b7)
