import { PIN } from './board/board.model'

export const defaultButtons = [
  {
    name: 'red',
    pin: PIN.b5,
  },
  {
    name: 'green',
    pin: PIN.b6,
  },
  {
    name: 'blue',
    pin: PIN.b7,
  },
]

export const LCDPins: PIN[] = [PIN.a2, PIN.a3, PIN.a4, PIN.a5, PIN.a6, PIN.a7]
